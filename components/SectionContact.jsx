import { Button, Container, Grid, Typography } from "@mui/material";
import { MuiNextLink } from "../components";
import { Heading3 } from "../element";

export const SectionContact = ({ stone }) => (
  <Container maxWidth="sm">
    <Heading3>Custom Made Your {stone} Countertop Today</Heading3>
    <Typography component="p" variant="h6" align="center" sx={{ mb: 5 }}>
      Get an estimate quotation for free
    </Typography>
    <Grid container item justifyContent="center">
      <MuiNextLink
        href="/contact"
        underline="none"
        sx={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Button variant="outlined" size="large">
          Contact Us
        </Button>
      </MuiNextLink>
    </Grid>
  </Container>
);
