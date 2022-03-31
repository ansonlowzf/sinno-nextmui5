import ContactMarble from "@components/ContactMarble";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Marble = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Marble"
        pageDesc="Supply or Supply &amp; Install Marble for flooring application"
        pagePath="/marble"
        metaImg="/marble/hero.jpg"
      />
      <Hero
        imgSrc="/marble/hero.jpg"
        imgAlt="marble floor"
        title="Marble"
        subtitle="Supply &amp; Install Marble For Flooring Application"
      />

      <Container maxWidth="lg">
        <Heading3>Marble Colour</Heading3>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Image
              src="/marble/colour-sample/dyno.jpg"
              alt="Marble Dyno Beige"
              layout="responsive"
              width={620}
              height={350}
            />
            <Typography align="center" sx={{ mt: 2 }}>
              Dyno Beige
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/marble/colour-sample/new-ultraman.jpg"
              alt="Marble New Ultraman"
              layout="responsive"
              width={620}
              height={350}
            />
            <Typography align="center" sx={{ mt: 2 }}>
              New Ultraman
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <SectionWrapper>
        <ContactMarble />
      </SectionWrapper>
    </>
  );
};

export default Marble;
