import { AppBar, Container, Fab, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowUp } from "@mui/icons-material";
import { MuiNextLink } from "../../components";
import BackToTop from "./BackToTop";
import HideOnScroll from "./HideOnScroll";
import SideDrawer from "./SideDrawer";
import SinnoLogo from "../../public/favicon.png";
import Image from "next/image";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <MuiNextLink href="/">
                <IconButton aria-label="home">
                  <Image
                    src={SinnoLogo}
                    alt="Stone Innovations Enterprise Logo"
                    width={48}
                    height={48}
                  />
                </IconButton>
              </MuiNextLink>
              <SideDrawer />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
