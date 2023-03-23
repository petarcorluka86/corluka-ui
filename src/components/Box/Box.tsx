import { colorRules, ColorRulesProps } from "@utils/colors";
import { spaceRules, SpaceRulesProps } from "@utils/spacing";
import styled from "styled-components";

export interface BoxProps extends SpaceRulesProps, ColorRulesProps {}

const Box = styled.div<BoxProps>`
  ${spaceRules};
  ${colorRules};
`;

export default Box;
