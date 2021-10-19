import { Container, Grid, Typography } from "@mui/material";
import MetaSEO from "@components/MetaSEO";
import Hero from "@components/Hero";
import { SectionWrapper } from "@elements/Wrapper";
import { Heading2, Heading3 } from "@elements/Heading";
import Image from "next/image";

const Project = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Project"
        pageDesc="We completed the following residential and commercial project with quartz stone, sintered stone, granite, marble and other stone."
        pagePath="project"
        metaImg="/project/hero.png"
      />
      <Hero
        imgSrc="/project/hero.png"
        imgAlt="project hero"
        title="Completed Projects"
        subtitle="Residential &amp; Commercial"
      />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Heading2>Residential Projects</Heading2>

        <Grid container spacing={0.5}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/aura15/1.png"
              layout="responsive"
              alt="caesarstone aura15 kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/aura15/2.png"
              layout="responsive"
              alt="caesarstone aura15 kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/aura15/3.png"
              layout="responsive"
              alt="caesarstone aura15 kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/aura15/4.png"
              layout="responsive"
              alt="caesarstone aura15 kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/aura15/5.png"
              layout="responsive"
              alt="caesarstone aura15 kitchen top"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Typography fontWeight="bold" gutterBottom>
            Work Description:
          </Typography>
          <Typography paragraph>
            Supply &amp; install 4mm Dekton Ultra-Compact Surface Aura 15
            kitchen wall cladding
          </Typography>
        </Container>
        <hr />
        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/calacatta-nuvo/1.png"
              layout="responsive"
              alt="caesarstone calacatta nuvo kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/calacatta-nuvo/2.png"
              layout="responsive"
              alt="caesarstone calacatta nuvo kitchen top"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Typography fontWeight="bold" gutterBottom>
            Work Description:
          </Typography>
          <Typography paragraph>
            Supply &amp; install 20mm Caesarstone quartz surfaces Calacatta Nuvo
            kitchen top
          </Typography>
        </Container>
        <hr />
        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/raven/1.png"
              layout="responsive"
              alt="caesarstone raven kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/raven/2.png"
              layout="responsive"
              alt="caesarstone raven kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/raven/3.png"
              layout="responsive"
              alt="caesarstone raven kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/raven/4.png"
              layout="responsive"
              alt="caesarstone raven kitchen top"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Typography fontWeight="bold" gutterBottom>
            Work Description:
          </Typography>
          <Typography paragraph>
            Supply &amp; install 20mm Caesarstone quartz surfaces Raven kitchen
            top
          </Typography>
        </Container>
        <hr />
        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/black-mirror/1.png"
              layout="responsive"
              alt="zenstone black mirror kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/black-mirror/2.png"
              layout="responsive"
              alt="zenstone black mirror kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/black-mirror/3.png"
              layout="responsive"
              alt="zenstone black mirror kitchen top"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Typography fontWeight="bold" gutterBottom>
            Work Description:
          </Typography>
          <Typography paragraph>
            Supply &amp; install 15mm Zenstone quartz surfaces Black Mirror
            kitchen &amp; breakfast island top.
          </Typography>
          <Typography paragraph>
            Use the termoforming technique to bend the breakfast island front
            edging.
          </Typography>
        </Container>
        <hr />
        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/1.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/2.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/3.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/4.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/5.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/pure-grey/6.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Typography fontWeight="bold" gutterBottom>
            Work Description:
          </Typography>
          <Typography paragraph>
            Supply &amp; install 15mm Zenstone quartz surfaces Pure Grey kitchen
            &amp; overhang island top for breakfast &amp; dining purposes.
          </Typography>
        </Container>

        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Heading3>More Completed Projects</Heading3>
          <Typography paragraph>
            Find us (Stone Innovations Enterprise) on Facebook and check our
            photo album
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <SectionWrapper>
          <Heading2>Commercial Projects</Heading2>

          <Grid container spacing={0.5}>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/klia2/1.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/klia2/2.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/klia2/3.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/klia2/4.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/klia2/5.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/klia2/6.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
          </Grid>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Zenstone quartz surfaces Smoothie White long
              dining &amp; round dining table top. (client supply the table
              legs)
            </Typography>
            <Typography fontWeight="bold" gutterBottom>
              Location:
            </Typography>
            <Typography paragraph>A lounge in KLIA2</Typography>
          </Container>
          <hr />
          <Grid container spacing={0.5} sx={{ mt: 5 }}>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/yogu/1.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/yogu/2.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/yogu/3.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/yogu/4.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
          </Grid>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Zenstone quartz surfaces Smoothie White
              counter, saucer and cashier top.
            </Typography>
            <Typography paragraph>
              Cut the customer brand logo on quartz stone
            </Typography>
            <Typography fontWeight="bold" gutterBottom>
              Location:
            </Typography>
            <Typography paragraph>Paradigm Mall</Typography>
          </Container>
          <hr />
          <Grid container spacing={0.5} sx={{ mt: 5 }}>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/oyster/1.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/oyster/2.png"
                layout="responsive"
                alt="quartz stone dining table top"
                width={800}
                height={600}
              />
            </Grid>
          </Grid>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Caesarstone quartz surface Oyster security
              countertop.
            </Typography>
          </Container>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Heading3>More Completed Projects</Heading3>
            <Typography paragraph>
              Find us (Stone Innovations Enterprise) on Facebook and check our
              photo album
            </Typography>
          </Container>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default Project;
