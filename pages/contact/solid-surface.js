import CompanyInfo from "@components/Contact/CompanyInfo";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactHero from "@components/Contact/Hero";
import MapInfo from "@components/Contact/MapInfo";
import MetaSEO from "@components/MetaSEO";

const ContactComacs = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Contact us"
        pageDesc="Don't hesitate to contact us by Call, SMS, WhatsApp or Email for any stone countertop inquires."
        pagePath="/contact"
        metaImg="/contact/hero.png"
      />
      <ContactHero />

      <CompanyInfo />

      <ContactInfo />

      <MapInfo />
    </>
  );
};

export default ContactComacs;
