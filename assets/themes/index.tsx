import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";

let createThemeStyle = createTheme({
  palette: palette,
  typography: typography,
});

createThemeStyle = responsiveFontSizes(createThemeStyle);
export const theme = createThemeStyle;
