import { css } from "styled-components";

export const fontValues = {
  default: { fontSize: "16px", fontWeight: "normal" },
  defaultBold: { fontSize: "16px", fontWeight: "bold" },
  largeDefault: { fontSize: "18px", fontWeight: "normal" },
  assistive: { fontSize: "10px", fontWeight: "normal" },
  assistiveBold: { fontSize: "10px", fontWeight: "bold" },
  title: { fontSize: "24px", fontWeight: "normal" },
  subtitle: { fontSize: "20px", fontWeight: "normal" },
  largeTitle: { fontSize: "32px", fontWeight: "normal" },
  extraLargeTitle: { fontSize: "48px", fontWeight: "bold" },
};

export type FontKey = keyof typeof fontValues;

export interface FontRulesProps {
  font?: FontKey;
}

const getFontSize = (key?: FontKey) => {
  if (!key) {
    return;
  } else {
    return fontValues[key as FontKey].fontSize;
  }
};

const getFontWeight = (key?: FontKey) => {
  if (!key) {
    return;
  } else {
    return fontValues[key as FontKey].fontSize;
  }
};

export const fontRules = css<FontRulesProps>`
  font-size: ${(p) => getFontSize(p.font)};
  font-weight: ${(p) => getFontWeight(p.font)};
`;
