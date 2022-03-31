import { EmailOutlined, Smartphone, WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

const ContactInfo = () => {
  return (
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
            <IconButton component="a" href="tel:+0193109773" color="primary">
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
  );
};

export default ContactInfo;
