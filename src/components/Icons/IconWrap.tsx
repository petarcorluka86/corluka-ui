import { colorRules, ColorRulesProps } from "@utils/colors";
import { spaceRules, SpaceRulesProps } from "@utils/spacing";
import styled from "styled-components";

export interface IconProps extends SpaceRulesProps, ColorRulesProps {
  viewBox?: string;
}

const _IconWrap = styled.svg<IconProps>`
  ${spaceRules}
  ${colorRules}
`;

const IconWrap: React.FC<IconProps & { children: React.ReactNode }> = ({
  children,
  h,
  w,
  ...props
}) => {
  return (
    <_IconWrap width={w} height={h} {...props}>
      {children}
    </_IconWrap>
  );
};

IconWrap.defaultProps = {
  w: 24,
  h: 24,
  fill: "onSurface1",
};

export default IconWrap;
