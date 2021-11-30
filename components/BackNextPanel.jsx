import { Button, Container, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MuiNextLink } from "@components/MuiNextLink";

const BackNextPanel = ({ BackTo, NextTo }) => {
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
          <MuiNextLink href={BackTo}>
            <Button>
              <ArrowBack fontSize="large" />
            </Button>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href="/granite">
            <Button variant="contained">Back To Granite</Button>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          xs={3}
          justifyContent="center"
          alignContent="center"
        >
          <MuiNextLink href={NextTo}>
            <Button>
              <ArrowForward fontSize="large" />
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BackNextPanel;
