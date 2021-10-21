import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { Grid } from "@mui/material";
import { caesarstone20 } from "const/pricing";

const { premium } = caesarstone20;

const CaesarstonePremium = () => {
  return (
    <>
      <CollectionTitle>Premium Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/1141.png"
          stoneName="1141 Pure White (Polished)"
          price={premium}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/6131.png"
          stoneName="6131 Bianco Drift (Polished)"
          price={premium}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/6313.png"
          stoneName="6313 Turbine Grey (Polished)"
          price={premium}
        />
      </Grid>
    </>
  );
};

export default CaesarstonePremium;
