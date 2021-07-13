import { Box, Container, Grid } from "@material-ui/core";
import { Hero, StoneCard, MetaSEO } from "../../components";
import { Heading3 } from "../../element";

// Keep here in case I want to use it again

const SinteredStonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Silestone Quartz Surface"
        pageDesc="We are one of the Silestone distributor in Malaysia. We fabricate, supply &amp; install Silestone Kitchen Top"
        pagePath="quartz-stone/silestone"
        metaImg="//silestone/hero.png"
      />
      <Hero
        imgSrc="/sintered-stone/hero.png"
        imgAlt="Dekton Entzo Kitchen Top"
        title="Sintered Stone"
        subtitle="AKA Porcelain Slab, Porcelain Surface, Compact Surface or Ultra-Compact Surface"
      />

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading3>Sintered Stone</Heading3>
        <Container maxWidth="md">
          <Grid container justifyContent="center" alignItems="center">
            <Grid container item justifyContent="center" xs={12} md={6}>
              <StoneCard
                imgSrc="/sintered-stone/stonecard1.png"
                stone="Dekton Ultra-Compact Stone"
                desc="Product of Spain. All colours available in Malaysia. Subject to stock availability."
                linkUrl="/sintered-stone/dekton"
              />
            </Grid>
            <Grid container item justifyContent="center" xs={12} md={6}>
              <StoneCard
                imgSrc="/sintered-stone/stonecard2.png"
                stone="Moca Compact Surface"
                desc="Local Brand OEM China Sintered Stone. All colours available in Malaysia. Subject to stock availability."
                linkUrl="/sintered-stone/moca"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SinteredStonePage;
