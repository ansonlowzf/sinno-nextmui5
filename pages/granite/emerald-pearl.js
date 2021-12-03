import MetaSEO from "@components/MetaSEO";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";

const images = [
  { url: "/granite/emerald-pearl/1.jpg" },
  { url: "/granite/emerald-pearl/2.jpg" },
  { url: "/granite/emerald-pearl/3.jpg" },
];

const EmeraldPearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Emerald Pearl | Granite"
        pageDesc="Supply &amp; install granite Emerald Pearl kitchen top."
        pagePath="granite/emerald-pearl"
        metaImg="/granite/colour/emerald-pearl.png"
      />
      <BackNextPanel BackTo="/granite/blue-pearl" NextTo="/granite" />
      <Container maxWidth="md" sx={{ mb: 10 }}>
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
        {/* Add Swiper */}
      </Container>
      <BackNextPanel BackTo="/granite/blue-pearl" NextTo="/granite" />

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default EmeraldPearl;
