import { Hero, SubNavbar } from "../../../components";
import { Heading2, SectionWrapper, TextWrapper } from "../../../element";
import { qsRoutes } from "../../../const/nav-links";
import { Typography } from "@material-ui/core";

const CaesarstonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/caesarstone/hero.png"
        imgText="Caesarstone Empira White"
        title="Caesarstone Malaysia"
        subtitle="Caesarstone Quartz Surface Kitchen Top"
      />

      <SubNavbar routes={qsRoutes} />
      <SectionWrapper>
        <Heading2>Caesarstone Quartz Surface</Heading2>
        <TextWrapper>
          <Typography paragraph>
            Caesarstone is one of the highest quality quartz stone you could
            find in the market right now.
          </Typography>
          <Typography paragraph>
            {` It's designed to mimic the colour of natural stone while maintaining
            the benefit of quartz stone and providing a natural and premium
            feeling to your home design.`}
          </Typography>
          <Typography paragraph>
            Imagine you have a beautiful kitchen top which no need to worry
            about scratches, heat burnt mark, and so easy to maintain. Cooking
            feels so accessible now.
          </Typography>
          <Typography>
            {`Stone Innovations Enterprise is Caesarstone Malaysia's distributor.
            We distribute Caesarstone slabs and fabricate, supply &amp; install
            Caesarstone products such as kitchen top, island top, vanity top and
            wall cladding.`}
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Typography align="center">
          The price shown below is for all the 34 Caesarstone colours available
          in Malaysia in 20mm thick. 13mm is also available for a 10% lower
          price.
        </Typography>
      </SectionWrapper>
    </>
  );
};

export default CaesarstonePage;
