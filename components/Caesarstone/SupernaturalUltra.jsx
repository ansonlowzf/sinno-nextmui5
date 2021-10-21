import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernaturalUltra } = caesarstone20;

const CaesarstoneSupernaturalUltra = () => {
  return (
    <>
      <CollectionTitle>Supernatural Ultra Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/5031.png"
          stoneName="5031 Statuario Maximus (Polished)"
          price={supernaturalUltra}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5101.png"
          stoneName="5101 Empira Black (Polished/Natural)"
          price={supernaturalUltra}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5131.png"
          stoneName="5131 Calacatta Nuvo (Polished)"
          price={supernaturalUltra}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneSupernaturalUltra;
