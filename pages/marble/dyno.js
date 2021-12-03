import MetaSEO from "@components/MetaSEO";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { SectionContact } from "@components/SectionContact";
import { SectionWrapper } from "@elements/Wrapper";
import MarbleDisclaimer from "@components/marble-disclaimer";

const MarbleDyno = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Dyno Beige | Marble"
        pageDesc="Supply only / Supply &amp; Install Dyno Beige Marble for flooring application"
        pagePath="marble"
        metaImg="/marble/hero.jpg"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Image
          src="/marble/dyno/1.jpg"
          alt="Marble Dyno Beige"
          width={800}
          height={600}
        />
        <Typography component="h2" variant="h4" align="center" gutterBottom>
          Dyno Beige
        </Typography>
        <Typography align="center">
          Suitable for flooring and wall cladding applications
        </Typography>
      </Container>
      <SectionWrapper>
        <MarbleDisclaimer />
      </SectionWrapper>
      <SectionWrapper>
        <SectionContact stone="Marble" href="/contact/marble" />
      </SectionWrapper>
    </>
  );
};

export default MarbleDyno;
