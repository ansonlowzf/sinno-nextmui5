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
      <MuiNextLink href={`${href}`} underline="none">
        <Button variant="outlined" size="large">
          Contact Us
        </Button>
      </MuiNextLink>
    </Grid>
  </Container>
);

export default ContactMarble;
