import { Button, Container, Grid, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MuiNextLink } from "@components/MuiNextLink";

const BackNextPanel = ({
  BackTo,
  BackToStone,
  stoneMenu,
  stoneMenuLink,
  NextTo,
  NextToStone,
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
          <MuiNextLink href={BackTo} underline="none">
            <Button>
              <ArrowBack fontSize="large" />
            </Button>
            <Typography align="center">{BackToStone}</Typography>
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
            <Button variant="contained">Back To {stoneMenu}</Button>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          xs={3}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href={NextTo} underline="none">
            <Button>
              <ArrowForward fontSize="large" />
            </Button>
            <Typography align="center">{NextToStone}</Typography>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BackNextPanel;
