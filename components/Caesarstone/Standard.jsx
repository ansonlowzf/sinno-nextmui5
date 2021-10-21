import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { standard } = caesarstone20;

const CaesarstoneStandard = () => {
  return (
    <>
      <CollectionTitle>Standard Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/2141.png"
          stoneName="2141 Snow (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/3100.png"
          stoneName="3100 Jet Black (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4030.png"
          stoneName="4030 Oyster (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4220.png"
          stoneName="4220 Buttermilk (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4330.png"
          stoneName="4330 Ginger (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4350.png"
          stoneName="4350 Mink (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/6011.png"
          stoneName="6011 Intense White (Polished)"
          price={standard}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneStandard;
