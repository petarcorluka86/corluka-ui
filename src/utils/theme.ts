import { DefaultTheme } from "styled-components";
import { queries } from "./breakpoints";
import { ColorPalette, darkColorPalette, lightColorPalette } from "./colors";
import { spacingValues } from "./spacing";

export const lightTheme: DefaultTheme = {
  name: "light",
  colors: lightColorPalette,
  spacing: spacingValues,
  queries,
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors: darkColorPalette,
  spacing: spacingValues,
  queries,
};

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: ColorPalette;
    spacing: typeof spacingValues;
    queries: typeof queries;
  }
}
