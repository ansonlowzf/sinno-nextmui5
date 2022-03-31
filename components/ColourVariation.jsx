import { Container, Typography } from "@mui/material";

const ColourVariation = ({ stone }) => {
  return (
    <Container maxWidth="sm">
      <Typography component="p" variant="h6" color="error" gutterBottom>
        Important
      </Typography>
      <Typography color="error" paragraph>
        {stone}
        {` consists of natural quartz stone. Therefore
subject to variation in shade, veining and colour. Thus,
no absolute resemblance and no consistency can be
guaranteed.`}
      </Typography>
    </Container>
  );
};

export default ColourVariation;
