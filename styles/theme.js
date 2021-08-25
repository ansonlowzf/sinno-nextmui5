import { blue, blueGrey, grey } from "@material-ui/core/colors";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

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
