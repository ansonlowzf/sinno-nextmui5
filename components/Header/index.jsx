import { AppBar, Container, Fab, IconButton, Toolbar } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import * as React from "react";
import { MuiNextLink } from "../../components";
import BackToTop from "./BackToTop";
import HideOnScroll from "./HideOnScroll";
import MainNav from "./MainNav";
import SideDrawer from "./SideDrawer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  />
                </MuiNextLink>
              </IconButton>
              <MainNav />
              <SideDrawer />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
