import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper, TextWrapper } from "@elements/Wrapper";
import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import {
  ColourWarning,
  PriceTerm,
  SectionContact,
  SubNavbar,
} from "../../../components";
import { qsRoutes } from "../../../const/nav-links";
import CaesarstoneStandard from "@components/Caesarstone/Standard";
import CaesarstoneStandardJumbo from "@components/Caesarstone/StandardJumbo";
import CaesarstoneDeluxe from "@components/Caesarstone/Deluxe";
import CaesarstoneDeluxeJumbo from "@components/Caesarstone/DeluxeJumbo";
import CaesarstonePremium from "@components/Caesarstone/Premium";
import CaesarstoneSupernatural from "@components/Caesarstone/Supernatural";
import CaesarstoneSupernaturalJumbo from "@components/Caesarstone/SupernaturalJumbo";
import CaesarstoneSupernaturalUltra from "@components/Caesarstone/SupernaturalUltra";
import CaesarstoneSupernaturalUltraJumbo from "@components/Caesarstone/SupernaturalUltraJumbo";

const CaesarstonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Caesarstone Quartz Surface"
        pageDesc="We are one of the Caesarstone distributor in Malaysia. We fabricate, supply &amp; install Caesarstone Kitchen Top"
        pagePath="/quartz-stone/caesarstone"
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
        <Heading3>Distributor</Heading3>
        <TextWrapper>
          <Typography>
            We, Stone Innovations Enterprise is one of the Caesarstone
            distributor in Malaysia. We distribute Caesarstone slabs or
            fabricate, supply &amp; install Caesarstone quartz surface kitchen
            top, island top, vanity top and wall cladding.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading3>The Vendor Website</Heading3>
        <TextWrapper>
          <Typography paragraph>
            Caesarstone has more than 60 colours worldwide. However, only 32
            colours are available in Malaysia.
          </Typography>
          <Typography paragraph>
            This Caesarstone web page will only show you the colour selling in
            Malaysia and its pricing, respectively.
          </Typography>
          <Typography paragraph>
            For more information, supporting documents and product certificates,
            design inspiration, feel free to visit:-
          </Typography>
        </TextWrapper>
        <Grid container justifyContent="center" sx={{ my: 5 }}>
          <Button
            href="https://www.caesarstone.sg/"
            size="large"
            variant="contained"
            target="_blank"
          >
            Caesarstone Singapore
          </Button>
        </Grid>
        <TextWrapper>
          <Typography paragraph>
            {`If you happen to visit Caesarstone US and Caesarstone Australia's website, which contains the full range of colour options, please ignore and refer to this web page when you're choosing the colour.`}
          </Typography>
          <Typography>
            Again, to avoid choosing the not available colour and for more
            Caesarstone information, we highly recommend you visit the
            Caesarstone Singapore website, where the information and colour
            range is simultaneous.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading3>Colour &amp; Pricing</Heading3>
        <TextWrapper>
          <Typography align="center" sx={{ mb: 5 }}>
            The price shown below is for all the 32 Caesarstone colours
            available in Malaysia in 20mm thick. 13mm is also available for a
            10% lower price.
          </Typography>
        </TextWrapper>
        <Container maxWidth="lg">
          <CaesarstoneStandard />
          <CaesarstoneStandardJumbo />
          <CaesarstoneDeluxe />
          <CaesarstoneDeluxeJumbo />
          <CaesarstonePremium />
          <CaesarstoneSupernatural />
          <CaesarstoneSupernaturalJumbo />
          <CaesarstoneSupernaturalUltra />
          <CaesarstoneSupernaturalUltraJumbo />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Caesarstone" href="/contact/caesarstone" />
      </SectionWrapper>
    </>
  );
};

export default CaesarstonePage;
