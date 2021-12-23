import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernaturalPremium } = caesarstone20;

const SupernaturalPremium = () => {
  return (
    <>
      <CollectionTitle>Supernatural Premium Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/5031.jpg"
          stoneName="5031 Statuario Maximus (Polished)"
          price={supernaturalPremium}
        />
        <DisplayStone
          imgSrc="/caesarstone/5101.jpg"
          stoneName="5101 Empira Black (Polished/Natural)"
          price={supernaturalPremium}
        />
        <DisplayStone
          imgSrc="/caesarstone/5131.jpg"
          stoneName="5131 Calacatta Nuvo (Polished)"
          price={supernaturalPremium}
        />
        <DisplayStone
          imgSrc="/caesarstone/5114.jpg"
          stoneName="5114 Calacatta Maximus (Polished/Natural)"
          price={supernaturalPremium}
        />
      </Grid>
    </>
  );
};

export default SupernaturalPremium;
