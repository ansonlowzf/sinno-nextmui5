import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import ProjectImage from "@components/ProjectImage";
import { Container, Grid, Typography } from "@mui/material";
import { Heading2, Heading3 } from "elements/Heading";
import { SectionWrapper } from "elements/Wrapper";
import ProjectDescription from "@components/ProjectDescription";

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
          <ProjectImage
            imgSrc="/project/aura15/1.png"
            imgAlt="caesarstone aura15 kitchen top"
          />
          <ProjectImage
            imgSrc="/project/aura15/2.png"
            imgAlt="caesarstone aura15 kitchen top"
          />
          <ProjectImage
            imgSrc="/project/aura15/3.png"
            imgAlt="caesarstone aura15 kitchen top"
          />
          <ProjectImage
            imgSrc="/project/aura15/4.png"
            imgAlt="caesarstone aura15 kitchen top"
          />
          <ProjectImage
            imgSrc="/project/aura15/5.png"
            imgAlt="caesarstone aura15 kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 4mm Dekton Ultra-Compact Surface Aura 15
            kitchen wall cladding
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/calacatta-nuvo/1.png"
            imgAlt="caesarstone calacatta nuvo kitchen top"
          />
          <ProjectImage
            imgSrc="/project/calacatta-nuvo/2.png"
            imgAlt="caesarstone calacatta nuvo kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 20mm Caesarstone quartz surfaces Calacatta Nuvo
            kitchen top
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/raven/1.png"
            imgAlt="caesarstone raven kitchen top"
          />
          <ProjectImage
            imgSrc="/project/raven/2.png"
            imgAlt="caesarstone raven kitchen top"
          />
          <ProjectImage
            imgSrc="/project/raven/3.png"
            imgAlt="caesarstone raven kitchen top"
          />
          <ProjectImage
            imgSrc="/project/raven/4.png"
            imgAlt="caesarstone raven kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 20mm Caesarstone quartz surfaces Raven kitchen
            top
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/black-mirror/1.png"
            imgAlt="zenstone black mirror kitchen top"
          />
          <ProjectImage
            imgSrc="/project/black-mirror/2.png"
            imgAlt="zenstone black mirror kitchen top"
          />
          <ProjectImage
            imgSrc="/project/black-mirror/3.png"
            imgAlt="zenstone black mirror kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 15mm Zenstone quartz surfaces Black Mirror
            kitchen &amp; breakfast island top.
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/pure-grey/1.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/pure-grey/2.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/pure-grey/3.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/pure-grey/4.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/pure-grey/5.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/pure-grey/6.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 15mm Zenstone quartz surfaces Pure Grey kitchen
            &amp; overhang island top for breakfast &amp; dining purposes.
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/blue-pearl/1.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/blue-pearl/2.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/blue-pearl/3.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/blue-pearl/4.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
          <ProjectImage
            imgSrc="/project/blue-pearl/5.png"
            imgAlt="caesarstone pure grey kitchen top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install 15mm granite Blue Pearl kitchen top
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/crema-marfil/1.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/2.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/3.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/4.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/5.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/6.png"
            imgAlt="Marble Flooring"
          />
          <ProjectImage
            imgSrc="/project/crema-marfil/7.png"
            imgAlt="Marble Flooring"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install marble Creme Marfil living hall flooring.
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/moca/coffee-table/1.jpg"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/moca/coffee-table/2.jpg"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/moca/coffee-table/3.jpg"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/moca/coffee-table/4.jpg"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/moca/coffee-table/5.jpg"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/moca/coffee-table/6.jpg"
            imgAlt="Sintered Coffee Table"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Moca Compact Stone as coffee table top.
          "
        />

        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Heading3>More Completed Projects</Heading3>
          <Typography paragraph>
            Find us (Stone Innovations Enterprise) on Facebook and check our
            photo album
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Heading2>Commercial Projects</Heading2>
        <Grid container spacing={0.5}>
          <ProjectImage
            imgSrc="/project/lavendar/cs/1.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/2.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/5.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/6.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/7.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/9.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/10.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/12.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/13.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
          <ProjectImage
            imgSrc="/project/lavendar/cs/15.jpg"
            imgAlt="Caesarstone Countertop Lavendar Bakery"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Caesarstone Oyster &amp; Zenstone Fabricator
            White Quartz Surface Bakery Countertop, Pantry Top, Cashier Top,
            Vanity Top &amp; Worktop
          "
        />

        <hr />

        <Grid container spacing={0.5}>
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/1.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/2.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/3.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/4.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/5.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/6.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/7.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
          <ProjectImage
            imgSrc="/project/cs/baskin-robin/8.jpg"
            imgAlt="caesarstone baskin robin countertop"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Caesarstone Raw Concrete Quartz Surface Ice
            Cream &amp; Cashier Countertop
          "
        />

        <hr />

        <Grid container spacing={0.5}>
          <ProjectImage
            imgSrc="/project/klia2/1.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/klia2/2.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/klia2/3.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/klia2/4.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/klia2/5.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/klia2/6.png"
            imgAlt="quartz stone dining table top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Zenstone Smoothie White quartz surfaces long
            dining &amp; round dining table top. (client supply the table
            legs)
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/yogu/1.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/yogu/2.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/yogu/3.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/yogu/4.png"
            imgAlt="quartz stone dining table top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Zenstone Smoothie White quartz surfaces
            counter, saucer and cashier top.
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/oyster/1.png"
            imgAlt="quartz stone dining table top"
          />
          <ProjectImage
            imgSrc="/project/oyster/2.png"
            imgAlt="quartz stone dining table top"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install Caesarstone Oyster quartz surface security
            countertop.
          "
        />

        <hr />

        <Grid container spacing={0.5} sx={{ mt: 5 }}>
          <ProjectImage
            imgSrc="/project/volakas-marble/1.png"
            imgAlt="Sintered Coffee Table"
          />
          <ProjectImage
            imgSrc="/project/volakas-marble/2.png"
            imgAlt="Sintered Coffee Table"
          />
        </Grid>
        <ProjectDescription
          description="
            Supply &amp; install marble Volakas reception countertop. (Not
            recommend, client accept the disadvantages of the marble to
            exchange of the beauty.)
          "
        />

        <Container maxWidth="sm" sx={{ my: 5 }}>
          <Heading3>More Completed Projects</Heading3>
          <Typography paragraph>
            Find us (Stone Innovations Enterprise) on Facebook and check our
            photo album
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Project;
