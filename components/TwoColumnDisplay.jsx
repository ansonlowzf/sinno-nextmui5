import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const TwoColumnDisplay = ({
  imgSrc,
  stoneName,
  materialCode,
  finish,
  thickness,
  series,
  slabSize,
  price,
}) => {
  return (
    <Grid container item xs={12} md={6}>
      <Grid item xs={12} sx={{ mr: { xs: 0, md: 1 } }}>
        <Image src={imgSrc} alt={stoneName} width={600} height={600} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h3"
          variant="h4"
          color="primary"
          fontWeight="bold"
          gutterBottom
        >
          {stoneName}
        </Typography>
        <Typography gutterBottom>
          {`Code: `}
          <strong>{materialCode}</strong>
        </Typography>
        <Typography gutterBottom>
          {`Finish: `}
          <strong>{finish}</strong>
        </Typography>
        <Typography gutterBottom>
          {`Thickness: `}
          <strong>{thickness}</strong>
        </Typography>
        <Typography gutterBottom>
          {`Series: `}
          <strong>{series}</strong>
        </Typography>
        <Typography gutterBottom>
          {`Slab Size: `}
          <strong>{slabSize}</strong>
        </Typography>
        <Typography
          component="p"
          variant="h5"
          color="text.secondary"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          {price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TwoColumnDisplay;
