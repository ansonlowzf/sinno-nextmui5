import { Grid } from "@mui/material";
import Image from "next/image";

const ProjectImage = ({ imgSrc, imgAlt }) => {
  return (
    <Grid item xs={12} md={4}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="responsive"
        width={800}
        height={600}
      />
    </Grid>
  );
};

export default ProjectImage;
