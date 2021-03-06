import CollectionTitle from "@components/CollectionTitle";
import ColourVariation from "@components/ColourVariation";
import FrSf from "@components/FrSf";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import TwoColumnDisplay from "@components/TwoColumnDisplay";
import { Container, Grid, Typography } from "@mui/material";
import {
  zenstoneClassic,
  zenstoneMarbleQuartz,
  zenstoneNoble,
  zenstonePremium,
} from "const/zenstone-data";
import { Heading2s } from "elements/Heading";
import { SectionWrapper, TextWrapper } from "elements/Wrapper";
import Image from "next/image";
import { ColourWarning, PriceTerm, SectionContact } from "../../../components";

const ZenstonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Zenstone Quartz Surface"
        pageDesc="The main distributor of Zenstone quartz surface. We fabricate, supply &amp; install Zenstone Kitchen Top"
        pagePath="/quartz-stone/zenstone"
        metaImg="/zenstone/hero.jpg"
      />
      <Hero
        imgSrc="/zenstone/hero.jpg"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Malaysia's Brand OEM China Genuine Quartz Stone"
        noMB
      />

      <SectionWrapper>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={10} md={6}>
            <Image
              src="/zenstone/logo.png"
              alt="zenstone logo"
              layout="responsive"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
      <SectionWrapper>
        <TextWrapper>
          <Typography paragraph>{`
        A Malaysia's quartz stone's developed by Aston Builder in the year 2013 and was acquired by Stone Innovations Enterprise in the first quarter of the year 2017.
        `}</Typography>
          <Typography>
            Genuine quartz stone direct import from China which meet
            international SGS standard. Real quartz stone which comes with ten
            years limited warranty. More than 60 colours option.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <Container maxWidth="md">
        <Heading2s isCenter>
          The Catalogue & Pricing Of Supply & Install Zenstone Quartz Surfaces
          Countertop In Malaysia.
        </Heading2s>
      </Container>
      <FrSf />

      <Container maxWidth="md">
        <CollectionTitle>Classic Collection</CollectionTitle>
        <Grid container>
          {zenstoneClassic.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                series,
                imgSrc,
                price,
              },
              i
            ) => (
              <TwoColumnDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                series={series}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Premium Collection</CollectionTitle>
        <Grid container>
          {zenstonePremium.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                series,
                imgSrc,
                price,
              },
              i
            ) => (
              <TwoColumnDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                series={series}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Noble Collection</CollectionTitle>
        <Grid container>
          {zenstoneNoble.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                series,
                imgSrc,
                price,
              },
              i
            ) => (
              <TwoColumnDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                series={series}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Marble Quartz Collection</CollectionTitle>
        <Grid container>
          {zenstoneMarbleQuartz.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                series,
                imgSrc,
                price,
              },
              i
            ) => (
              <TwoColumnDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                series={series}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourVariation stone="Zenstone" />
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Zenstone" href="/contact/zenstone" />
      </SectionWrapper>
    </>
  );
};

export default ZenstonePage;
