import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const SolidSurfaceDisplay = ({
  stoneName,
  materialCode,
  finish,
  thickness,
  slabSize,
  imgSrc,
  price,
}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Image
          src={imgSrc}
          alt={stoneName}
          layout="responsive"
          width={500}
          height={500}
        />
      </Grid>
      <Grid container item xs={12} md={6} sx={{ paddingLeft: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" fontWeight="bold">
            {stoneName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Material Code</Typography>
          <Typography fontWeight="bold">{materialCode}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Finish</Typography>
          <Typography fontWeight="bold">{finish}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Thickness</Typography>
          <Typography fontWeight="bold">{thickness}</Typography>
        </Grid>

        <Grid item xs={12} alignSelf="center">
          <Typography
            component="p"
            variant="h4"
            fontWeight="bold"
            sx={{ mt: { xs: 1, md: 0 }, mb: { xs: 3, md: 0 } }}
          >
            {price}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SolidSurfaceDisplay;
