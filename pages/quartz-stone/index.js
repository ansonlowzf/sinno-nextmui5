import {
  Hero,
  SubNavbar,
  SectionContact,
  SectionP,
  SectionA,
  SectionS,
  SectionBenefit,
  SectionWarranty,
  FaqAccordion,
  MetaSEO,
} from "../../components";
import { SectionWrapper } from "../../element";
import { qsRoutes } from "../../const/nav-links";
import { faqQuartzStone } from "../../const/faq";
import { Container } from "@material-ui/core";

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

      <SectionWrapper>
        <SectionContact stone="Quartz Stone" />
      </SectionWrapper>

      <SectionBenefit />

      <SectionWarranty />
      <SectionWrapper>
        <Container maxWidth="sm">
          {faqQuartzStone.map(({ question, answer, id }) => (
            <FaqAccordion key={id} question={question} answer={answer} />
          ))}
        </Container>
      </SectionWrapper>
    </>
  );
};

export default QuartzStone;
