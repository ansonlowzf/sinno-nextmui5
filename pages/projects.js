import { Container, Grid, Typography } from "@mui/material";
import MetaSEO from "@components/MetaSEO";
import Hero from "@components/Hero";
import { SectionWrapper } from "elements/Wrapper";
import { Heading2, Heading3 } from "elements/Heading";
import Image from "next/image";
import ProjectImage from "@components/ProjectImage";

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
          <ProjectImage
            imgSrc="/project/calacatta-nuvo/1.png"
            imgAlt="caesarstone calacatta nuvo kitchen top"
          />
          <ProjectImage
            imgSrc="/project/calacatta-nuvo/2.png"
            imgAlt="caesarstone calacatta nuvo kitchen top"
          />
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
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Caesarstone Oyster &amp; Zenstone Fabricator
              White Quartz Surface Bakery Countertop, Pantry Top, Cashier Top,
              Vanity Top &amp; Worktop
            </Typography>
            <Typography fontWeight="bold" gutterBottom>
              Location:
            </Typography>
            <Typography paragraph>
              Lavendar Bakery Pavilion Bukit Jalil
            </Typography>
          </Container>
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
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Caesarstone Raw Concrete Quartz Surface Ice
              Cream &amp; Cashier Countertop
            </Typography>
            <Typography fontWeight="bold" gutterBottom>
              Location:
            </Typography>
            <Typography paragraph>Baskin Robin Outlet</Typography>
          </Container>
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
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Zenstone Smoothie White quartz surfaces long
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
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Zenstone Smoothie White quartz surfaces
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
            <ProjectImage
              imgSrc="/project/oyster/1.png"
              imgAlt="quartz stone dining table top"
            />
            <ProjectImage
              imgSrc="/project/oyster/2.png"
              imgAlt="quartz stone dining table top"
            />
          </Grid>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install Caesarstone Oyster quartz surface security
              countertop.
            </Typography>
          </Container>
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
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography fontWeight="bold" gutterBottom>
              Work Description:
            </Typography>
            <Typography paragraph>
              Supply &amp; install marble Volakas reception countertop. (Not
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
