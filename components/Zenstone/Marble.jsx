import CollectionTitle from "@components/CollectionTitle";
import { SlabDisplay } from "@components/SlabDisplay";
import { Container, Grid } from "@mui/material";
import { zenstone } from "const/pricing";

const { marble } = zenstone;

const ZenstoneMarble = () => {
  return (
    <Container maxWidth="lg">
      <CollectionTitle>Marble Series</CollectionTitle>
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

export default ZenstoneMarble;
