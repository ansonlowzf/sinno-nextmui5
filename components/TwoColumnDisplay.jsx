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
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={6}>
        <Grid item xs={6}>
          {/* <Image imgSrc={imgSrc} alt={stoneName} width={600} height={600} /> */}
          image
        </Grid>
        <Grid item xs={6}>
          <Typography>{stoneName}</Typography>
          <Typography color="text.secondary">Code</Typography>
          <Typography>{materialCode}</Typography>
          <Typography color="text.secondary">Finish</Typography>
          <Typography>{finish}</Typography>
          <Typography color="text.secondary">Thickness</Typography>
          <Typography>{thickness}</Typography>
          <Typography color="text.secondary">Series</Typography>
          <Typography>{series}</Typography>
          <Typography color="text.secondary">Slab Size</Typography>
          <Typography>{slabSize}</Typography>
          <Typography>{price}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Grid item xs={6}>
          Image
        </Grid>
        <Grid item xs={6}>
          Description
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TwoColumnDisplay;
