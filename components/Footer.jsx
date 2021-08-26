import { Box, Typography, Stack } from "@material-ui/core";
import { Facebook, Instagram, Twitter, Email } from "@material-ui/icons";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 10, bgcolor: "secondary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 8 }}>
        <Box
          component="a"
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.facebook.com/SinnoENT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </Box>
        <Box
          component="a"
          sx={{ textDecoration: "none", color: "common.white" }}
          href="mailto:contact@stoneinnovations.com.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email fontSize="large" />
        </Box>
      </Stack>
      <Typography align="center" color="common.white">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </Box>
  );
};

export default Footer;
