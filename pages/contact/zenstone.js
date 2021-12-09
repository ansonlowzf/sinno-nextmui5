import CompanyInfo from "@components/Contact/CompanyInfo";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactHero from "@components/Contact/Hero";
import MapInfo from "@components/Contact/MapInfo";
import MetaSEO from "@components/MetaSEO";

const ContactZenstone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Contact us | Zenstone"
        pageDesc="Don't hesitate to contact us by Call, SMS, WhatsApp or Email for any stone countertop inquires."
        pagePath="/contact/zenstone"
        metaImg="/contact/hero.png"
      />
      <ContactHero />

      <CompanyInfo />

      <ContactInfo />

      <MapInfo />
    </>
  );
};

export default ContactZenstone;
