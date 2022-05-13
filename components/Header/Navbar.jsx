import MenuNaturalStone from "@components/MenuNaturalStone";
import MuiNextLink from "@components/MuiNextLink";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import SinnoLogo from "../../public/favicon.png";
import PageLink from "./PageLink";
import MenuEngineeredStone from "./MenuEngineeredStone";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "grey.900" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MuiNextLink href="/" sx={{ mr: { xs: "auto", lg: "initial" } }}>
            <IconButton aria-label="home">
              <Image
                src={SinnoLogo}
                alt="Stone Innovations Enterprise Logo"
                width={64}
                height={64}
              />
            </IconButton>
          </MuiNextLink>
          <MuiNextLink
            href="/"
            sx={{ mr: "auto", display: { xs: "none", lg: "flex" } }}
            underline="none"
          >
            <Typography
              sx={{
                my: 2,
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Stone Innovations Enterprise
            </Typography>
          </MuiNextLink>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <PageLink pageUrl="/" pageName="home" />
            <MenuEngineeredStone />
            <MenuNaturalStone />
            <PageLink pageUrl="/solid-surface" pageName="solid surface" />
            <PageLink pageUrl="/projects" pageName="projects" />
            <PageLink pageUrl="/blog" pageName="blog" />
            <PageLink pageUrl="/contact" pageName="contact us" />
          </Box>

          <SideDrawer />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
