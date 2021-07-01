import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

export const CaesarstoneDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      <Image src={imgSrc} alt={stoneName} width={620} height={350} />
      <Grid container item justifyContent="center" sx={{ mt: 1, mb: 3 }}>
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
