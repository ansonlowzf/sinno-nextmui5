import CollectionTitle from "@components/CollectionTitle";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { Container, Grid } from "@mui/material";
import { zenstone } from "const/pricing";

const { noble } = zenstone;

const ZenstoneNoble = () => {
  return (
    <Container maxWidth="lg">
      <CollectionTitle>Noble Series</CollectionTitle>
      <Grid container justifyContent="center" spacing={1}>
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201505.png"
          stoneName="Pure Black"
          price={noble}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q202032.jpg"
          stoneName="Pure Grey"
          price={noble}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201541.png"
          stoneName="Super White"
          price={noble}
        />
      </Grid>
    </Container>
  );
};

export default ZenstoneNoble;
