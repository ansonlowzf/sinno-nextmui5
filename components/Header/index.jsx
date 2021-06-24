import * as React from "react";
import {
  Box,
  AppBar,
  Container,
  Fab,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { MuiNextLink } from "../../components";
import MainNav from "./MainNav";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import BackToTop from "./BackToTop";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
    </Box>
  );
};

export default Header;
