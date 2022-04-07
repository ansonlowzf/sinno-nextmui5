import MainList from "@components/Header/MainList";
import SubList from "@components/Header/SubList";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { MuiNextLink } from "..";
import SinnoLogo from "../../public/favicon.png";

const drawerWidth = 250;

const SideDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const list = (
    <Box sx={{ bgcolor: "secondary" }}>
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
      <SubList
        pageName="caesarstone quartz surfaces"
        pageUrl="/quartz-stone/caesarstone"
      />
      <SubList
        pageName="zenstone quartz surfaces"
        pageUrl="/quartz-stone/zenstone"
      />

      <MainList pageName="sintered stone" pageUrl="/sintered-stone" />

      <MainList pageName="granite" pageUrl="/granite" />

      <MainList pageName="marble" pageUrl="/marble" />

      <MainList pageName="solid surface" pageUrl="/solid-surface" />

      <MainList pageName="projects" pageUrl="/projects" />

      <MainList pageName="blog" pageUrl="/blog" />

      <MainList pageName="contact us" pageUrl="/contact" />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="secondary"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            component="div"
            variant="h6"
            noWrap
            color="primary"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 1,
              "& :hover": { color: "white" },
            }}
          >
            <MuiNextLink href="/" underline="none">
              Stone Innovations Enterprise
            </MuiNextLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="main navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              bgcolor: "secondary.main",
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {list}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              bgcolor: "secondary.main",
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {list}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default SideDrawer;
