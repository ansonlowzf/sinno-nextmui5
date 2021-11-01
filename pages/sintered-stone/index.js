import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ColourWarning, PriceTerm, SectionContact } from "../../components";
import DisplayStone from "@components/DisplayStone";
import MetaSEO from "@components/MetaSEO";
import { moca } from "../../const/pricing";
import { SectionWrapper } from "@elements/Wrapper";
import { Heading3 } from "@elements/Heading";

const { big } = moca;

const MocaPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Moca-Compact"
        pageDesc="We are the distributor of Moca Compact Stone in Malaysia. We fabricate, supply &amp; install Moca Compact Stone Kitchen Top"
        pagePath="sintered-stone"
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

      <SectionWrapper>
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            What is Sintered Stone?
          </Typography>
          <Typography paragraph>
            {`Also known as porcelain slab, it's an engineered stone combined with multiple natural ingredients and compressed with a method called the sintering process, which mimics how nature uses high pressure to create the granite underground.`}
          </Typography>
          <Typography paragraph>
            The easy way to imagine is how we compact smoothie ice into an ice
            ball.
          </Typography>
          <Typography>
            The manufacturer compresses the sintered stone with high compact
            machines (15000 - 24000 tons depending on composition and
            manufacturer formula), then bake with 1200℃ heat to form a solid
            hard stone slab material.
          </Typography>
        </Container>
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
