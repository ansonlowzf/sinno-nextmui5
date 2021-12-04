import MetaSEO from "@components/MetaSEO";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { SectionWrapper } from "@elements/Wrapper";
import MarbleDisclaimer from "@components/marble-disclaimer";
import ContactMarble from "@components/ContactMarble";
import BackNextPanel from "@components/BackNextPanel";

const MarbleDyno = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Dyno Beige | Marble"
        pageDesc="Supply only / Supply &amp; Install Dyno Beige Marble for flooring &amp; wall cladding application"
        pagePath="/marble/dyno"
        metaImg="/marble/dyno/1.jpg"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Image
          src="/marble/dyno/1.jpg"
          alt="Marble Dyno Beige"
          width={800}
          height={600}
        />
        <Typography
          component="h2"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mt: 2 }}
        >
          Dyno Beige
        </Typography>
        <Typography align="center">
          Suitable for flooring and wall cladding applications
        </Typography>
      </Container>

      <SectionWrapper>
        <BackNextPanel
          BackTo="/marble"
          BackToStone="Marble"
          stoneMenu="Marble"
          stoneMenuLink="/marble"
          NextTo="/marble/new-ultraman"
          NextToStone="New Ultraman"
        />
      </SectionWrapper>

      <SectionWrapper>
        <MarbleDisclaimer />
      </SectionWrapper>

      <SectionWrapper>
        <ContactMarble stone="Dyno Beige" href="/contact/marble" />
      </SectionWrapper>
    </>
  );
};

export default MarbleDyno;
