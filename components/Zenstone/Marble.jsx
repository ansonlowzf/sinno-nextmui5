import { Container, Grid, Typography } from "@mui/material";
import { SlabDisplay } from "@components/SlabDisplay";
import { zenstone } from "const/pricing";

const { marble } = zenstone;

export const ZenstoneMarble = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h3"
        variant="h5"
        fontWeight="bold"
        align="center"
        sx={{ bgcolor: "primary.main", mb: 2, py: 2 }}
      >
        Marble Series
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        <SlabDisplay
          imgSrc="/zenstone/qs/Q801501slab.jpg"
          stoneName="Cararra White"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q801534.jpg"
          stoneName="Black Ice Bloom"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q801535.jpg"
          stoneName="Black Marquina"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802021.jpg"
          stoneName="Snow Flower"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802023.jpg"
          stoneName="Arabescato Corchia"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802025.jpeg"
          stoneName="Black Marquina"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802026.jpg"
          stoneName="Fabricator White"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802027.jpg"
          stoneName="Staturio White"
          price={marble}
        />

        <SlabDisplay
          imgSrc="/zenstone/qs/Q802031-slab.jpg"
          stoneName="Calacatta Venato"
          price={marble}
        />
      </Grid>
    </Container>
  );
};
