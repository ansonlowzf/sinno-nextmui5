import { Container, Grid, Typography } from "@mui/material";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { zenstone } from "const/pricing";

const { classic } = zenstone;

export const ZenstoneClassic = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h3"
        variant="h5"
        fontWeight="bold"
        align="center"
        sx={{ bgcolor: "primary.main", mb: 2, py: 2 }}
      >
        Classic Series
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101503.png"
          stoneName="Smoothie White"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101506.png"
          stoneName="Smoothie Grey"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101508.png"
          stoneName="Smoothie Beige"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101509.png"
          stoneName="Red Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101510.png"
          stoneName="Brown Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101511.png"
          stoneName="Blue Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101512.png"
          stoneName="Purple Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101513.png"
          stoneName="Orange Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101521.png"
          stoneName="White Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101522.png"
          stoneName="Black Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101523.png"
          stoneName="Snow White"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101524.png"
          stoneName="Grey Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101525.png"
          stoneName="Beige Mirror"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101526.png"
          stoneName="Crystal White"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101527.png"
          stoneName="White Planet"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q101528.png"
          stoneName="Icy White"
          price={classic}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q3015.png"
          stoneName="Shell King"
          price={classic}
        />
      </Grid>
    </Container>
  );
};
