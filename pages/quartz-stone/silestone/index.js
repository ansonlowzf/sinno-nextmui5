import { Grid, Container } from "@material-ui/core";
import Image from "next/image";
import {
  Hero,
  SubNavbar,
  DisplayStone,
  ColourWarning,
  PriceTerm,
  SectionContact,
  MetaSEO,
} from "../../../components";
import { qsRoutes } from "../../../const/nav-links";
import {
  silestonePricing20,
  silestoneJumboPricing20,
} from "../../../const/pricing";
import { SectionWrapper, Heading2 } from "../../../element";

const { group1, group2, group3, group4 } = silestonePricing20;
const { group5, group6 } = silestoneJumboPricing20;

const SilestonePage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Silestone Quartz Surface"
        pageDesc="We are one of the Silestone distributor in Malaysia. We fabricate, supply &amp; install Silestone Kitchen Top"
        pagePath="quartz-stone/silestone"
        metaImg="/silestone/hero.png"
      />
      <Hero
        imgSrc="/silestone/hero.png"
        imgText="Silestone Arcilla Red"
        title="Silestone"
        subtitle="Silestone Quartz Surface Kitchen Top"
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
              src="/silestone/logo.svg"
              alt="Silestone logo"
              layout="responsive"
              width={469}
              height={75}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Colour &amp; Pricing</Heading2>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={1} justifyContent="center">
            <DisplayStone
              imgSrc="/silestone/ss/arcilla-red.png"
              stoneName="Arcilla Red (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/arden-blue.png"
              stoneName="Arden Blue (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/ariel.png"
              stoneName="Ariel (Polished / Suede) 20mm"
              price={group5}
            />

            <DisplayStone
              imgSrc="/silestone/ss/blanco-city.png"
              stoneName="Blanco City (Polished / Suede) 20mm"
              price={group1}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-maple14.png"
              stoneName="Blanco Maple 14 (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-norte14.png"
              stoneName="Blanco Norte 14 (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-orion.png"
              stoneName="Blanco Orion (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-rivers.png"
              stoneName="Blanco Rivers (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-stellar13.png"
              stoneName="Blanco Stellar 13 (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/blanco-zeus.png"
              stoneName="Blanco Zeus (Polished / Suede) 20mm"
              price={group4}
            />

            <DisplayStone
              imgSrc="/silestone/ss/cala-blue.png"
              stoneName="Cala Blue (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/calypso.png"
              stoneName="Calypso (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/camden.png"
              stoneName="Camden (Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/cemento-spa.png"
              stoneName="Cemento Spa (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/charcoal-soapstone.png"
              stoneName="Charcoal Soapstone (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/cincel-grey.png"
              stoneName="Cincel Grey (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/coral-clay.png"
              stoneName="Coral Clay (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/corktown.png"
              stoneName="Corktown (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/desert-silver.png"
              stoneName="Desert Silver (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-bella.png"
              stoneName="Eternal Bella (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-calacatta-gold.png"
              stoneName="Eternal Calacatta Gold (Polished / Suede) 20mm"
              price={group6}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-d'or.png"
              stoneName="Eternal D'or (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-marquina.png"
              stoneName="Eternal Marquina (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-noir.png"
              stoneName="Eternal Noir (Polished / Suede) 20mm"
              price={group6}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-serena.png"
              stoneName="Eternal Serena (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/eternal-statuario.png"
              stoneName="Eternal Statuario (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/faro-white.png"
              stoneName="Faro White (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/gris-expo.png"
              stoneName="Gris Expo (Polished / Suede) 20mm"
              price={group1}
            />
            <DisplayStone
              imgSrc="/silestone/ss/iconic-black.png"
              stoneName="Iconic Black (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/iconic-white.png"
              stoneName="Iconic White (Polished / Suede) 20mm"
              price={group5}
            />
            <DisplayStone
              imgSrc="/silestone/ss/iron-bark.png"
              stoneName="Iron Bark (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/kensho.png"
              stoneName="Kensho (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/lagoon.png"
              stoneName="Lagoon (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/lyra.png"
              stoneName="Lyra (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/marengo.png"
              stoneName="Marengo (Polished / Suede) 20mm"
              price={group1}
            />
            <DisplayStone
              imgSrc="/silestone/ss/miami-vena.png"
              stoneName="Miami Vena (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/negro-stellar.png"
              stoneName="Negro Stellar (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/negro-tebas18.png"
              stoneName="Negro Tebas 18 (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/nolita.png"
              stoneName="Nolita (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/pearl-jasmine.png"
              stoneName="Pearl Jasmine (Polished / Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/poblenou.png"
              stoneName="Poblenou (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/polaris.png"
              stoneName="Polaris (Polished) 20mm"
              price={group6}
            />
            <DisplayStone
              imgSrc="/silestone/ss/posidonia-green.png"
              stoneName="Posidonia Green (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/royal-reef.png"
              stoneName="Royal Reef (Polished / Suede) 20mm"
              price={group2}
            />
            <DisplayStone
              imgSrc="/silestone/ss/seaport.png"
              stoneName="Seapot (Suede) 20mm"
              price={group4}
            />
            <DisplayStone
              imgSrc="/silestone/ss/silken-pearl.png"
              stoneName="Silken Pearl (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/snowy-ibiza.png"
              stoneName="Snowy Ibiza (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/tigris-sand.png"
              stoneName="Tigris Sand (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/white-arabesque.png"
              stoneName="White Arabesque (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/white-storm14.png"
              stoneName="White Storm 14 (Polished / Suede) 20mm"
              price={group3}
            />
            <DisplayStone
              imgSrc="/silestone/ss/yukon.png"
              stoneName="Yukon (Polished / Suede) 20mm"
              price={group3}
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
        <SectionContact stone="Silestone" />
      </SectionWrapper>
    </>
  );
};

export default SilestonePage;
