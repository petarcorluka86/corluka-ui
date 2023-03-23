import { css, CSSObject } from "styled-components";

export const spacingValues = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "32px",
  xxxl: "48px",
};

export interface SpaceRulesProps {
  h?: CSSObject["height"];
  maxH?: CSSObject["maxHeight"];
  minH?: CSSObject["minHeight"];
  w?: CSSObject["width"];
  maxW?: CSSObject["maxWidth"];
  minW?: CSSObject["minWidth"];

  m?: CSSObject["margin"] | keyof typeof spacingValues;
  mt?: CSSObject["marginTop"] | keyof typeof spacingValues;
  mb?: CSSObject["marginBottom"] | keyof typeof spacingValues;
  ml?: CSSObject["marginLeft"] | keyof typeof spacingValues;
  mr?: CSSObject["marginRight"] | keyof typeof spacingValues;
  mx?: CSSObject["margin"] | keyof typeof spacingValues;
  my?: CSSObject["margin"] | keyof typeof spacingValues;

  p?: CSSObject["padding"] | keyof typeof spacingValues;
  pt?: CSSObject["paddingTop"] | keyof typeof spacingValues;
  pb?: CSSObject["paddingBottom"] | keyof typeof spacingValues;
  pl?: CSSObject["paddingLeft"] | keyof typeof spacingValues;
  pr?: CSSObject["paddingRight"] | keyof typeof spacingValues;
  px?: CSSObject["padding"] | keyof typeof spacingValues;
  py?: CSSObject["padding"] | keyof typeof spacingValues;

  position?: CSSObject["position"];
  top?: CSSObject["top"];
  right?: CSSObject["right"];
  bottom?: CSSObject["bottom"];
  left?: CSSObject["left"];

  br?: CSSObject["borderRadius"] | keyof typeof spacingValues;
  gap?: CSSObject["gap"] | keyof typeof spacingValues;
}

export const parseSpacingValue = (value?: string | number | CSSObject) => {
  if (!value) {
    return;
  } else if (typeof value === "number") {
    return `${value}px`;
  } else {
    return spacingValues[value as keyof typeof spacingValues] || value;
  }
};

export const spaceRules = css<SpaceRulesProps>`
  height: ${(p) => parseSpacingValue(p.h)};
  max-height: ${(p) => parseSpacingValue(p.maxH)};
  min-height: ${(p) => parseSpacingValue(p.minH)};
  width: ${(p) => parseSpacingValue(p.w)};
  max-width: ${(p) => parseSpacingValue(p.maxW)};
  min-width: ${(p) => parseSpacingValue(p.minW)};

  margin: ${(p) => parseSpacingValue(p.m)};
  margin-top: ${(p) => parseSpacingValue(p.mt || p.my)};
  margin-bottom: ${(p) => parseSpacingValue(p.mb || p.my)};
  margin-left: ${(p) => parseSpacingValue(p.ml || p.mx)};
  margin-right: ${(p) => parseSpacingValue(p.mr || p.mx)};

  padding: ${(p) => parseSpacingValue(p.p)};
  padding-top: ${(p) => parseSpacingValue(p.pt || p.py)};
  padding-bottom: ${(p) => parseSpacingValue(p.pb || p.py)};
  padding-left: ${(p) => parseSpacingValue(p.pl || p.px)};
  padding-right: ${(p) => parseSpacingValue(p.pr || p.px)};

  position: ${(p) => parseSpacingValue(p.position)};
  top: ${(p) => parseSpacingValue(p.top)};
  right: ${(p) => parseSpacingValue(p.right)};
  bottom: ${(p) => parseSpacingValue(p.bottom)};
  left: ${(p) => parseSpacingValue(p.left)};

  border-radius: ${(p) => parseSpacingValue(p.br)};
  gap: ${(p) => parseSpacingValue(p.gap)};
`;

export enum ZIndex {
  Sticky = 50,
  Fixed = 100,
  Modal = 101,
}
