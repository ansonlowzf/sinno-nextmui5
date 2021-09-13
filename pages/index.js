import { Container, Typography, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import { Hero, MetaSEO, SectionContact, SectionImage } from "../components";
import { Heading2, Heading3, SectionWrapper, TextWrapper } from "../element";
import { MuiNextLink } from "../components";

const Homepage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Home"
        pageDesc="We're a stonemason and factory that fabricate, supply and install stone surfacing products for residential and commercial use."
        pagePath="home"
        metaImg="/home/hero.jpg"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/image-home/hero.jpg"
          imgAlt="factory entrance"
          title="Stone Innovations Enterprise"
          subtitle="Specializing in Stone Surfacing Products"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Heading2>What Is A Stone Surfacing Specialist?</Heading2>
          <TextWrapper>
            <Typography
              component="p"
              variant="h6"
              textAlign="center"
              sx={{ mb: 2.5 }}
            >
              Mountain Quarry &gt; Stone Block &gt; Natural Stone Slab
            </Typography>
          </TextWrapper>

          <Image
            src="/image-home/marble-block.jpg"
            alt="marble block"
            layout="responsive"
            width={960}
            height={540}
          />
          <TextWrapper>
            <Typography gutterBottom sx={{ my: 5 }}>
              For natural stone, the quarry factory mine from a stone mountain
              and cut to a stone block. They either sell the stone block or cut
              it again and sell it as an 11mm - 30mm stone slab.
            </Typography>
          </TextWrapper>
          <Typography
            component="p"
            variant="h6"
            textAlign="center"
            sx={{ mb: 2.5 }}
          >
            Minerals + Ingredients &gt; Manufactory &gt; Engineered Stone Slab
          </Typography>
          <Image
            src="/image-home/stone-manufactory.jpg"
            alt="stone manufactory"
            layout="responsive"
            width={960}
            height={540}
          />
          <Typography
            component="p"
            variant="h6"
            textAlign="center"
            sx={{ mt: 5, mb: 2.5 }}
          >
            The typical size of the engineered stone slab
          </Typography>
          <Image
            src="/image-home/stone-surfacing.jpg"
            alt="stone surfacing"
            layout="responsive"
            width={960}
            height={540}
          />
          <TextWrapper>
            <Typography sx={{ my: 5 }}>
              Stone Surfacing Specialist is a fabrication company which take the
              stone slab then cut, polish, edging, detailing and turn into stone
              surfacing products such as:-
            </Typography>
          </TextWrapper>
          <Typography
            component="ul"
            sx={{ width: `fit-content`, marginInline: `auto` }}
          >
            <li>Kitchen Top</li>
            <li>Island Top</li>
            <li>Vanity Top</li>
            <li>Pantry Top</li>
            <li>TV Cabinet Top</li>
            <li>Dining Table Top</li>
            <li>Coffee Table Top</li>
            <li>Cashier Countertop</li>
            <li>Wall Cladding</li>
            <li>Stone Shelves</li>
            <li>And More</li>
          </Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Heading2>{`The Stone Slab We're Specializing In:`}</Heading2>
          <Typography
            component="ul"
            variant="body1"
            sx={{ width: `fit-content`, marginInline: `auto` }}
          >
            <li>Quartz Stone - Engineered Stone</li>
            <li>Sintered Stone - Engineered Stone</li>
            <li>Granite - Natural Stone</li>
            <li>Marble - Natural Stone</li>
            <li>Onyx - Natural Stone</li>
          </Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <SectionImage
          imgSrc="/image-home/5101.jpg"
          imgAlt="Caesarstone Empira Black"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Grid container>
            <Grid
              container
              item
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
              sx={{ mb: 5, px: { md: 5 } }}
            >
              <Heading3>Blog</Heading3>
              <Typography textAlign="center" sx={{ mb: 5 }}>
                Looking for more information about custom made stone kitchen
                top?
              </Typography>
              <MuiNextLink href="/blog" underline="none">
                <Button variant="outlined" size="large">
                  Read Article
                </Button>
              </MuiNextLink>
            </Grid>
            <Grid item xs={12} md={6} sx={{ overflow: `hidden` }}>
              <Image
                src="/image-home/5151.jpg"
                alt="Caesarstone white attica"
                layout="responsive"
                width={960}
                height={540}
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Stone" />
      </SectionWrapper>
    </>
  );
};

export default Homepage;
