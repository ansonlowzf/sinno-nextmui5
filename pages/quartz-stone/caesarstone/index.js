import { Typography, Grid } from "@material-ui/core";
import {
  ColourPricing,
  ColourWarning,
  Hero,
  SectionContact,
  SubNavbar,
  PriceTerm,
  MetaSEO,
} from "../../../components";
import { qsRoutes } from "../../../const/nav-links";
import { Heading2, SectionWrapper, TextWrapper } from "../../../element";
import Image from "next/image";

const CaesarstonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Caesarstone Quartz Surface"
        pageDesc="We are one of the Caesarstone distributor in Malaysia. We fabricate, supply &amp; install Caesarstone Kitchen Top"
        pagePath="quartz-stone/caesarstone"
        metaImg="/caesarstone/hero.png"
      />
      <Hero
        imgSrc="/caesarstone/hero.png"
        imgText="Caesarstone Empira White"
        title="Caesarstone Malaysia"
        subtitle="Caesarstone Quartz Surface Kitchen Top"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 15 }}
        >
          <Grid item xs={6} sx={{ position: "relative" }}>
            <Image
              src="/caesarstone/logo.png"
              alt="caesarstone logo"
              layout="responsive"
              width={469}
              height={75}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Caesarstone Quartz Surface</Heading2>
        <TextWrapper>
          <Typography paragraph>
            Caesarstone is one of the highest quality quartz stone you could
            find in the market right now.
          </Typography>
          <Typography paragraph>
            {` It's designed to mimic the colour of natural stone while maintaining
            the benefit of quartz stone and providing a natural and premium
            feeling to your home design.`}
          </Typography>
          <Typography paragraph>
            Imagine you have a beautiful kitchen top which no need to worry
            about scratches, heat burnt mark, and so easy to maintain. Cooking
            feels so accessible now.
          </Typography>
          <Typography>
            {`Stone Innovations Enterprise is Caesarstone Malaysia's distributor.
            We distribute Caesarstone slabs and fabricate, supply &amp; install
            Caesarstone products such as kitchen top, island top, vanity top and
            wall cladding.`}
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Colour &amp; Pricing</Heading2>
        <TextWrapper>
          <Typography align="center" sx={{ mb: 5 }}>
            The price shown below is for all the 34 Caesarstone colours
            available in Malaysia in 20mm thick. 13mm is also available for a
            10% lower price.
          </Typography>
        </TextWrapper>
        <ColourPricing />
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Caesarstone" />
      </SectionWrapper>
    </>
  );
};

export default CaesarstonePage;
