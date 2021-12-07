import { Container, Grid, Typography } from "@mui/material";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { SectionWrapper } from "@elements/Wrapper";
import Image from "next/image";
import ContactMarble from "@components/ContactMarble";
import { MuiNextLink } from "@components/MuiNextLink";
import { Heading3 } from "@elements/Heading";

const Marble = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Marble"
        pageDesc="Supply or Supply &amp; Install Marble for flooring application"
        pagePath="/marble"
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

      <SectionWrapper>
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
              <MuiNextLink href="/marble/dyno" underline="none">
                <Typography align="center" sx={{ mt: 2 }}>
                  Dyno Beige
                </Typography>
              </MuiNextLink>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/marble/colour-sample/new-ultraman.jpg"
                alt="Marble New Ultraman"
                layout="responsive"
                width={620}
                height={350}
              />
              <MuiNextLink href="/marble/new-ultraman" underline="none">
                <Typography align="center" sx={{ mt: 2 }}>
                  New Ultraman
                </Typography>
              </MuiNextLink>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ContactMarble />
      </SectionWrapper>
    </>
  );
};

export default Marble;
