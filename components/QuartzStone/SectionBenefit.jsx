import { Container, Grid } from "@material-ui/core";
import { Benefit } from "..";
import { Heading3, SectionWrapper } from "../../element";

export const SectionBenefit = () => (
  <SectionWrapper>
    <Container maxWidth="lg">
      <Heading3>Benefits of Quartz Stone</Heading3>
      <Grid container spacing={3}>
        <Benefit
          imgSrc="/quartz-stone/benefit/stain_resistance.jpg"
          title="Stain Resistance"
          desc="Virtually worry-free surfaces. Acidic food such as lemon juice or lime juice does not affect or could dim the surface. We can remove heavy colouring food such as red wine, turmeric, coffee or curry's stain with CIF cleaning cream or acetone. Most of the time, we can clean quartz stone top with soft cloth and water."
        />

        <Benefit
          imgSrc="/quartz-stone/benefit/heat_resistance.jpg"
          title="Heat Resistance"
          desc="Although quartz stone can resist heat up to 150°C, we recommend
              using trivets or hot pads for hot pots and pans. However, quartz
              stone can always tolerate brief exposures to moderately hot
              temperatures."
        />

        <Benefit
          imgSrc="/quartz-stone/benefit/scratch_resistance.jpg"
          title="Scratch Resistance"
          desc="Quartz stone resists scratches from most of the kitchen utensil.
              Quartz stone is scale 7 based on Mohs Hardness Scale, lower scale
              such as knife and nail will not cause scratches on quartz stone."
        />

        <Benefit
          imgSrc="/quartz-stone/benefit/chemical_resistance.jpg"
          title="Chemical Resistance"
          desc="Quartz stone resists scratches from most of the kitchen utensil. Quartz stone is scale 7 based on Mohs Hardness Scale, lower scale such as knife and nail will not cause scratches on quartz stone."
        />

        <Benefit
          imgSrc="/quartz-stone/benefit/mildew_resistance.jpg"
          title="Mildew Resistance"
          desc="Non-porous material prevents the growth of mould, mildew and bacteria on the surface. In other words, there is no room on the surface for them to live."
        />

        <Benefit
          imgSrc="/quartz-stone/benefit/non_porous.jpg"
          title="Non-Porous Material"
          desc="Quartz stone requests minimum maintenance and never needs to apply any sealant every few years to protect the surface. It's resilient and non-porous. Natural stone like marble requires multiple sealants to maintain luster, extend the lifetime of its beautiful surface and increase its stain resistance level."
        />
      </Grid>
    </Container>
  </SectionWrapper>
);
