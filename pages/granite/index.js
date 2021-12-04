import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Box, Container, Grid } from "@mui/material";
import { ColourWarning, PriceTerm, SectionContact } from "../../components";
import DisplayStone from "@components/DisplayStone";

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

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading3>Colour &amp; Pricing</Heading3>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/granite/colour/black-galaxy.png"
              stoneName="Black Galaxy"
              price="RM 220 /FR or RM 120 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/blue-pearl.png"
              stoneName="Blue Pearl"
              price="RM 250 /FR or RM 135 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/bourbon-grey.png"
              stoneName="Bourbon Grey"
              price="RM 220 /FR or RM 120 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/emerald-pearl.png"
              stoneName="Emerald Pearl"
              price="RM 250 /FR or RM 135 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/imperial-red.png"
              stoneName="Imperial Red"
              price="RM 340 /FR or RM 180 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/white-wave.png"
              stoneName="White Wave"
              price="RM 310 /FR or RM 165 /SF"
            />
            <DisplayStone
              imgSrc="/granite/colour/xanxi-black.png"
              stoneName="Xan Xi Black"
              price="RM 310 /FR or RM 165 /SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

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
