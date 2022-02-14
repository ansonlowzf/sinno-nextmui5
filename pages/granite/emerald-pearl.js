import BackNextPanel from "@components/BackNextPanel";
import ImageSwiper from "@components/ImageSwiper";
import MetaSEO from "@components/MetaSEO";
import { SectionContact } from "@components/SectionContact";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const imageLinks = [
  {
    imgSrc: "/granite/emerald-pearl/1.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/emerald-pearl/2.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
  {
    imgSrc: "/granite/emerald-pearl/3.jpg",
    imgAlt: "Granite Emerald Pearl Kitchen Top",
  },
];

const EmeraldPearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Emerald Pearl | Granite"
        pageDesc="Supply &amp; install granite Emerald Pearl kitchen top."
        pagePath="/granite/emerald-pearl"
        metaImg="/granite/colour/emerald-pearl.png"
      />

      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        align="center"
        sx={{ my: 5 }}
      >
        Emerald Pearl
      </Typography>

      <Container maxWidth="md" sx={{ my: 5 }}>
        <ImageSwiper imageLinks={imageLinks} />
      </Container>

      <BackNextPanel
        backTo="/granite/blue-pearl"
        backToStone="Blue Pearl"
        stoneMenuLink="/granite"
        stoneMenu="Granite"
        nextTo="/granite/black-galaxy"
        nextToStone="Black Galaxy"
      />

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Typography component="h2" variant="h6" color="primary" align="center">
          Custom made, supply and install granite emerald pearl for kitchen top
          application.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Grid container item justifyContent="center">
          <Image
            src="/granite/colour/emerald-pearl.png"
            alt="granite emerald pearl"
            width={620}
            height={350}
          />
          <Grid container item justifyContent="center" sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                Emerald Pearl
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

export default EmeraldPearl;
