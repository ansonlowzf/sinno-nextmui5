import { blue, grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: blue,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
