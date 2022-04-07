import CollectionTitle from "@components/CollectionTitle";
import MetaSEO from "@components/MetaSEO";
import { Heading2s } from "@elements/Heading";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import {
  comacsClassic,
  comacsPremium,
  comacsSparkling,
  comacsNatural,
  comacsCasting,
} from "const/comacs-data";
import SolidSurfaceDisplay from "@components/SolidSurfaceDisplay";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";
import { ColourWarning } from "@components/ColourWarning";
import { PriceTerm } from "@components/PriceTerm";

const SolidSurface = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Solid Surface Malaysia"
        pageDesc="We fabricate, supply &amp; install Comacs solid surface countertop in Malaysia"
        pagePath="/solid-surface"
        metaImg="/solid-surface/logo.png"
      />
      <Grid container justifyContent="center" sx={{ mt: 15, mb: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Image
            src="/solid-surface/logo.png"
            alt="solid surface comacs logo"
            layout="responsive"
            width={500}
            height={500}
          />
        </Grid>
      </Grid>

      <Container maxWidth="md">
        <Heading2s isCenter>
          Supply & Install Comacs Solid Surface Countertop
        </Heading2s>

        <CollectionTitle>Classic</CollectionTitle>
        <Grid container spacing={2}>
          {comacsClassic.map(
            (
              { stoneName, materialCode, finish, thickness, imgSrc, price },
              i
            ) => (
              <SolidSurfaceDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Premium</CollectionTitle>
        <Grid container spacing={2}>
          {comacsPremium.map(
            (
              { stoneName, materialCode, finish, thickness, imgSrc, price },
              i
            ) => (
              <SolidSurfaceDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Sparkling</CollectionTitle>
        <Grid container spacing={2}>
          {comacsSparkling.map(
            (
              { stoneName, materialCode, finish, thickness, imgSrc, price },
              i
            ) => (
              <SolidSurfaceDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Natural</CollectionTitle>
        <Grid container spacing={2}>
          {comacsNatural.map(
            (
              { stoneName, materialCode, finish, thickness, imgSrc, price },
              i
            ) => (
              <SolidSurfaceDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>

        <CollectionTitle>Casting</CollectionTitle>
        <Grid container spacing={2}>
          {comacsCasting.map(
            (
              { stoneName, materialCode, finish, thickness, imgSrc, price },
              i
            ) => (
              <SolidSurfaceDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                imgSrc={imgSrc}
                price={price}
              />
            )
          )}
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Solid Surface" href="/contact/solid-surface" />
      </SectionWrapper>
    </>
  );
};

export default SolidSurface;
