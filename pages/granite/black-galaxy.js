import MetaSEO from "@components/MetaSEO";
import { Container, Grid, Typography } from "@mui/material";
import NextImage from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";
import ImageSwiper from "@components/ImageSwiper";

const imageLinks = [
  { imgSrc: "/granite/black-galaxy/1.jpg", imgAlt: "Black Galaxy Kitchen Top" },
  { imgSrc: "/granite/black-galaxy/2.jpg", imgAlt: "Black Galaxy Kitchen Top" },
  { imgSrc: "/granite/black-galaxy/3.jpg", imgAlt: "Black Galaxy Kitchen Top" },
  { imgSrc: "/granite/black-galaxy/4.jpg", imgAlt: "Black Galaxy Kitchen Top" },
];

const BluePearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Black Galaxy | Granite"
        pageDesc="Supply &amp; install granite Black Galaxy kitchen top."
        pagePath="granite/blue-pearl"
        metaImg="/granite/colour/black-galaxy.png"
      />
      <BackNextPanel BackTo="/granite" NextTo="/granite/blue-pearl" />
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Grid container item justifyContent="center">
          <NextImage
            src="/granite/colour/black-galaxy.png"
            alt="granite black galaxy"
            width={620}
            height={350}
          />
          <Grid container item justifyContent="center" sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                Black Galaxy
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 220/FR or RM 120/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <ImageSwiper imageLinks={imageLinks} />
      </Container>
      <BackNextPanel BackTo="/granite" NextTo="/granite/blue-pearl" />

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default BluePearl;