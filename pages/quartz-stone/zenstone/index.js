import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import ZenstoneClassic from "@components/Zenstone/Classic";
import ZenstoneMarble from "@components/Zenstone/Marble";
import ZenstoneNoble from "@components/Zenstone/Noble";
import ZenstonePremium from "@components/Zenstone/Premium";
import { Grid, Typography } from "@mui/material";
import { Heading2 } from "elements/Heading";
import { SectionWrapper, TextWrapper } from "elements/Wrapper";
import Image from "next/image";
import {
  ColourWarning,
  PriceTerm,
  SectionContact,
  SubNavbar,
} from "../../../components";
import { qsRoutes } from "../../../const/nav-links";

const ZenstonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Zenstone Quartz Surface"
        pageDesc="The main distributor of Zenstone quartz surface. We fabricate, supply &amp; install Zenstone Kitchen Top"
        pagePath="quartz-stone/zenstone"
        metaImg="/zenstone/hero.jpg"
      />
      <Hero
        imgSrc="/zenstone/hero.jpg"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Malaysia's Brand OEM China Genuine Quartz Stone"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={10} md={2}>
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

      <SectionWrapper>
        <Heading2>Colour &amp; Shades</Heading2>
        <ZenstoneClassic />
        <ZenstonePremium />
        <ZenstoneNoble />
        <ZenstoneMarble />
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Zenstone" />
      </SectionWrapper>
    </>
  );
};

export default ZenstonePage;
