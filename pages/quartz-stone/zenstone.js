import { Hero } from "../../components";
import { qsRoutes } from "../../const/nav-links";
import { SubNavbar } from "../../components";

const ZenstonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/image-zenstone/hero.png"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Malaysia's Brand OEM China Genuine Quartz Stone"
      />

      <SubNavbar routes={qsRoutes} />
    </>
  );
};

export default ZenstonePage;
