import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { deluxeJumbo } = caesarstone20;

const CaesarstoneDeluxeJumbo = () => {
  return (
    <>
      <CollectionTitle>Deluxe Jumbo Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/4120.png"
          stoneName="4120 Raven (Polished)"
          price={deluxeJumbo}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneDeluxeJumbo;
