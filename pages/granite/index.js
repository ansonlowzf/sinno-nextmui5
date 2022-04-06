import DisplayStone from "@components/DisplayStone";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid } from "@mui/material";
import { ColourWarning, PriceTerm, SectionContact } from "../../components";

const GranitePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Granite"
        pageDesc="Supply &amp; install granite kitchen top. There are seven colour and shades options."
        pagePath="/granite"
        metaImg="/granite/hero.jpg"
      />
      <Hero
        imgSrc="/granite/hero.jpg"
        imgText="Granite Blue Pearl"
        title="Granite"
        subtitle="Granite Kitchen Top"
      />

      <Container maxWidth="lg" sx={{ my: { xs: 5, sm: 10 } }}>
        <Heading3>Granite Colour &amp; Pricing</Heading3>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <DisplayStone
            imgSrc="/granite/colour/black-galaxy.jpg"
            stoneName="Black Galaxy"
            price="RM 220 /FR or RM 120 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/blue-pearl.jpg"
            stoneName="Blue Pearl"
            price="RM 250 /FR or RM 135 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/bourbon-grey.jpg"
            stoneName="Bourbon Grey"
            price="RM 220 /FR or RM 120 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/emerald-pearl.jpg"
            stoneName="Emerald Pearl"
            price="RM 250 /FR or RM 135 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/imperial-red.jpg"
            stoneName="Imperial Red"
            price="RM 340 /FR or RM 180 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/white-wave.jpg"
            stoneName="White Wave"
            price="RM 310 /FR or RM 165 /SF"
          />
          <DisplayStone
            imgSrc="/granite/colour/xanxi-black.jpg"
            stoneName="Xan Xi Black"
            price="RM 310 /FR or RM 165 /SF"
          />
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default GranitePage;
