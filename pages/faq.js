import { Container } from "@material-ui/core";
import { MetaSEO, Hero, FaqAccordion } from "../components";
import { SectionWrapper, Heading3 } from "../element";
import { faqQuartzStone, faqCompany } from "../const/faq";

const FaqPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="FAQ"
        pageDesc="Frequently ask question about the stones we are selling and the company."
        pagePath="faq"
        metaImg="/faq/hero.png"
      />
      <Hero
        imgSrc="/faq/hero.png"
        imgAlt="faq image"
        title="FAQ"
        subtitle="Frequestly Ask Questions"
      />

      <Container maxWitdh="lg" sx={{ mt: 10 }}>
        <Heading3>Company</Heading3>
        <SectionWrapper>
          <Container maxWidth="sm">
            {faqCompany.map(({ question, answer, id }) => (
              <FaqAccordion key={id} question={question} answer={answer} />
            ))}
          </Container>
        </SectionWrapper>
      </Container>

      <Container maxWitdh="lg" sx={{ mt: 10 }}>
        <Heading3>Quartz Stone</Heading3>
        <SectionWrapper>
          <Container maxWidth="sm">
            {faqQuartzStone.map(({ question, answer, id }) => (
              <FaqAccordion key={id} question={question} answer={answer} />
            ))}
          </Container>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default FaqPage;
