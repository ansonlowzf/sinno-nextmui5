import { Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

const StsDisplay = ({
  stoneName,
  materialCode,
  finish,
  thickness,
  slabSize,
  imgSrc,
}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Image
          src={imgSrc}
          alt={stoneName}
          layout="responsive"
          width={640}
          height={360}
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
        <Grid item xs={6}>
          <Typography>Size</Typography>
          <Typography fontWeight="bold">{slabSize}</Typography>
        </Grid>
        <Grid item xs={12} alignSelf="center">
          <Typography component="p" variant="h4" sx={{ mt: { xs: 2 } }}>
            RM 310/FR or RM 165/SF
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default StsDisplay;
