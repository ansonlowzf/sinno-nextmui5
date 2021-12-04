import { Container, Grid, Typography } from "@mui/material";
import MetaSEO from "@components/MetaSEO";
import Hero from "@components/Hero";
import { SectionWrapper } from "elements/Wrapper";
import { Heading2, Heading3 } from "elements/Heading";
import Image from "next/image";

const Project = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Project"
        pageDesc="We completed the following residential and commercial project with quartz stone, sintered stone, granite, marble and other stone."
        pagePath="/project"
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
        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/blue-pearl/1.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/blue-pearl/2.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/blue-pearl/3.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/blue-pearl/4.png"
              layout="responsive"
              alt="caesarstone pure grey kitchen top"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/blue-pearl/5.png"
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
            Supply &amp; install 15mm granite Blue Pearl kitchen top
          </Typography>
        </Container>
        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/1.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/2.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/3.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/4.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/5.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/6.png"
              layout="responsive"
              alt="Marble Flooring"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/crema-marfil/7.png"
              layout="responsive"
              alt="Sintered Coffee Table"
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
            Supply &amp; install marble Creme Marfil living hall flooring.
          </Typography>
        </Container>
        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/1.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/2.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/3.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/4.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/5.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/project/moca/coffee-table/6.jpg"
              layout="responsive"
              alt="Sintered Coffee Table"
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
            Supply &amp; install Moca Compact Stone as coffee table top.
          </Typography>
          <Typography>Supply the stainless steel table leg</Typography>
        </Container>

        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Heading3>More Completed Projects</Heading3>
          <Typography paragraph>
            Find us (Stone Innovations Enterprise) on Facebook and check our
            photo album
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <SectionWrapper>
          <Heading2>Commercial Projects</Heading2>

          <Grid container spacing={0.5}>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/cs/baskin-robin/1.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/2.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/3.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/4.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/5.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/6.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/7.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Image
                src="/project/cs/baskin-robin/8.jpg"
                layout="responsive"
                alt="caesarstone baskin robin countertop"
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
              Supply &amp; install Caesarstone Quartz Surface Ice Cream
              Countertop
            </Typography>
            <Typography fontWeight="bold" gutterBottom>
              Location:
            </Typography>
            <Typography paragraph>Baskin Robin Outlet</Typography>
          </Container>
          <hr />
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
          <hr />

          <Grid container spacing={0.5} sx={{ mt: 5 }}>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/volakas-marble/1.png"
                layout="responsive"
                alt="Sintered Coffee Table"
                width={800}
                height={600}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/project/volakas-marble/2.png"
                layout="responsive"
                alt="Sintered Coffee Table"
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
              Supply &amp; install Volakas marble reception countertop. (Not
              recommend, client accept the disadvantages of the marble to
              exchange of the beauty.)
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
