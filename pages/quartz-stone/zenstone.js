import { Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { Hero, SubNavbar, ZenstoneDisplay } from "../../components";
import { qsRoutes } from "../../const/nav-links";
import { zenstone } from "../../const/pricing";
import { Heading2, SectionWrapper, TextWrapper } from "../../element";

const { classic, premium, noble, marble } = zenstone;

const ZenstonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/image-zenstone/hero.png"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Malaysia's Brand OEM China Genuine Quartz Stone"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={10} md={2}>
            <Image
              src="/image-zenstone/logo.png"
              alt="zenstone logo"
              layout="responsive"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
      <SectionWrapper>
        <TextWrapper>
          <Typography paragraph>{`
        A Malaysia's quartz stone's developed by Aston Builder in the year 2013 and was acquired by Stone Innovations Enterprise in the first quarter of the year 2017.
        `}</Typography>
          <Typography>
            Genuine quartz stone direct import from China which meet
            international SGS standard. Real quartz stone which comes with ten
            years limited warranty. More than 60 colours option.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Colour &amp; Shades</Heading2>
        <SectionWrapper>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" spacing={1}>
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101503.png"
                stoneName="Smoothie White"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101506.png"
                stoneName="Smoothie Grey"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101508.png"
                stoneName="Smoothie Beige"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101509.png"
                stoneName="Red Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101510.png"
                stoneName="Brown Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101511.png"
                stoneName="Blue Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101512.png"
                stoneName="Purple Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101513.png"
                stoneName="Orange Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101521.png"
                stoneName="White Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101522.png"
                stoneName="Black Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101523.png"
                stoneName="Snow White"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101524.png"
                stoneName="Grey Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101525.png"
                stoneName="Beige Mirror"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101526.png"
                stoneName="Crystal White"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101527.png"
                stoneName="White Planet"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q101528.png"
                stoneName="Icy White"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q3015.png"
                stoneName="Shell King"
                price={classic}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201501.png"
                stoneName="Brown Cream"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201502.png"
                stoneName="Yellow Hill"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201503.png"
                stoneName="England Coffee"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201505.png"
                stoneName="Pure Black"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201506.png"
                stoneName="Grey Forest"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q202032.png"
                stoneName="Pure Grey"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q4015.png"
                stoneName="Purple Galaxy"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601501.png"
                stoneName="Blue Sapphire"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601502.png"
                stoneName="Beige Gold"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601503.png"
                stoneName="White Gold"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601504.png"
                stoneName="Cameo"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601505.png"
                stoneName="Black Gold"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601506.png"
                stoneName="White Gold Sand"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601507.png"
                stoneName="Beige Gold Medium"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601508.png"
                stoneName="Coffee Gold Sand"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q601509.png"
                stoneName="Golden Coffee"
                price={premium}
              />
              <ZenstoneDisplay
                imgSrc="/zenstone/qs/Q201541.png"
                stoneName="Super White"
                price={noble}
              />
            </Grid>
          </Container>
        </SectionWrapper>

        <SectionWrapper>
          <Container maxWidth="lg">
            <Grid container spacing={1} justifyContent="center"></Grid>
          </Container>
        </SectionWrapper>
      </SectionWrapper>
    </>
  );
};

export default ZenstonePage;
