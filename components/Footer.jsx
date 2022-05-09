import { Email, Facebook, Policy } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 10, bgcolor: "grey.900" }}>
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
        <Box
          component="a"
          sx={{ textDecoration: "none", color: "common.white" }}
          href="/privacy-policy"
        >
          <Policy fontSize="large" />
        </Box>
      </Stack>
      {/* TODO: add footer navigation */}
      <Typography align="center" color="common.white">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </Box>
  );
};

export default Footer;
