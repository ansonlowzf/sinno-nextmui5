import { Grid, Typography } from "@material-ui/core";
import { MuiNextLink } from "../components";

const NotFoundPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: `100vh` }}
    >
      <Grid item>
        <Typography variant="h1" sx={{ mb: 5 }}>
          404 Error - Page Not Found
        </Typography>
        <Typography align="center">
          Please click here to go the <MuiNextLink href="/">Home</MuiNextLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
