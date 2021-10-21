import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { standardJumbo } = caesarstone20;

const CaesarstoneStandardJumbo = () => {
  return (
    <>
      <CollectionTitle>Standard Jumbo Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/4130.png"
          stoneName="4130 Clamshell (Polished)"
          price={standardJumbo}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneStandardJumbo;
