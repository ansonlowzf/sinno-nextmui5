import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import KitchenTop from "../public/about/kitchen-top.png";
import QsSlab from "../public/about/qs-slab.png";

const AboutPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="About Us"
        pageDesc="We're a stonemason and factory that fabricate, custom-made, supply and install quartz stone, sintered stone and granite countertops for the kitchen."
        pagePath="/about"
        metaImg="/about/hero.jpg"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/about/hero.jpg"
          imgAlt="factory and warehouse"
          title="About Us"
          subtitle="Professional Stonemason"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Heading3>Stone Surfacing To Countertop</Heading3>
          <Typography align="center" sx={{ mb: 5 }}>
            Choose your favourite stone and colour, we turn it to the countertop
          </Typography>

          <Image src={QsSlab} alt="quartz stone slab" />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Image src={KitchenTop} alt="quartz stone kitchen top" />
            </Grid>
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
            >
              <Typography component="h3" variant="h5">
                Kitchen Top
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default AboutPage;
