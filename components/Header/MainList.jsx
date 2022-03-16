import { Typography } from "@mui/material";
import { MuiNextLink } from "..";

const MainList = ({ pageName, pageUrl }) => {
  return (
    <Typography
      variannt="button"
      sx={{
        ml: (theme) => theme.spacing(3),
        my: (theme) => theme.spacing(3),
        textTransform: `uppercase`,
        "& :hover": { color: "white" },
      }}
    >
      <MuiNextLink color="primary" underline="none" href={pageUrl}>
        {pageName}
      </MuiNextLink>
    </Typography>
  );
};

export default MainList;
