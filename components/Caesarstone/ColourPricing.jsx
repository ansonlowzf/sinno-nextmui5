import { DisplayStone } from "../../components";
import { caesarstone20 } from "../../const/pricing";
import { Container, Grid } from "@material-ui/core";

const {
  standard,
  deluxe,
  premium,
  supernatural,
  supernaturalUltra,
  standardJumbo,
  deluxeJumbo,
  supernaturalJumbo,
  supernaturalUltraJumbo,
} = caesarstone20;

export const ColourPricing = () => {
  return (
    <Container>
      <Grid container spacing={1} justifyContent="center">
        <DisplayStone
          imgSrc="/caesarstone/cs/1141.png"
          stoneName="1141 Pure White (Polished)"
          price={premium}
        />

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
          imgSrc="/caesarstone/cs/4011.png"
          stoneName="4011 Cloudburst Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4023.png"
          stoneName="4023 Topus Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4030.png"
          stoneName="4030 Oyster (Polished)"
          price={standard}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4033.png"
          stoneName="4033 Rugged Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4044.png"
          stoneName="4044 Airy Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4120.png"
          stoneName="4120 Raven (Polished)"
          price={deluxeJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4130.png"
          stoneName="4130 Clamshell (Polished)"
          price={standardJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4220.png"
          stoneName="4220 Buttermilk (Polished)"
          price={standard}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4230.png"
          stoneName="4230 Shitake (Polished)"
          price={deluxe}
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
          imgSrc="/caesarstone/cs/4600.png"
          stoneName="4600 Organic White (Polished)"
          price={deluxe}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4601.png"
          stoneName="4601 Frozen Terra (Matt)"
          price={deluxe}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/4735.png"
          stoneName="4735 Oxidian (Natural)"
          price={supernaturalUltraJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/5003.png"
          stoneName="5003 Piatra Grey (Polished)"
          price={supernaturalUltra}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/5031.png"
          stoneName="5031 Statuario Maximus (Polished)"
          price={supernaturalUltra}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/5100.png"
          stoneName="5100 Vanilla Noir (Polished)"
          price={supernatural}
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
          imgSrc="/caesarstone/cs/5151.png"
          stoneName="5151 Empira White (Polished)"
          price={supernaturalUltraJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/5810.png"
          stoneName="5810 Black Tempal (Natural)"
          price={supernaturalJumbo}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/6046.png"
          stoneName="6046 Moorland Fog (Polished)"
          price={supernatural}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/6011.png"
          stoneName="6011 Intense White (Polished)"
          price={standard}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/6131.png"
          stoneName="6131 Bianco Drift (Polished)"
          price={premium}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/6313.png"
          stoneName="6313 Turbine Grey (Polished)"
          price={premium}
        />

        <DisplayStone
          imgSrc="/caesarstone/cs/6338.png"
          stoneName="6338 Woodlands (Polished)"
          price={supernatural}
        />
      </Grid>
    </Container>
  );
};
