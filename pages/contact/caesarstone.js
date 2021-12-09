import CompanyInfo from "@components/Contact/CompanyInfo";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactHero from "@components/Contact/Hero";
import MapInfo from "@components/Contact/MapInfo";
import MetaSEO from "@components/MetaSEO";

const ContactCaesarstone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Contact us | Caesarstone"
        pageDesc="Don't hesitate to contact us by call, SMS, WhatsApp or Email for any Caesarstone inquires."
        pagePath="/contact/caesarstone"
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
