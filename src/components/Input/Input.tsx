import { colorRules, ColorRulesProps } from "@utils/colors";
import { fontRules, FontRulesProps } from "@utils/font";
import { spaceRules, SpaceRulesProps } from "@utils/spacing";
import styled from "styled-components";

export interface InputProps
  extends SpaceRulesProps,
    ColorRulesProps,
    FontRulesProps {}

const Input = styled.input<InputProps>`
  ${spaceRules};
  ${colorRules};
  ${fontRules}

  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.spacing.xxs};
  border: 1px solid ${(p) => p.theme.colors.neutral};
  box-shadow: none;

  ::placeholder {
    color: ${(p) => p.theme.colors.neutral};
  }

  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primary};
  }
`;

Input.defaultProps = {
  font: "default",
};

export default Input;
