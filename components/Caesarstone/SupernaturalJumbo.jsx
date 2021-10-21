import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernaturalJumbo } = caesarstone20;

const CaesarstoneSupernaturalJumbo = () => {
  return (
    <>
      <CollectionTitle>Supernatural Jumbo Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/4011.png"
          stoneName="4011 Cloudburst Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4023.png"
          stoneName="4023 Topus Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4033.png"
          stoneName="4033 Rugged Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4044.png"
          stoneName="4044 Airy Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5810.png"
          stoneName="5810 Black Tempal (Natural)"
          price={supernaturalJumbo}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneSupernaturalJumbo;
