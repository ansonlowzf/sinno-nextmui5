import MainList from "@components/Header/MainList";
import SubList from "@components/Header/SubList";
import MuiNextLink from "@components/MuiNextLink";
import { Box, Drawer, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import SinnoLogo from "../../public/favicon.png";
import Menu from "@mui/icons-material/Menu";

const SideDrawer = () => {
  const [state, setState] = React.useState({ right: false });

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
      sx={{ width: 250, my: "auto" }}
      role=""
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container item justifyContent="center" sx={{ my: 5 }}>
        <MuiNextLink href="/">
          <IconButton aria-label="home">
            <Image
              src={SinnoLogo}
              alt="Stone Innovations Enterprise Logo"
              width={64}
              height={64}
            />
          </IconButton>
        </MuiNextLink>
      </Grid>
      <MainList pageName="home" pageUrl="/" />

      <MainList pageName="quartz stone" pageUrl="/quartz-stone" />
      <SubList pageName="- caesarstone" pageUrl="/quartz-stone/caesarstone" />
      <SubList pageName="- zenstone" pageUrl="/quartz-stone/zenstone" />

      <MainList pageName="sintered stone" pageUrl="/sintered-stone" />

      <MainList pageName="granite" pageUrl="/granite" />

      <MainList pageName="marble" pageUrl="/marble" />

      <MainList pageName="solid surface" pageUrl="/solid-surface" />

      <MainList pageName="projects" pageUrl="/projects" />

      <MainList pageName="blog" pageUrl="/blog" />

      <MainList pageName="contact us" pageUrl="/contact" />
    </Box>
  );

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{ ml: 2, display: { xs: "flex", md: "none" } }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "grey.900",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
