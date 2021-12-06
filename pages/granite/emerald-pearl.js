import BackNextPanel from "@components/BackNextPanel";
import ImageSwiper from "@components/ImageSwiper";
import MetaSEO from "@components/MetaSEO";
import { SectionContact } from "@components/SectionContact";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid } from "@mui/material";
import Image from "next/image";

const imageLinks = [
  {
    imgSrc: "/granite/emerald-pearl/1.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/emerald-pearl/2.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/emerald-pearl/3.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
];

const EmeraldPearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Emerald Pearl | Granite"
        pageDesc="Supply &amp; install granite Emerald Pearl kitchen top."
        pagePath="/granite/emerald-pearl"
        metaImg="/granite/colour/emerald-pearl.png"
      />

      <Container maxWidth="md" sx={{ my: 10 }}>
        <Grid container item justifyContent="center">
          <Image
            src="/granite/colour/emerald-pearl.png"
            alt="granite emerald pearl"
            width={620}
            height={350}
          />
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ mb: 10 }}>
        <ImageSwiper imageLinks={imageLinks} />
      </Container>

      <BackNextPanel
        backTo="/granite/blue-pearl"
        backToStone="Blue Pearl"
        stoneMenuLink="/granite"
        stoneMenu="Granite"
        nextTo="/granite/black-galaxy"
        nextToStone="Black Galaxy"
      />

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default EmeraldPearl;
