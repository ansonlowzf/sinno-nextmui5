import SideDrawer from "./Header/SideDrawer";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <SideDrawer>{children}</SideDrawer>
      <Footer />
    </>
  );
};

export default Layout;
