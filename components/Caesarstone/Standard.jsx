import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { standard } = caesarstone20;

const Standard = () => {
  return (
    <>
      <CollectionTitle>Standard Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/2141.jpg"
          stoneName="2141 Snow (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/3100.jpg"
          stoneName="3100 Jet Black (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/4030.jpg"
          stoneName="4030 Oyster (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/4130.jpg"
          stoneName="4130 Clamshell (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/4220.jpg"
          stoneName="4220 Buttermilk (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/4330.jpg"
          stoneName="4330 Ginger (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/4350.jpg"
          stoneName="4350 Mink (Polished)"
          price={standard}
        />
        <DisplayStone
          imgSrc="/caesarstone/6011.jpg"
          stoneName="6011 Intense White (Polished)"
          price={standard}
        />
      </Grid>
    </>
  );
};

export default Standard;
