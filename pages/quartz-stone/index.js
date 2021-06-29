import {
  Hero,
  SubNavbar,
  SectionContact,
  SectionP,
  SectionA,
  SectionS,
  SectionBenefit,
  SectionWarranty,
} from "../../components";
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

      <SectionP />
      <SectionA />
      <SectionS />

      <SectionWrapper>
        <SectionContact stone="Quartz Stone" />
      </SectionWrapper>

      <SectionBenefit />

      <SectionWarranty />
    </>
  );
};

export default QuartzStone;
