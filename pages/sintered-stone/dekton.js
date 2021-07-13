import { Box, Container, Grid } from "@material-ui/core";
import {
  Hero,
  SubNavbar,
  DisplayStone,
  ColourWarning,
  PriceTerm,
  SectionContact,
  MetaSEO,
} from "../../components";
import { dekton12 } from "../../const/pricing";
import { ssRoutes } from "../../const/nav-links";
import { Heading3, SectionWrapper } from "../../element";

const { group0, group1, group2, group3, group4 } = dekton12;

const DektonPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Dekton"
        pageDesc="We are a sole distributor of Dekton in Malaysia. We fabricate, supply &amp; install Dekton Ultra-Compact Surface Kitchen Top"
        pagePath="sintered-stone/dekton"
        metaImg="/dekton/hero.png"
      />
      <Hero
        imgSrc="/dekton/hero.png"
        imgText="Dekton Natura 18 Kitchen Top"
        title="Dekton"
        subtitle="Ultra-Compact Surface Kitchen Top"
      />

      <SubNavbar routes={ssRoutes} />

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading3>Colour &amp; Pricing</Heading3>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="">
            <DisplayStone
              imgSrc="/dekton/ucs/aeris.png"
              stoneName="Aeris (Smooth Matt) 12mm"
              price={group0}
            />
            <DisplayStone
              imgSrc="/dekton/ucs/aura15.png"
              stoneName="Aura 15 (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/baltic.png"
              stoneName="Baltic (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/blanc-concrete.png"
              stoneName="Blanc Concrete (Texture) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/bromo.png"
              stoneName="Bromo (Smooth Matt) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/danae.png"
              stoneName="Danae (Smooth Matt) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/domoos.png"
              stoneName="Domoos (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/edora.png"
              stoneName="Edora (Texture) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/entzo.png"
              stoneName="Entzo (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/eter.png"
              stoneName="Eter (Smooth Matt) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/feroe.png"
              stoneName="Feroe (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/fossil.png"
              stoneName="Fossil (Smooth Matt) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/kairos.png"
              stoneName="Kairos (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/kelya.png"
              stoneName="Kelya (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/keon.png"
              stoneName="Keon (Smooth Matt) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/keranium.png"
              stoneName="Kenanium (Smooth Matt) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/kira.png"
              stoneName="Kira (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/kovik.png"
              stoneName="Kovik (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/kreta.png"
              stoneName="Kreta (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/laos.png"
              stoneName="Laos (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/laurent.png"
              stoneName="Laurent (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/liquid-embers.png"
              stoneName="Liquid Embers (Texture) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/liquid-shell.png"
              stoneName="Liquid Shell (Texture) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/liquid-sky.png"
              stoneName="Liquid Sky (Texture) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/lunar.png"
              stoneName="Lunar (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/milar.png"
              stoneName="Milar (Smooth Matt) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/nayla.png"
              stoneName="Nayla (Smooth Matt) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/nilium.png"
              stoneName="Nilium (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/opera.png"
              stoneName="Opera (Velvet) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/orix.png"
              stoneName="Orix (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/radium.png"
              stoneName="Radium (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/rem.png"
              stoneName="Rem (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/sasea.png"
              stoneName="Sasea (Smooth Matt) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/sirius.png"
              stoneName="Sirius (Texture) 12mm"
              price={group1}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/sirocco.png"
              stoneName="Sirocco (Smooth Matt) 12mm"
              price={group0}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/soke.png"
              stoneName="Soke (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/trilium.png"
              stoneName="Trilium (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/uyuni.png"
              stoneName="Uyuni (Smooth Matt) 12mm"
              price={group3}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/vera.png"
              stoneName="Vera (Smooth Matt) 12mm"
              price={group2}
            />

            <DisplayStone
              imgSrc="/dekton/ucs/zenith.png"
              stoneName="Zenith (Smooth Matt) 12mm"
              price={group2}
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
        <SectionContact stone="Dekton" />
      </SectionWrapper>
    </>
  );
};

export default DektonPage;
