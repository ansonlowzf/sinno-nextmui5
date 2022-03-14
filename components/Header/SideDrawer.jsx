import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import * as React from "react";
import MainList from "@components/Header/MainList";
import SubList from "@components/Header/SubList";

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
      role="side navigation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MainList pageName="home" pageUrl="/" />

      <MainList pageName="quartz stone" pageUrl="/quartz-stone" />
      <SubList pageName="caesarstone" pageUrl="/quartz-stone/caesarstone" />
      <SubList pageName="zenstone" pageUrl="/quartz-stone/zenstone" />

      <MainList
        pageName="sintered stone"
        pageUrl="/sintered-stone/moca-compact"
      />

      <MainList pageName="granite" pageUrl="/granite" />

      <MainList pageName="marble" pageUrl="/marble" />

      <MainList pageName="projects" pageUrl="/projects" />

      <MainList pageName="blog" pageUrl="/blog" />

      <MainList pageName="contact us" pageUrl="/contact" />
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
