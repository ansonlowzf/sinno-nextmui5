import { Box, Button, Grid, Typography } from "@mui/material";
import { Heading3 } from "../elements/Heading";
import MuiNextLink from "./MuiNextLink";

export const SectionContact = ({ stone, href }) => (
  <Box>
    <Heading3>Custom Made Your {stone} Countertop</Heading3>
    <Typography component="p" variant="h6" align="center" sx={{ mb: 5 }}>
      Get An Estimate Quote Today
    </Typography>
    <Grid container item justifyContent="center">
      <Button variant="outlined" size="large">
        <MuiNextLink
          href={`${href}`}
          underline="none"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          Contact Us
        </MuiNextLink>
      </Button>
    </Grid>
  </Box>
);
