import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernaturalJumbo } = caesarstone20;

const SupernaturalJumbo = () => {
  return (
    <>
      <CollectionTitle>Supernatural Jumbo Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/4011.jpg"
          stoneName="4011 Cloudburst Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/4023.jpg"
          stoneName="4023 Topus Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/4033.jpg"
          stoneName="4033 Rugged Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/4044.jpg"
          stoneName="4044 Airy Concrete (Rough)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/5222.jpg"
          stoneName="5222 Adamina (Polished)"
          price={supernaturalJumbo}
        />
        <DisplayStone
          imgSrc="/caesarstone/5810.jpg"
          stoneName="5810 Black Tempal (Natural)"
          price={supernaturalJumbo}
        />
      </Grid>
    </>
  );
};

export default SupernaturalJumbo;
