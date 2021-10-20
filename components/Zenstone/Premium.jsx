import { Container, Grid, Typography } from "@mui/material";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { zenstone } from "const/pricing";

const { premium } = zenstone;

export const ZenstonePremium = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h3"
        variant="h5"
        fontWeight="bold"
        align="center"
        sx={{ bgcolor: "primary.main", mb: 2, py: 2 }}
      >
        Premium Series
      </Typography>
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
