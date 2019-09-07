import { DefaultTheme } from "styled-components";
import { lightColors, darkColors } from "./colors";
import dimensions from "./dimensions";
import breakpoints from "./breakpoints";

export { default as GlobalStyle } from "./global";

const common = {
  dimensions,
  breakpoints,
  boxShadow: "0 6px 15px 0 rgba(36, 37, 38, 0.08);",
};

const lightTheme: DefaultTheme = {
  colors: lightColors,
  ...common,
};
const darkTheme: DefaultTheme = {
  colors: darkColors,
  ...common,
};

export { lightTheme, darkTheme };
