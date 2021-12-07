import { Button, Container, Grid, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MuiNextLink } from "@components/MuiNextLink";

const BackNextPanel = ({
  backTo,
  backToStone,
  stoneMenu = "Menu",
  stoneMenuLink,
  nextTo,
  nextToStone,
}) => {
  return (
    <Container maxWidth="md" sx={{ my: 10 }}>
      <Grid container>
        <Grid
          container
          item
          xs={3}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href={backTo} underline="none">
            <Button>
              <ArrowBack fontSize="large" />
            </Button>
            <Typography align="center">{backToStone}</Typography>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href={stoneMenuLink}>
            <Button variant="outlined">Back To {stoneMenu}</Button>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          xs={3}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href={nextTo} underline="none">
            <Button>
              <ArrowForward fontSize="large" />
            </Button>
            <Typography align="center">{nextToStone}</Typography>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BackNextPanel;
