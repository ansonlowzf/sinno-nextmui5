import { SectionWrapper } from "@elements/Wrapper";
import Hero from "@components/Hero";

const ContactHero = () => {
  return (
    <SectionWrapper>
      <Hero
        imgSrc="/contact/hero.png"
        imgAlt="contact us"
        title="Contact Us"
        subtitle="Inquiries | Quotation | Information"
      />
    </SectionWrapper>
  );
};

export default ContactHero;
