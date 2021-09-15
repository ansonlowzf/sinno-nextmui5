import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

export const SlabDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        component={Image}
        alt={stoneName}
        src={imgSrc}
        width={800}
        height={600}
      />

      <Grid container item justifyContent="space-between" sx={{ mt: 1, mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography component="p" variant="subtitle2" align="center">
            {stoneName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="p" variant="subtitle2" align="center">
            {price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
