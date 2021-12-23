import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { Grid } from "@mui/material";
import { caesarstone20 } from "const/pricing";

const { outdoor } = caesarstone20;

const Outdoor = () => {
  return (
    <>
      <CollectionTitle>Outdoor Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/0405.jpg"
          stoneName="0405 Midday (Concrete)"
          price={outdoor}
        />
        <DisplayStone
          imgSrc="/caesarstone/0406.jpg"
          stoneName="0406 Clear Skies (Concrete)"
          price={outdoor}
        />
        <DisplayStone
          imgSrc="/caesarstone/0515.jpg"
          stoneName="0515 Palm Shade (Honed)"
          price={outdoor}
        />
      </Grid>
    </>
  );
};

export default Outdoor;
