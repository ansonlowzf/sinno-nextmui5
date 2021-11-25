import { Button, Container, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MuiNextLink } from "@components/MuiNextLink";
import MetaSEO from "@components/MetaSEO";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";

const images = [
  { url: "/granite/emerald-pearl/1.jpg" },
  { url: "/granite/emerald-pearl/2.jpg" },
  { url: "/granite/emerald-pearl/3.jpg" },
];

const EmeraldPearl = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Emerald Pearl | Granite"
        pageDesc="Supply &amp; install granite Emerald Pearl kitchen top."
        pagePath="granite/emerald-pearl"
        metaImg="/granite/emerald-pearl/1.jpg"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Grid container>
          <Grid
            container
            item
            xs={3}
            justifyContent="center"
            alignContent="center"
          >
            <MuiNextLink href="/granite">
              <Button>
                <ArrowBack fontSize="large" />
              </Button>
            </MuiNextLink>
          </Grid>
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignContent="center"
          >
            <MuiNextLink href="/granite">
              <Button>Back To Granite</Button>
            </MuiNextLink>
          </Grid>
          <Grid
            container
            item
            xs={3}
            justifyContent="center"
            alignContent="center"
          >
            <MuiNextLink href="/granite">
              <Button>
                <ArrowForward fontSize="large" />
              </Button>
            </MuiNextLink>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Grid container item justifyContent="center">
          <Image
            src="/granite/colour/emerald-pearl.png"
            alt="granite emerald pearl"
            width={620}
            height={350}
          />
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <SimpleImageSlider
          width={900}
          height={540}
          images={images}
          showBullets={true}
          showNavs={true}
          loop={true}
        />
      </Container>
    </>
  );
};

export default EmeraldPearl;
