import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernatural } = caesarstone20;

const CaesarstoneSupernatural = () => {
  return (
    <>
      <CollectionTitle>Supernatural Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/5003.png"
          stoneName="5003 Piatra Grey (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5100.png"
          stoneName="5100 Vanilla Noir (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5133.png"
          stoneName="5133 Symphony Grey (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5141.png"
          stoneName="5141 Frosty Carrina (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/5143.png"
          stoneName="5143 White Attica (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/6046.png"
          stoneName="6046 Moorland Fog (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/6338.png"
          stoneName="6338 Woodlands (Polished)"
          price={supernatural}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneSupernatural;
