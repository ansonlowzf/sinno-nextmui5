import { Container, Typography } from "@mui/material";

export const ColourWarning = () => {
  return (
    <Container maxWidth="sm">
      <Typography color="error" fontWeight="bold" gutterBottom>
        Kindly insist on seeing the actual stone sample or slab before
        proceeding order.
      </Typography>
      <Typography color="error" fontWeight="bold" gutterBottom></Typography>
      <Typography color="error" fontWeight="bold" gutterBottom>
        The colour, pigment, vein, and texture you see in this catalogue might
        differ from the actual due to:-
      </Typography>

      <Typography component="ol" color="error" sx={{ lineHeight: 1.75 }}>
        <li>The variation of the camera.</li>
        <li>{`Colour setting and variation of the device's screen you're using.
`}</li>
        <li>The image processing app or software.</li>
        <li>Lighting adjustment and tuning</li>
        <li>The image has been scaled up or down.</li>
        <li>The image is a close-up shot.</li>
        <li>The image is cropped or zoomed.</li>
      </Typography>
    </Container>
  );
};
