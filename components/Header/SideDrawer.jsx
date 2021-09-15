import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import * as React from "react";
import { mainRoutes } from "../../const/nav-links";
import { MuiNextLink } from "../../components";

const SideDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {mainRoutes.map(({ name, path }, i) => (
        <Typography
          variannt="button"
          key={`${name}${i}`}
          sx={{
            ml: (theme) => theme.spacing(5),
            my: (theme) => theme.spacing(2),
            textTransform: `uppercase`,
          }}
        >
          <MuiNextLink color="primary" underline="none" href={path}>
            {name}
          </MuiNextLink>
        </Typography>
      ))}
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `common.white`,
          display: { lg: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "secondary.main",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
