import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { deepPurple, amber } from "@material-ui/core/colors";

let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
