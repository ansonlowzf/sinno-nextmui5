import MetaSEO from "@components/MetaSEO";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { SectionWrapper } from "@elements/Wrapper";
import MarbleDisclaimer from "@components/marble-disclaimer";
import ContactMarble from "@components/ContactMarble";
import BackNextPanel from "@components/BackNextPanel";

const NewUltraman = () => {
  return (
    <>
      <MetaSEO
        pageTitle="New Ultraman | Marble"
        pageDesc="Supply only / Supply &amp; Install New Ultraman Beige Marble for flooring &amp; wall cladding application"
        pagePath="/marble/new-ultraman"
        metaImg="/marble/new-ultraman/1.jpg"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Image
          src="/marble/new-ultraman/1.jpg"
          alt="Marble New Ultraman"
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
          New Ultraman Beige
        </Typography>
        <Typography align="center">
          Supply only / Supply &amp; install Marble New Ultraman for flooring
          and wall cladding applications
        </Typography>
      </Container>

      <SectionWrapper>
        <BackNextPanel
          BackTo="/marble/dyno"
          BackToStone="Dyno Beige"
          stoneMenu="Marble"
          stoneMenuLink="/marble"
          NextTo="/marble"
          NextToStone="Marble"
        />
      </SectionWrapper>

      <SectionWrapper>
        <MarbleDisclaimer />
      </SectionWrapper>
      <SectionWrapper>
        <ContactMarble stone="New Ultraman Beige" href="/contact/marble" />
      </SectionWrapper>
    </>
  );
};

export default NewUltraman;
