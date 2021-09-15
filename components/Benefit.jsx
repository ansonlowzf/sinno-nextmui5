import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export const Benefit = ({ imgSrc, title, desc }) => {
  return (
    <>
      <Grid container item xs={12} md={4}>
        <Grid item xs={12}>
          <Image
            src={imgSrc}
            alt={title}
            layout="responsive"
            width={400}
            height={250}
          />
          <Typography component="h3" variant="h6" sx={{ mt: 1 }} gutterBottom>
            {title}
          </Typography>
          <Typography align="justify">{desc}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
