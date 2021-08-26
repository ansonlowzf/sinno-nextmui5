import {
  Hero,
  MetaSEO,
  SectionA,
  SectionBenefit,
  SectionContact,
  SectionP,
  SectionS,
  SectionWarranty,
  SubNavbar,
} from "../../components";
import { qsRoutes } from "../../const/nav-links";
import { SectionWrapper } from "../../element";

const QuartzStone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Quartz Stone"
        pageDesc="We distribute, fabricate, supply &amp; install Caesarstone, Silestone &amp; Zenstone Quartz Surface in Malaysia"
        pagePath="quartz-stone"
        metaImg="/quartz-stone/4735.jpg"
      />
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

      <SectionBenefit />

      <SectionWarranty />

      <SectionWrapper>
        <SectionContact stone="Quartz Stone" />
      </SectionWrapper>
    </>
  );
};

export default QuartzStone;
