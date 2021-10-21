import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernaturalUltraJumbo } = caesarstone20;

const CaesarstoneSupernaturalUltraJumbo = () => {
  return (
    <>
      <CollectionTitle>Supernatural Ultra Jumbo Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/4735.png"
          stoneName="4735 Oxidian (Natural)"
          price={supernaturalUltraJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5151.png"
          stoneName="5151 Empira White (Polished)"
          price={supernaturalUltraJumbo}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneSupernaturalUltraJumbo;
