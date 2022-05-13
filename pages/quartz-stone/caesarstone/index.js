import CollectionTitle from "@components/CollectionTitle";
import ColourVariation from "@components/ColourVariation";
import FrSf from "@components/FrSf";
import Hero from "@components/Hero";
import MainSection from "@components/MainSection";
import MetaSEO from "@components/MetaSEO";
import StsDisplay from "@components/StsDisplay";
import { Heading2s } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  caesarstoneDeluxe,
  caesarstoneOutdoor,
  caesarstonePremium,
  caesarstoneStandard,
  caesarstoneSupernatural,
  caesarstoneSupernaturalJumbo,
  caesarstoneSupernaturalPremium,
  caesarstoneSupernaturalPremiumJumbo,
} from "const/caesarstone-data";
import Image from "next/image";
import { ColourWarning, PriceTerm, SectionContact } from "../../../components";

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
        subtitle="Supply &amp; Install Caesarstone Quartz Surface Countertop"
        noMB
      />

      <MainSection>
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

        <Heading2s>{`Caesarstone Malaysia's Distributor`}</Heading2s>
        <Typography
          paragraph
        >{`Stone Innovations Enterprise is one of the Caesarstone distributors in Malaysia.`}</Typography>
        <Typography
          paragraph
        >{`We distribute Caesarstone slabs or fabricate, supply & install Caesarstone quartz surfaces for countertops, wall cladding and other surface decorative applications.`}</Typography>

        <Heading2s>The Vendor Website</Heading2s>
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
        <Typography paragraph>
          {`If you happen to visit Caesarstone US and Caesarstone Australia's website, which contains the full range of colour options, please ignore and refer to this web page when you're choosing the colour.`}
        </Typography>
        <Typography>
          Again, to avoid choosing the not available colour in Malaysia,
          different naming or for more Caesarstone information, we highly
          recommend you visit the Caesarstone Singapore website, where the
          information, naming and colour range is simultaneous.
        </Typography>
      </MainSection>
      <Container maxWidth="md">
        <Heading2s isCenter>
          The Catalogue & Pricing Of Supply & Install Caesarstone Quartz
          Surfaces Countertop In Malaysia.
        </Heading2s>
      </Container>
      <FrSf />

      <Container maxWidth="lg">
        <CollectionTitle>Standard Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneStandard.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Deluxe Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneDeluxe.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Premium Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstonePremium.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Supernatural Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneSupernatural.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Supernatural Jumbo Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneSupernaturalJumbo.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Supernatural Premium Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneSupernaturalPremium.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Supernatural Premium Jumbo Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneSupernaturalPremiumJumbo.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Outdoor Collection</CollectionTitle>
        <Grid container spacing={2}>
          {caesarstoneOutdoor.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                imgSrc,
                price,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourVariation stone="Caesarstone" />
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
