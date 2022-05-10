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
import QuartzStoneMenu from "./QuartzStoneMenu";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "grey.900" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            <PageLink
              pageUrl="/quartz-stone"
              pageName="quartz stone ▽"
              id="qs-menu"
              aria-controls={openMenu ? "qs-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
            />
            <QuartzStoneMenu
              anchorEl={anchorEl}
              openMenu={openMenu}
              handleClose={handleClose}
            />

            <PageLink pageUrl="/sintered-stone" pageName="sintered stone" />
            <PageLink pageUrl="/granite" pageName="granite" />
            <PageLink pageUrl="/marble" pageName="marble" />
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
