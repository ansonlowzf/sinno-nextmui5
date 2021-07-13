import { Box, Container, Grid } from "@material-ui/core";
import { Heading3, SectionWrapper } from "../../element";
import {
  DisplayStone,
  Hero,
  SubNavbar,
  ColourWarning,
  PriceTerm,
  SectionContact,
  MetaSEO,
} from "../../components";
import { graniteRoutes } from "../../const/nav-links";

const SensaPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Sensa Granite"
        pageDesc="Fabricate, supply &amp; install high-end granite imported from Spain as kitchen top."
        pagePath="granite/sensa"
        metaImg="/sensa/hero.png"
      />
      <Hero
        imgSrc="/sensa/hero.png"
        imgText="Sensa Granite Orinoco"
        title="Sensa Granite"
        subtitle="Sensa Granite Kitchen Top"
      />

      <SubNavbar routes={graniteRoutes} />

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading3>Colour &amp; Pricing</Heading3>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/sensa/colour/black-beauty.png"
              stoneName="Black Beauty (Brushed + Polished) 20mm"
              price="RM 580 /FR or RM 300 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/colonial-white.png"
              stoneName="Colonial White (Polished) 20mm"
              price="RM 565 /FR or RM 290 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/glacial-blue.png"
              stoneName="Gracial Blue (Polished) 20mm"
              price="RM 685 /FR or RM 352.50 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/icy-blue.png"
              stoneName="Ice Blue (Polished) 20mm"
              price="RM 680 /FR or RM 350 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/indian-black.png"
              stoneName="Indian Black (Polished) 20mm"
              price="RM 420 /FR or RM 220 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/moak-black.png"
              stoneName="Moak Black (Matt) 20mm"
              price="RM 640 /FR or RM 330 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/orinoco.png"
              stoneName="Orinoco (Polished) 20mm"
              price="RM 860 /FR or RM 440 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/taj-mahal.png"
              stoneName="Taj Mahal (Polished) 20mm"
              price="RM 1200 /FR or RM 610 /SF"
            />
            <DisplayStone
              imgSrc="/sensa/colour/white-macaubas.png"
              stoneName="White Macaubas (Polished) 20mm"
              price="RM 970 /FR or RM 495 /SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Sensa" />
      </SectionWrapper>
    </>
  );
};

export default SensaPage;
