import MetaSEO from "@components/MetaSEO";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";

const images = [
  { url: "/granite/blue-pearl/1.jpg" },
  { url: "/granite/blue-pearl/2.jpg" },
  { url: "/granite/blue-pearl/3.jpg" },
  { url: "/granite/blue-pearl/4.jpg" },
  { url: "/granite/blue-pearl/5.jpg" },
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
        {/* Add Swiper */}
      </Container>
      <BackNextPanel BackTo="/granite" NextTo="/granite/emerald-pearl" />

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default BluePearl;
