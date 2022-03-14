import { Typography } from "@mui/material";
import { MuiNextLink } from "..";

const SubList = ({ pageName, pageUrl }) => (
  <Typography
    variannt="button"
    sx={{
      ml: (theme) => theme.spacing(7.5),
      my: (theme) => theme.spacing(3),
      textTransform: `uppercase`,
    }}
  >
    <MuiNextLink color="primary" underline="none" href={pageUrl}>
      {pageName}
    </MuiNextLink>
  </Typography>
);

export default SubList;
