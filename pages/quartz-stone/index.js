import { Hero, SubNavbar, SectionP, SectionA } from "../../components";
import { qsRoutes } from "../../const/nav-links";
import { SectionWrapper } from "../../element";

const QuartzStone = () => {
  return (
    <>
      <Hero
        imgSrc="/quartz-stone/4735.jpg"
        imgAlt="Caesarstone Oxidian"
        title="Quartz Stone"
        subtitle="Genuine Quartz Stone Kitchen Top"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <SectionP />
      </SectionWrapper>

      <SectionWrapper>
        <SectionA />
      </SectionWrapper>
    </>
  );
};

export default QuartzStone;
