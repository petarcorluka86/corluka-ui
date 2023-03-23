import styled, { CSSObject } from "styled-components";
import Box, { BoxProps } from "@components/Box";

export interface FlexProps extends BoxProps {
  display?: "none" | "inline-flex" | "flex";
  align?: CSSObject["alignItems"];
  justify?: CSSObject["justifyContent"];
  direction?: CSSObject["flexDirection"];
  wrap?: CSSObject["flexWrap"];
  gap?: CSSObject["gap"];
}

const Flex = styled(Box)<FlexProps>`
  display: ${(p) => p.display};
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  flex-direction: ${(p) => p.direction};
  flex-wrap: ${(p) => p.wrap};
`;

Flex.defaultProps = {
  display: "flex",
  align: "normal",
  justify: "flex-start",
  direction: "row",
  wrap: "nowrap",
};

export default Flex;
