import CompanyInfo from "@components/Contact/CompanyInfo";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactHero from "@components/Contact/Hero";
import MapInfo from "@components/Contact/MapInfo";
import MetaSEO from "@components/MetaSEO";

const ContactCaesarstone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Contact us | Quartz Stone"
        pageDesc="Don't hesitate to contact us by Call, SMS, WhatsApp or Email for quartz stone inquires."
        pagePath="contact/quartz-stone"
        metaImg="/contact/hero.png"
      />
      <ContactHero />

      <CompanyInfo />

      <ContactInfo />

      <MapInfo />
    </>
  );
};

export default ContactCaesarstone;
