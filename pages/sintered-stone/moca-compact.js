import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ColourWarning, PriceTerm, SectionContact } from "../../components";
import MetaSEO from "@components/MetaSEO";
import { SectionWrapper } from "@elements/Wrapper";
import { Heading3 } from "@elements/Heading";
import { sinteredStone } from "const/sintered-stone";
import StsDisplay from "@components/StsDisplay";

const MocaPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Moca-Compact"
        pageDesc="We are the distributor of Moca Compact Stone in Malaysia. We fabricate, supply &amp; install Moca Compact Stone Kitchen Top"
        pagePath="/sintered-stone"
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

      <Container sx={{ my: { xs: 5, sm: 15 } }}>
        <Heading3>Colour Catalogue &amp; Pricing</Heading3>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {sinteredStone.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                price,
                imgSrc,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                price={price}
                imgSrc={imgSrc}
              />
            )
          )}
        </Grid>
      </Container>

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
