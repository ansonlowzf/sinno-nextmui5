import { Email, Facebook, Policy } from "@mui/icons-material";
import { Box, Stack, Typography, Grid } from "@mui/material";
import MuiNextLink from "./MuiNextLink";
import Image from "next/image";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 10, bgcolor: "grey.900" }}>
      <Typography color="primary" align="center">
        Credit Card Payment Accepted
      </Typography>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Image
          src="/visa-mastercard.png"
          alt="visa and mastercard logo"
          width={128}
          height={64}
        />
      </Grid>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          href="https://www.facebook.com/SinnoENT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>

        <MuiNextLink
          href="mailto:contact@stoneinnovations.com.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email fontSize="large" />
        </MuiNextLink>
        <MuiNextLink href="/privacy-policy">
          <Policy fontSize="large" />
        </MuiNextLink>
      </Stack>
      {/* TODO: add footer navigation */}
      <Typography align="center" color="primary">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </Box>
  );
};

export default Footer;
