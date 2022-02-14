import MetaSEO from "@components/MetaSEO";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BackNextPanel from "@components/BackNextPanel";
import { SectionWrapper } from "@elements/Wrapper";
import { SectionContact } from "@components/SectionContact";
import ImageSwiper from "@components/ImageSwiper";

const imageLinks = [
  {
    imgSrc: "/granite/blue-pearl/1.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/2.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/3.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/4.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/blue-pearl/5.jpg",
    imgAlt: "Granite Blue Pearl Kitchen Top",
  },
];

const BluePearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Blue Pearl | Granite"
        pageDesc="Supply &amp; install granite Blue Pearl kitchen top."
        pagePath="/granite/blue-pearl"
        metaImg="/granite/colour/blue-pearl.png"
      />

      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        align="center"
        sx={{ my: 5 }}
      >
        Blue Pearl
      </Typography>

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <ImageSwiper imageLinks={imageLinks} />
      </Container>

      <BackNextPanel
        backTo="/granite/black-galaxy"
        backToStone="Black Galaxy"
        stoneMenuLink="/granite"
        stoneMenu="granite"
        nextTo="/granite/emerald-pearl"
        nextToStone="Emerald Pearl"
      />

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Typography component="h2" variant="h6" color="primary" align="center">
          Custom made, supply and install granite blue pearl for kitchen top
          application.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Grid container item justifyContent="center">
          <Image
            src="/granite/colour/blue-pearl.png"
            alt="granite blue pearl"
            width={620}
            height={350}
          />
          <Grid container item justifyContent="center" sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                Blue Pearl
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 250/FR or RM 135/SF
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
