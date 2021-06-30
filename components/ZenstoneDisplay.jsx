import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

export const ZenstoneDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={4}>
      <Image
        src={imgSrc}
        alt={stoneName}
        layout="responsive"
        width={600}
        height={600}
      />
      <Grid container item justifyContent="space-between" sx={{ mt: 1, mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">{stoneName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">{price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
