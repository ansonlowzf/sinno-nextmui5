import { Button, Container, Grid, Typography } from "@mui/material";
import { MuiNextLink } from "./MuiNextLink";
import { Heading3 } from "../elements";

const ContactMarble = ({ stone, href }) => (
  <Container maxWidth="sm">
    <Heading3>Inquiry</Heading3>
    <Typography component="p" variant="h6" align="center" sx={{ mb: 5 }}>
      Marble {stone}
    </Typography>
    <Grid container item justifyContent="center" alignItems="center">
      <Button
        component={MuiNextLink}
        variant="outlined"
        size="large"
        href={`${href}`}
        underline="none"
      >
        Contact Us
      </Button>
    </Grid>
  </Container>
);

export default ContactMarble;
