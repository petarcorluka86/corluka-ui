import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import summary from 'rollup-plugin-summary'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import packageJson from './package.json'

const fs = require('fs')

/**
 * Get Rollup plugins for each entry.
 *
 * @param isFlat - is flat build of whole library
 */
const plugins = (isFlat, excludingDirs = []) => [
  // Prints out a summary of the rollup build
  summary(),
  // Exclude peer deps such from final bundle.
  peerDepsExternal(),
  // Locate and bundle third-party dependencies from node_modules.
  resolve(),
  // Convert CommonJS modules into ES6.
  commonjs({
    exclude: 'node_modules',
    ignoreGlobal: true,
  }),
  // Integrate with TypeScript.
  typescript({
    useTsconfigDeclarationDir: !!isFlat,
    declaration: true,
    declarationDir: 'dist/modules',
    tsconfigOverride: {
      exclude: [
        'dist',
        'node_modules',
        '.storybook',
        '**/*test.ts*',
        '**/__tests__/**',
        '**/*.story.ts*',
        '**/*.stories.ts*',
        ...excludingDirs,
      ],
    },
  }),
  // Minify and compress our output JavaScript files on production.
  process.env.NODE_ENV === 'production' && terser(),
]

export const getFiles = (entry, extensions = [], regex) => {
  let fileNames = []
  const dirs = fs.readdirSync(entry)

  dirs.forEach(dir => {
    const path = `${entry}/${dir}`

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions)]

      return
    }

    if (extensions.some(ext => dir.endsWith(ext))) {
      fileNames.push(path)
    }
  })

  if (regex) {
    const filtered = fileNames.filter(fileName => fileName.match(regex))
    return filtered
  } else {
    return fileNames
  }
}

export const getExcludingDirs = (entry, nonExcludedDirs = []) => {
  const dirs = fs.readdirSync(entry)
  const excludingDirs = dirs.filter(dir => !nonExcludedDirs.includes(dir)).map(dir => entry + '/' + dir)
  return excludingDirs
}

const flatFileConfig = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: plugins(true, []),
}

const iconsConfig = {
  input: getFiles('./src/Icons', ['.tsx'], '/src/Icons/Icon*'),
  output: {
    dir: 'dist/modules',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  // Use plugins put include only Icons and styles folder for Typescript integration.
  plugins: plugins(false, ['./src/Icons/index.ts', ...getExcludingDirs('./src', ['Icons', 'styles'])]),
  external: ['react', 'react-dom'],
}

export default [flatFileConfig, iconsConfig]
