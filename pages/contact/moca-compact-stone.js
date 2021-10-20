import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Smartphone, WhatsApp, EmailOutlined } from "@mui/icons-material";
import { SectionWrapper, TextWrapper } from "@elements/Wrapper";
import { Heading2, Heading3 } from "@elements/Heading";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";

const ContactMoca = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Contact us"
        pageDesc="Don't hesitate to contact us by Call, SMS, WhatsApp or Email for any stone countertop inquires."
        pagePath="contact"
        metaImg="/contact/hero.png"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/contact/hero.png"
          imgAlt="contact us"
          title="Contact Us"
          subtitle="Inquiries | Quotation | More Info"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Stone Innovations Enterprise</Heading2>
        <Container maxWidth="sm">
          <Typography align="center" fontWeight="bold" gutterBottom>
            Business Registration No.:-
          </Typography>
          <Typography align="center" paragraph>
            201603220786 (002560776-H)
          </Typography>
          <Typography align="center" color="error" fontWeight="bold">
            Please make an appointment before visiting the sales office or
            warehouse. Apology for any inconvenience caused, we have to control
            the numbers of visitors due to the pandemic of COVID-19.
          </Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container>
            <Grid container item xs={12} md={4} direction="column">
              <Grid container item justifyContent="center">
                <IconButton
                  component="a"
                  href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                  color="primary"
                >
                  <WhatsApp style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                style={{ textDecoration: `none` }}
              >
                <Box py={2}>
                  <Typography color="text.primary" align="center">
                    Anson Low @ 019-310 9773 <br />
                    WhatsApp
                  </Typography>
                </Box>
              </a>
            </Grid>

            <Grid container item xs={12} md={4} direction="column">
              <Grid container item justifyContent="center">
                <IconButton
                  component="a"
                  href="tel:+0193109773"
                  color="primary"
                >
                  <Smartphone style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                style={{ textDecoration: `none` }}
              >
                <Box py={2}>
                  <Typography color="text.primary" align="center">
                    Anson Low @ 019-310 9773 <br />
                    Call
                  </Typography>
                </Box>
              </a>
            </Grid>

            <Grid container item xs={12} md={4} direction="column">
              <Grid container item justifyContent="center">
                <IconButton
                  component="a"
                  href="mailto:contact@stoneinnovations.com.my"
                  color="primary"
                >
                  <EmailOutlined style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="mailto:contact@stoneinnovations.com.my"
                style={{ textDecoration: `none` }}
              >
                <Box py={2} color="text.primary">
                  <Typography align="center">
                    contact@stoneinnovations.com.my
                  </Typography>
                </Box>
              </a>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <Container maxWidth="lg">
        <SectionWrapper>
          <Heading3>Sales Office Direction</Heading3>
          <Box sx={{ height: 500 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6283264329245!2d101.62150531532713!3d3.1919960537764975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc460279d77759%3A0x58de15af40adf9e0!2s45%2C%20Jalan%20Medan%20Putra%206%2C%20Medan%20Putra%20Bussiness%20Centre%2C%2052200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1626227671106!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
          <TextWrapper>
            <Typography align="center" sx={{ mt: 5 }}>
              Address: 45-1-1, Jalan Medan Putra 6, Medan Putra Business Center,
              Bandar Menjalara 52200 KL
            </Typography>
          </TextWrapper>
        </SectionWrapper>
      </Container>

      <Container maxWidth="lg">
        <SectionWrapper>
          <Heading3>Warehouse Direction</Heading3>
          <Box sx={{ height: 500 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8185129099334!2d101.5763506581607!3d3.1897516774743173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTEnMjMuMSJOIDEwMcKwMzQnMzguOCJF!5e0!3m2!1sen!2smy!4v1626228715492!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
          <TextWrapper>
            <Typography align="center" sx={{ mt: 5 }}>
              Address: Lot 2201, Jalan Industri 10, Kampung Baru Sungai Buloh,
              40160 Shah Alam, Selangor
            </Typography>
          </TextWrapper>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default ContactMoca;
