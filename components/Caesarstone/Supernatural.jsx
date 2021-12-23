import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { caesarstone20 } from "const/pricing";
import { Grid } from "@mui/material";

const { supernatural } = caesarstone20;

const Supernatural = () => {
  return (
    <>
      <CollectionTitle>Supernatural Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/5003.jpg"
          stoneName="5003 Piatra Grey (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5100.jpg"
          stoneName="5100 Vanilla Noir (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5112.jpg"
          stoneName="5112 Atera Blanco (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5171.jpg"
          stoneName="5171 Arabetto (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5133.jpg"
          stoneName="5133 Symphony Grey (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5141.jpg"
          stoneName="5141 Frosty Carrina (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/5143.jpg"
          stoneName="5143 White Attica (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/6046.jpg"
          stoneName="6046 Moorland Fog (Polished)"
          price={supernatural}
        />
        <DisplayStone
          imgSrc="/caesarstone/6338.jpg"
          stoneName="6338 Woodlands (Polished)"
          price={supernatural}
        />
      </Grid>
    </>
  );
};

export default Supernatural;
