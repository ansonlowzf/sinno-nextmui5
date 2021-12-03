import { Container, Typography } from "@mui/material";

const MarbleDisclaimer = () => {
  return (
    <Container maxWidth="xs">
      <Typography component="h3" variant="h6" align="center" color="error">
        Disclaimer
      </Typography>
      <Typography variant="body2" align="center">
        The above image is a display sample. Every batch of marble is different
        in vein, texture and pattern. Please visit our warehouse to see the
        latest batch.
      </Typography>
    </Container>
  );
};

export default MarbleDisclaimer;
