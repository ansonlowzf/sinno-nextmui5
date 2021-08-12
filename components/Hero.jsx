import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Image from "next/image";

export const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Grid
      container
      sx={{
        position: `relative`,
        height: "calc(100vh - 64px)",
        width: `100%`,
        overflow: `hidden`,
        zIndex: "-100",
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
          zIndex: "100",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={10}
          md={8}
          sx={{ zIndex: "101" }}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              color: "secondary.main",
              fontWeight: 400,
              zIndex: "102",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="h3"
            align="center"
            color="common.white"
            sx={{
              mb: 10,
              zIndex: "102",
            }}
          >
            {subtitle}
          </Typography>
          <Typography component="p" variant="h6" color="secondary" gutterBottom>
            Scroll
          </Typography>
          {/* TODO: Add Bouncing effect to arrow */}
          <ArrowDownwardIcon fontSize="large" color="secondary" />
        </Grid>
      </Grid>
    </Grid>
  );
};
