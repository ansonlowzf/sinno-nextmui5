import { Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { SectionContact, SectionImage, FaqAccordion } from "../components";
import { Heading2, Heading3, SectionWrapper, TextWrapper } from "../element";
import { MuiNextLink } from "../components";
import { faqCompany } from "../const/faq";

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
            component="ol"
            sx={{ width: `fit-content`, marginInline: `auto` }}
          >
            <li>Kitchen Top</li>
            <li>Island Top</li>
            <li>Vanity Top</li>
            <li>Pantry Top</li>
            <li>Kitchen Shelves</li>
            <li>Backsplash</li>
            <li>TV Cabinet Wall Cladding</li>
            <li>TV Cabinet Top</li>
            <li>Bar Countertop</li>
            <li>Breakfast Countertop</li>
            <li>Custom Made Dining Table Top</li>
            <li>Custom Made Coffee Table Top</li>
            <li>Custom Made Side Table Top</li>
            <li>Cashier Countertop</li>
            <li>Sauces Countertop</li>
            <li>Wall Cladding</li>
            <li>Other Top &amp; Cladding Purposes</li>
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

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Heading3>Frequently Ask Questions</Heading3>
        <Typography component="p" variant="h5" align="center" sx={{ mb: 2 }}>
          Company/Factory/Warehouse
        </Typography>
        <SectionWrapper>
          <Container maxWidth="sm">
            {faqCompany.map(({ question, answer, id }) => (
              <FaqAccordion key={id} question={question} answer={answer} />
            ))}
          </Container>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default Homepage;
