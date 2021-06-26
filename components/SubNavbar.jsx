import { AppBar, Container, Grid, Typography } from "@material-ui/core";
import { MuiNextLink } from ".";

export const SubNavbar = ({ routes }) => {
  return (
    <AppBar position="sticky" color="secondary" sx={{ mb: 5 }}>
      <Container maxWidth="md">
        <Grid container item justifyContent="space-evenly">
          {routes.map(({ name, path }, index) => (
            <Typography
              component={MuiNextLink}
              key={`${name}${index}`}
              href={path}
              underline="hover"
              sx={{
                py: 2.5,
                color: (theme) => theme.palette.common.black,
                opacity: "0.7",
                textTransform: "uppercase",
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
