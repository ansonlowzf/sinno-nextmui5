import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import {
  ColourWarning,
  DisplayStone,
  MetaSEO,
  PriceTerm,
  SectionContact,
} from "../../components";
import { moca } from "../../const/pricing";
import { Heading3, SectionWrapper } from "../../elements";

const { big } = moca;

const MocaPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Moca"
        pageDesc="We are the distributor of Moca in Malaysia. We fabricate, supply &amp; install Moca Compact Stone Kitchen Top"
        pagePath="sintered-stone/moca"
        metaImg="/moca/logo.png"
      />
      <SectionWrapper>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={10} md={2}>
            <Image
              src="/moca/logo.png"
              alt="moca compact stone logo"
              layout="responsive"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading3>Colour &amp; Pricing</Heading3>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/moca/pss/qp07.png"
              stoneName="QP 07 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp12.png"
              stoneName="QP 12 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2013.png"
              stoneName="QP 2013 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2031.png"
              stoneName="QP 2031 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2032.png"
              stoneName="QP 2032 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2033b.png"
              stoneName="QP 07 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2034.png"
              stoneName="QP 2034 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2035.png"
              stoneName="QP 2035 (12mm) Smooth Matt"
              price={big}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2036a.png"
              stoneName="QP 2036A (12mm) Smooth Matt"
              price={big}
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
        <SectionContact stone="Moca Compact Stone" />
      </SectionWrapper>
    </>
  );
};

export default MocaPage;
