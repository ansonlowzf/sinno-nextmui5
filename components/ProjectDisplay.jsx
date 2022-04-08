import { Grid } from "@mui/material";
import Image from "next/image";

const ProjectDisplay = ({ imgSrc, imgAlt }) => {
  return (
    <Grid item sm={6} md={4}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="responsive"
        width={450}
        height={450}
      />
    </Grid>
  );
};

export default ProjectDisplay;
