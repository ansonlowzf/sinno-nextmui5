import CollectionTitle from "@components/CollectionTitle";
import DisplayStone from "@components/DisplayStone";
import { Grid } from "@mui/material";
import { caesarstone20 } from "const/pricing";

const { deluxe } = caesarstone20;

const CaesarstoneDeluxe = () => {
  return (
    <>
      <CollectionTitle>Deluxe Collection</CollectionTitle>

      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/3101.png"
          stoneName="3101 Piatto Black (Natural)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4001.png"
          stoneName="4001 Fresh Concrete (Matt)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4230.png"
          stoneName="4230 Shitake (Polished)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4600.png"
          stoneName="4600 Organic White (Polished)"
          price={deluxe}
        />
        <DisplayStone
          imgSrc="/caesarstone/cs/4601.png"
          stoneName="4601 Frozen Terra (Matt)"
          price={deluxe}
        />
      </Grid>
    </>
  );
};

export default CaesarstoneDeluxe;
