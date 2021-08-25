import { AppBar, Container, Grid, Typography } from "@material-ui/core";
import { MuiNextLink } from ".";

export const SubNavbar = ({ routes }) => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Grid container item justifyContent="space-evenly">
          {routes.map(({ name, path }, index) => (
            <Typography
              component={MuiNextLink}
              key={`${name}${index}`}
              href={path}
              underline="none"
              sx={{
                py: 2.3,
                color: "common.black",
                textTransform: "uppercase",

                "&:hover": {
                  color: "white",
                },
              }}
            >
              {name}
            </Typography>
          ))}
        </Grid>
      </Container>
    </AppBar>
  );
};
