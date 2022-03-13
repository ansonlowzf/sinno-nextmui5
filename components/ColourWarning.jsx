import { Container, Typography } from "@mui/material";

export const ColourWarning = () => {
  return (
    <Container maxWidth="xs">
      <Typography component="p" variant="h6" color="error" gutterBottom>
        Important
      </Typography>
      <Typography component="p" variant="subtitle2" paragraph color="error">
        {`Caesarstone consists of natural quartz stone. Therefore
subject to variation in shade, veining and colour. Thus,
no absolute resemblance and no consistency can be
guaranteed.`}
      </Typography>
      <Typography color="error" gutterBottom>
        <strong>
          Kindly insist on seeing the actual stone sample or slab before
          proceeding with your order because:-
        </strong>
      </Typography>
      <Typography component="ul" variant="subtitle2" paragraph color="error">
        <li>{`Due to the colour setting and variation of the devices'
screen, the colour you see in this catalogue might not
be exact compared to the actual.
`}</li>
        <li>{`Processing the photos with an app or software, lighting,
scaling up or down the images, close up shots, photo
cropping, and zooming might affect the colour, pigment,
vein, and texture is different from the actual.`}</li>
      </Typography>
    </Container>
  );
};
