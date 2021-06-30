import { Hero, SubNavbar } from "../../../components";
import { Heading2, SectionWrapper } from "../../../element";
import { qsRoutes } from "../../../const/nav-links";

const CaesarstonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/caesarstone/hero.png"
        imgText="Caesarstone Empira White"
        title="Caesarstone Malaysia"
        subtitle="Caesarstone Quartz Surface Kitchen Top"
      />

      <SubNavbar routes={qsRoutes} />
      <SectionWrapper>
        <Heading2>Caesarstone Quartz Surface</Heading2>
      </SectionWrapper>
    </>
  );
};

export default CaesarstonePage;
