import { Box, Container, Typography } from "@mui/material";
import { SectionWrapper, Heading3 } from "../../element";

export const SectionS = () => (
  <SectionWrapper>
    <Heading3>Why Use Genuine Quartz Stone?</Heading3>
    <Container maxWidth="sm">
      <Typography align="center" paragraph>
        Each video is 1 minute. We torture our quartz stone.
      </Typography>
      <Box
        component="iframe"
        title="test quartz stone scratch resistance"
        src="https://www.youtube.com/embed/L80IMvVu8j0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
      />
      <Box
        component="iframe"
        title="test quartz stone stain resistance"
        src="https://www.youtube.com/embed/NPdanaeRwWc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
      />
      <Box
        component="iframe"
        title="test quartz stone heat resistance"
        src="https://www.youtube.com/embed/sEk7n4oj5Ps"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
      />
      <Typography
        component="p"
        variant="h6"
        color="primary"
        align="center"
        sx={{ mt: 5 }}
      >
        Is this the quality you looking for?
      </Typography>
    </Container>
  </SectionWrapper>
);
