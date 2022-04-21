import CollectionTitle from "@components/CollectionTitle";
import { ColourWarning } from "@components/ColourWarning";
import MetaSEO from "@components/MetaSEO";
import ProjectDisplay from "@components/ProjectDisplay";
import { SectionContact } from "@components/SectionContact";
import SolidSurfaceDisplay from "@components/SolidSurfaceDisplay";
import { Heading2s } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid, Typography } from "@mui/material";
import {
  comacsCasting,
  comacsClassic,
  comacsNatural,
  comacsPremium,
  comacsSparkling,
} from "const/comacs-data";
import { solidSurfaceSite } from "const/solid-surface-site";
import Image from "next/image";

const SolidSurface = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Solid Surface Malaysia"
        pageDesc="We fabricate, supply &amp; install solid surface countertop in Malaysia"
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
          The Catalogue & Pricing Of Supply & Install Solid Surface Countertop
          In Malaysia.
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
        <Heading2s isCenter>Price Term</Heading2s>
        <Typography component="ol">
          <li>
            The price include material, fabrication, installation &amp;
            transport.
          </li>
          <li>Final quotation price is based on on-site measurement.</li>
          <li>
            Price does not include dismantle of existing kitchen top if applied.
          </li>
          <li>
            Goods will be delivered and installed within 10 - 14 days or as
            earlier as possible.
          </li>
          <li>
            Subject to stock availability or installation leads might take
            longer.
          </li>
          <li>
            Minimum order 10 FR or 20 SQ.FT per order or a surcharge will be
            applied.
          </li>
          <li>
            Additional workmanship, travel cost, accommodation will be applied
            for outstation works.
          </li>
          <li>The price is applicable in Malaysia only.</li>
        </Typography>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Solid Surface" href="/contact/solid-surface" />
      </SectionWrapper>

      <Container maxWidth="md" sx={{ mb: 15 }}>
        <Heading2s isCenter>Completed Projects</Heading2s>
        <Grid container spacing={3}>
          {solidSurfaceSite.map(({ imgSrc, imgAlt }, i) => (
            <ProjectDisplay key={i} imgSrc={imgSrc} imgAlt={imgAlt} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SolidSurface;
