import { Box, Container, Grid } from "@material-ui/core";
import { Hero, StoneCard } from "../../components";
import { Heading2 } from "../../element";

const SinteredStonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/sintered-stone/hero.png"
        imgAlt="Dekton Entzo Kitchen Top"
        title="Sintered Stone"
        subtitle="AKA Porcelain Slab, Porcelain Surface, Compact Surface or Ultra-Compact Surface"
      />

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading2>Sintered Stone</Heading2>
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
