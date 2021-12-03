import { Container, Grid } from "@mui/material";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { SectionWrapper } from "@elements/Wrapper";
import DisplayStone from "@components/DisplayStone";

const Marble = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Flooring | Marble"
        pageDesc="Supply or Supply &amp; Install Marble for flooring application"
        pagePath="marble"
        metaImg="/marble/hero.jpg"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/marble/hero.jpg"
          imgAlt="marble floor"
          title="Marble"
          subtitle="Supply &amp; Install Marble For Flooring Application"
        />
      </SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <DisplayStone
            imgSrc="/granite/colour/black-galaxy.png"
            stoneName="Black Galaxy"
            price="RM 220 /FR or RM 120 /SF"
          />
        </Grid>
      </Container>
    </>
  );
};

export default Marble;
