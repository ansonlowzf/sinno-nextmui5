import { Container, Typography } from "@mui/material";

const MarbleDisclaimer = () => {
  return (
    <Container maxWidth="xs">
      <Typography
        component="h3"
        variant="h6"
        align="center"
        color="error"
        gutterBottom
      >
        Disclaimer
      </Typography>
      <Typography component="p" variant="body2" color="error">
        The above image is a display sample. Every batch of marble is different
        in vein, texture and pattern. Please contact us and visit our warehouse
        to see the latest batch.
      </Typography>
    </Container>
  );
};

export default MarbleDisclaimer;
