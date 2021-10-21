import CollectionTitle from "@components/CollectionTitle";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { Container, Grid } from "@mui/material";
import { zenstone } from "const/pricing";

const { premium } = zenstone;

const ZenstonePremium = () => {
  return (
    <Container maxWidth="lg">
      <CollectionTitle>Premium Series</CollectionTitle>
      <Grid container justifyContent="center" spacing={1}>
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201501.png"
          stoneName="Brown Cream"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201502.png"
          stoneName="Yellow Hill"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201503.png"
          stoneName="England Coffee"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q4015.png"
          stoneName="Purple Galaxy"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601501.png"
          stoneName="Blue Sapphire"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601502.png"
          stoneName="Beige Gold"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601503.png"
          stoneName="White Gold"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601504.png"
          stoneName="Cameo"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601505.png"
          stoneName="Black Gold"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601506.png"
          stoneName="White Gold Sand"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601507.png"
          stoneName="Beige Gold Medium"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601508.png"
          stoneName="Coffee Gold Sand"
          price={premium}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q601509.png"
          stoneName="Golden Coffee"
          price={premium}
        />
      </Grid>
    </Container>
  );
};

export default ZenstonePremium;
