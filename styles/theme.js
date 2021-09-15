import { blue, blueGrey, grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: grey[900],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
