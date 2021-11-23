import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ColourWarning, PriceTerm, SectionContact } from "../../components";
import DisplayStone from "@components/DisplayStone";
import MetaSEO from "@components/MetaSEO";
import { moca } from "../../const/pricing";
import { SectionWrapper } from "@elements/Wrapper";
import { Heading3 } from "@elements/Heading";
import CollectionTitle from "@components/CollectionTitle";

const { mm6, mm9, mm11s, mm12 } = moca;

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
          <CollectionTitle>6mm Thickness</CollectionTitle>
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/moca/pss/fish-maw.png"
              stoneName="Fish Maw (6mm) Gloss"
              price={mm6}
            />
            <DisplayStone
              imgSrc="/moca/pss/bianco-carrara.png"
              stoneName="Bianco Carrara (6mm) Gloss"
              price={mm6}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2013.png"
              stoneName="Matt Laurent (6mm) Smooth Matt"
              price={mm6}
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <CollectionTitle>9mm Thickness</CollectionTitle>
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/moca/pss/qp004.png"
              stoneName="Verona Grey (9mm) Gloss"
              price={mm9}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2011a.png"
              stoneName="Jazz White A (9mm) Gloss"
              price={mm9}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2011b.png"
              stoneName="Jazz White B (9mm) Gloss"
              price={mm9}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2011c.png"
              stoneName="Jazz White C (9mm) Gloss"
              price={mm9}
            />
          </Grid>
          <DisplayStone
            imgSrc="/moca/pss/qp2012.png"
            stoneName="Calacatta Nano (9mm) Smooth Matt"
            price={mm9}
          />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <CollectionTitle>11mm Thickness</CollectionTitle>
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/moca/pss/qp02.png"
              stoneName="Vienna White (11mm) Smooth Matt"
              price={mm11s}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp03.png"
              stoneName="Calacatta Lincoln (11mm) Smooth Matt"
              price={mm11s}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp104.png"
              stoneName="Volakas Gloss (11mm) Gloss"
              price={mm11s}
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <CollectionTitle>12mm Thickness</CollectionTitle>
          <Grid container spacing={2} justifyContent="center">
            <DisplayStone
              imgSrc="/moca/pss/qp111.png"
              stoneName="Iceberg (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp07.png"
              stoneName="Bianco Statuario (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp12.png"
              stoneName="Laurent Gold (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp12m.png"
              stoneName="Light Pietra (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp1210.png"
              stoneName="Bianco Royal (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp25c.png"
              stoneName="Oriental White ABC (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp28.png"
              stoneName="Bianco Angel (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2013.png"
              stoneName="Matt Laurent (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2031.png"
              stoneName="Calacatta Lucca (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2032.png"
              stoneName="Max Concrete(12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2033b.png"
              stoneName="Carrara Iris ABC (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2034.png"
              stoneName="Pietra Grey (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2035.png"
              stoneName="Ariston White (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp2036a.png"
              stoneName="Bianco Carrara ABC (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/volcanic-rock.png"
              stoneName="Volcanic Rock (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/qp826.png"
              stoneName="Bianco White (12mm) Gloss"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/australian-deep-limestone.png"
              stoneName="Australian Deep Limestone (12mm) Smooth Matt"
              price={mm12}
            />
            <DisplayStone
              imgSrc="/moca/pss/smoke-cloud-grey.png"
              stoneName="Smoke Cloud Grey (12mm) Smooth Matt"
              price={mm12}
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
        <SectionContact
          stone="Moca Compact Stone"
          href="/contact/moca-compact"
        />
      </SectionWrapper>
    </>
  );
};

export default MocaPage;
