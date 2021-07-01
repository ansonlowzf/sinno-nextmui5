import { Typography } from "@material-ui/core";
import { TextWrapper } from "../../element";
// Change to blog
export const Commitment = () => {
  return (
    <>
      <TextWrapper>
        <Typography component="h3" variant="h4" align="center" gutterBottom>
          {`NSF 51 Certified`}
        </Typography>
        <Typography paragraph>
          {`Caesarstone, it is endorsed by the Public Health and Safety Company (NSF) under international NSF 51 sanitary standards. Hence, it's safe for food preparation`}
        </Typography>
        <Typography paragraph>
          {`National Health and Safety Foundation (NSF) International is a
      not-for-profit, non-governmental organization that is the world
      leader in standards development, product certification, education
      and risk-management for public health and safety.`}
        </Typography>
        <Typography paragraph>
          {`Since the year 1944, NSF has been committed to public health,
      safety, and protection of the environment.`}
        </Typography>
        <Typography paragraph>
          {`With international NSF 51 sanitary standards certified. Caesarstone is
      qualified for installation in hospitals, restaurants, hotels and
      more.`}
        </Typography>
        <Typography className={classes.textMB}>
          {`Caesarstone surfaces are nonporous and prevent the growth of surface mould and bacteria due to the use of quartz as a key ingredient.`}
          <a
            className="link-style"
            target="_blank"
            rel="noopener noreferrer"
            href="http://info.nsf.org/Certified/food/Listings.asp?Standard=051&Company=0M650&"
          >
            {` Check out the listings here in NSF official website`}
          </a>
        </Typography>
      </TextWrapper>
      <TextWrapper>
        <Typography component="h3" variant="h4" align="center" gutterBottom>
          {`Volatile Organic Compound (VOC)`}
        </Typography>
        <Typography paragraph>
          {`Have you ever wonder where is the "pungent smell" come
    from after your wardrobe installation is done? It's an air
    release from volatile organic compound (VOC) which is a chemical
    used to make and extend the life of building material. This
    VOC's air might be harmful to certain people especially
    children and people with asthma. It's will cause lungs and
    breathe problems if overexposed to VOC`}
        </Typography>
        <Typography className={classes.textMB}>
          {`All Caesarstone surfaces comply with American GEI (GREENGUARD
    Environmental Institute) certification which primarily verifies that
    Caesarstone’s products meet the most stringent indoor air emission
    standards. `}
        </Typography>
      </TextWrapper>
      <TextWrapper>
        <Typography component="h3" variant="h4" align="center" gutterBottom>
          {`GREENGUARD Environmental Institute`}
        </Typography>

        <Typography component="p" variant="body1" gutterBottom>
          {`GREENGUARD establishes acceptable indoor air standards for indoor
        products environments, and buildings.`}
        </Typography>
        <Typography component="p" variant="body1" align="center" paragraph>
          <a
            className="link-style"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.caesarstoneus.com/media/221949/greenguard-caesarstone-low-chemical-emissions-compliance-certificate-2020_91719.pdf"
          >
            {`Greenguard 5464-410 Certification`}
          </a>
        </Typography>
        <Typography component="p" variant="body1" align="center" paragraph>
          <a
            className="link-style"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.caesarstoneus.com/media/221950/greenguard-gold-caesarstone-low-chemical-emissions-compliance-certificate-2020_91719.pdf"
          >
            {`Greenguard 5464-420 Certification`}
          </a>
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`The GREENGUARD Certification Program is an industry-independent,
      third-party testing program for low-emitting products and materials.`}
        </Typography>

        <Typography component="p" variant="body1" paragraph>
          {`GREENGUARD Gold Standard, evaluates the sensitive nature of school
          populations combined with the unique building characteristics
          found in schools, and presents the most rigorous product emissions
          criteria to date.`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`For more information about GEI and GREENGUARD, visit`}
          {` `}
          <a
            className="link-style"
            target="_blank"
            rel="noopener noreferrer"
            href="www.greenguard.org"
          >
            {`www.greenguard.org `}
          </a>
        </Typography>
      </TextWrapper>
    </>
  );
};
