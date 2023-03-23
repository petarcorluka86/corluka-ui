import { css } from "styled-components";

export const lightColorPalette = {
  primary: "#124596",
  primaryVariant: "black",
  onPrimary: "#FFFFFF",

  secondary: "black",
  secondaryVariant: "black",
  onSecondary: "white",

  neutral: "gray",

  surface0: "#FFFFFF",
  onSurface0: "#000000",

  surface1: "#FFFFFF",
  onSurface1: "#000000",

  surface2: "#FFFFFF11",
  onSurface2: "#FFFFFF",

  overlay: "#00000055",
};

export const darkColorPalette = { ...lightColorPalette };

export type ColorPalette = typeof lightColorPalette;
export type ColorKey = keyof ColorPalette;

export interface ColorRulesProps {
  color?: ColorKey;
  bg?: ColorKey;
  fill?: ColorKey;
}

export const colorRules = css<ColorRulesProps>`
  color: ${(p) => (p.color ? p.theme.colors[p.color] || p.color : undefined)};
  background-color: ${(p) => (p.bg ? p.theme.colors[p.bg] || p.bg : undefined)};
  fill: ${(p) => (p.fill ? p.theme.colors[p.fill] || p.fill : undefined)};
`;
