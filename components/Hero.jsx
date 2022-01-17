import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";

const Hero = ({ imgSrc, imgAlt, title, subtitle, noMB }) => {
  return (
    <Grid
      container
      sx={{
        position: `relative`,
        height: "calc(100vh - 64px)",
        width: `100%`,
        overflow: `hidden`,
        mb: noMB ? 0 : { xs: 5, sm: 10, md: 15, lg: 20 },
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
          sm={9}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            color="primary"
            sx={{
              fontWeight: 400,
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
            }}
          >
            {subtitle}
          </Typography>
          <Typography component="p" variant="h6" color="primary" gutterBottom>
            Scroll
          </Typography>
          {/* TODO: Add Bouncing effect to arrow */}
          <ArrowDownward fontSize="large" color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
