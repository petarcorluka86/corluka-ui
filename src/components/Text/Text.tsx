import { colorRules, ColorRulesProps } from "@utils/colors";
import { fontRules, FontRulesProps } from "@utils/font";
import { spaceRules, SpaceRulesProps } from "@utils/spacing";
import styled from "styled-components";

export interface TextProps
  extends SpaceRulesProps,
    ColorRulesProps,
    FontRulesProps {
  block?: boolean;
}

const Text = styled.span<TextProps>`
  ${spaceRules}
  ${colorRules}
  ${fontRules}
  display: ${(p) => (p.block ? "block" : "inline")};
`;

Text.defaultProps = {
  color: "onSurface1",
  font: "default",
};

export default Text;
