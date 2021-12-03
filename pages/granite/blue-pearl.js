import MetaSEO from "@components/MetaSEO";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";
import ImageSwiper from "@components/ImageSwiper";

const imageLinks = [
  {
    imgSrc: "/granite/blue-pearl/1.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/2.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/3.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/4.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/5.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
];

const BluePearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Blue Pearl | Granite"
        pageDesc="Supply &amp; install granite Blue Pearl kitchen top."
        pagePath="granite/blue-pearl"
        metaImg="/granite/colour/blue-pearl.png"
      />
      <BackNextPanel BackTo="/granite" NextTo="/granite/emerald-pearl" />
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Grid container item justifyContent="center">
          <Image
            src="/granite/colour/blue-pearl.png"
            alt="granite blue pearl"
            width={620}
            height={350}
          />
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <ImageSwiper imageLinks={imageLinks} />
      </Container>
      <BackNextPanel BackTo="/granite" NextTo="/granite/emerald-pearl" />

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default BluePearl;
