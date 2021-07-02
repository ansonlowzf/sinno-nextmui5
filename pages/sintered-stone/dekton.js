import { Box } from "@material-ui/core";
import { Hero, SubNavbar } from "../../components";
import { dekton12 } from "../../const/pricing";
import { ssRoutes } from "../../const/nav-links";
import { Heading2 } from "../../element";

const { group0, group1, group2, group3, group4 } = dekton12;

const DektonPage = () => {
  return (
    <>
      <Hero
        imgSrc="/dekton/hero.png"
        imgText="Dekton Natura 18 Kitchen Top"
        title="Dekton"
        subtitle="Ultra-Compact Surface Kitchen Top"
      />
      <SubNavbar routes={ssRoutes} />

      <Box sx={{ my: { xs: 15, sm: 20 } }}>
        <Heading2>Colour &amp; Pricing</Heading2>
      </Box>
    </>
  );
};

export default DektonPage;
