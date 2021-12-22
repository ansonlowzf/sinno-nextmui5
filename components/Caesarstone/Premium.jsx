import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { Grid } from "@mui/material";
import { caesarstone20 } from "const/pricing";

const { premium } = caesarstone20;

const Premium = () => {
  return (
    <>
      <CollectionTitle>Premium Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/1141.jpg"
          stoneName="1141 Pure White (Polished)"
          price={premium}
        />
        <DisplayStone
          imgSrc="/caesarstone/5110.jpg"
          stoneName="5110 Alpine Mist (Polished)"
          price={premium}
        />
        <DisplayStone
          imgSrc="/caesarstone/6131.jpg"
          stoneName="6131 Bianco Drift (Polished)"
          price={premium}
        />
        <DisplayStone
          imgSrc="/caesarstone/6313.jpg"
          stoneName="6313 Turbine Grey (Polished)"
          price={premium}
        />
      </Grid>
    </>
  );
};

export default Premium;
