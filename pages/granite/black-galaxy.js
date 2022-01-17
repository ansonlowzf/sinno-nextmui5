import MetaSEO from "@components/MetaSEO";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";
import ImageSwiper from "@components/ImageSwiper";

const imagesLinks = [
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
        pagePath="/granite/black-galaxy"
        metaImg="/granite/colour/black-galaxy.png"
      />

      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        align="center"
        sx={{ my: 5 }}
      >
        Black Galaxy
      </Typography>

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <ImageSwiper imagesLinks={imagesLinks} />
      </Container>

      <BackNextPanel
        backTo="/granite/emerald-pearl"
        backToStone="Emerald Pearl"
        stoneMenuLink="/granite"
        stoneMenu="granite"
        nextTo="/granite/blue-pearl"
        nextToStone="Blue Pearl"
      />

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Typography component="h2" variant="h6" color="primary" align="center">
          Custom made, supply and install granite black galaxy for kitchen top
          application.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Grid container item justifyContent="center">
          <Image
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

      <SectionWrapper>
        <SectionContact stone="Granite" href="/contact/granite" />
      </SectionWrapper>
    </>
  );
};

export default BluePearl;
