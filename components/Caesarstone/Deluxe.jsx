import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { Grid } from "@mui/material";
import { caesarstone20 } from "const/pricing";

const { deluxe } = caesarstone20;

const Deluxe = () => {
  return (
    <>
      <CollectionTitle>Deluxe Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/4001.jpg"
          stoneName="4001 Fresh Concrete (Concrete)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/4120.jpg"
          stoneName="4120 Raven (Polished)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/4230.jpg"
          stoneName="4230 Shitake (Polished)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/4600.jpg"
          stoneName="4600 Organic White (Polished)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/4601.jpg"
          stoneName="4601 Frozen Terra (Concrete)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/6134.jpg"
          stoneName="6134 Georgian Bluffs (Polished)"
          price={deluxe}
        />
      </Grid>
    </>
  );
};

export default Deluxe;
