import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import {
  FaqAccordion,
  MuiNextLink,
  SectionContact,
  SectionWarranty,
  SubNavbar,
} from "../../components";
import { faqQuartzStone } from "../../const/faq";
import { qsRoutes } from "../../const/nav-links";

const QuartzStone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Quartz Stone"
        pageDesc="We distribute, fabricate, supply &amp; install all kinds of Caesarstone &amp; Zenstone Quartz Surfaces' countertops."
        pagePath="quartz-stone"
        metaImg="/quartz-stone/4735.jpg"
      />
      <Hero
        imgSrc="/quartz-stone/4735.jpg"
        imgAlt="Caesarstone Oxidian"
        title="Quartz Stone"
        subtitle="Genuine Quartz Stone Kitchen Top"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper styles={{ mt: { xs: 15, sm: 20 } }}>
        <Container maxWidth="sm">
          <Typography
            color="error.main"
            paragraph
          >{`If you're looking for durable kitchen top for your home. This article will tell why quartz stone is your best option.`}</Typography>
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            What is Quartz Stone?
          </Typography>
          <Typography paragraph>
            {`Quartz stone, or we shall call it quartz surface, to be accurate. It's
          an engineered stone made with quartz, polymeric, crushed marble,
          ceramic, silica, glass, mirror, chip, and others depend on the design
          composition. It uses resin to bond all the material.`}
          </Typography>
          <Typography paragraph sx={{ mb: 5 }}>
            {`Quartz surface looks like stone, touch like stone and feels like actual stone, and it's manufactured to achieve advantages beyond natural stone. The benefits of quartz stone make it a virtually worry-free surface. Check the benefits section below.`}
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            What Is Quartz Stone Hardness?
          </Typography>
          <Typography paragraph>
            {`According to the US National Park Service's Mohs Hardness Scale, quartz stone's hardness is scale 7. See below:`}
          </Typography>
          <Image
            src="/mohs.jpg"
            layout="responsive"
            alt="mohs hardness scale"
            width={800}
            height={600}
          />
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            What is the Mohs Hardness Scale in short?
          </Typography>
          <Typography paragraph>
            It is a hardness test to scratch among 2 specimens to determine
            which material is harder.
          </Typography>
          <Typography paragraph>
            For more information about Mohs Hardness Scale, visit:
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://geology.com/minerals/mohs-hardness-scale.shtml"
              underline="none"
            >
              Geology.com
            </MuiNextLink>
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://en.wikipedia.org/wiki/Mohs_scale_of_mineral_hardness"
              underline="none"
            >
              Wikipedia
            </MuiNextLink>
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://www.nps.gov/articles/mohs-hardness-scale.htm"
              underline="none"
            >
              National Park Service
            </MuiNextLink>
          </Typography>
          <Typography paragraph>Quartz is scale 7 in the chart.</Typography>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Why Is Hardness Important?
          </Typography>
          <Typography paragraph>
            Quartz stone with the highest hardness in the kitchen environment
            makes sure no kitchen item, cookware and utensil can scratch it so
            easily.
          </Typography>
          <Typography paragraph sx={{ mb: 5 }}>
            This feature makes quartz stone a high{" "}
            <strong>scratch-resistant</strong> surfacing product.
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            About Genuine Quartz Stone
          </Typography>
          <Typography paragraph>
            {`Since the year 2018, Malaysia's quartz stone market started to chaos. The
        market is bloated with low-end quartz stone, touched-up quartz stone or compressed marble to
        sell as quartz stone. The seller tell the buyer that the compressed marble is
        a marble effect quartz stone, but the price is significantly lower.`}
          </Typography>
          <Typography paragraph>
            In the year 2020, the problems had start exposed to the surface.
            Owners send us these photos and ask for help to polish or repair
            them. Said their seller not picking up the phone, blocked their
            phone or disappeared.
          </Typography>
          <Typography paragraph>
            Below are the photos the owner sent to us.
          </Typography>
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/burnt-by-oil.jpg"
                alt="quartz stone with oil burnt mark"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/chemical.jpg"
                alt="discolouration by chemical"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/chip-off.jpg"
                alt="quartz stone chip off"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/low-end-materials.jpg"
                alt="quartz stone with low end materials"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/scratches.jpg"
                alt="quartz stone with scratches"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/discolouration.jpg"
                alt="quartz stone discolouration"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/stain.jpg"
                alt="quartz stone with stain"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/stain2.jpg"
                alt="quartz stone with stain"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Image
                src="/defectqs/burnt-mark.jpg"
                alt="quartz stone with burnt mark"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Hassle, Waste Of Money &amp; Time
          </Typography>
          <Typography paragraph>
            Mr/Mrs owner, imagine this situation happen to your home kitchen
            top. Would you close your eyes to let the problem getting serious?
            Or take the hassle and money to make a new set?
          </Typography>
          <Typography paragraph>
            Repair or polish could not solve the problem. The same problem will
            keep repeating because the actual problem is the quartz stone
            quality itself.
          </Typography>

          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            What Is Low-end Quartz Stone In Short?
          </Typography>
          <Typography paragraph>
            {`Supposedly the contain of the quartz should be 90% and
            above per slab. Manufacturers reduce to 60% or lower, then replace
            it with glass sand, stone powder and other unknown materials.
            Significantly reduce the cost while can maintain 60% of the quartz stone advantages for a short time.`}
          </Typography>
          <Typography paragraph>
            {`To make it look polished and shiny. Some manufacturers apply a
            sealant on top of the surface to keep the cost low. The
            manufacturers used low-end sealant and created another problem. It
            still contains more than 50% of quartz stone sand. Is it still a quartz stone?`}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            What Is Compressed Marble In Short?
          </Typography>
          <Typography paragraph>
            {`The manufacturer used recycle crushed marble, compressed and made it a slab again. They then used a stone print technology to print marble's texture, vein and pattern on the surface, which is why compressed marble is not homogenous (The texture is 1-2mm only).`}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Business Ethics
          </Typography>
          <Typography paragraph>
            {`Based on the information we gather so far. Small number of suppliers out there will tell the buyer about the low-end quartz stone and compressed marble directly. emphasize the disadvantages and the advantage (low price) to the buyer. But still, the majority of suppliers will tell the buyer those materials is quartz stone. We not sure they intend or they themselves also don't know the quality of the material they are selling. Indirectly, bring the lost and hassle to the buyer.`}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Check Method
          </Typography>
          <Typography paragraph sx={{ mb: 5 }}>
            Avoid using low-end quartz and compressed marble at all costs. We
            share a simple method to help you avoid buying low-end quartz stone
            or compressed marble. Check out this blog{" "}
            <MuiNextLink href="/blog/test-quartz-stone">
              article here.
            </MuiNextLink>
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            {`Let's Torture A Genuine Quartz Stone`}
          </Typography>
          <Typography paragraph>
            {`How capable of a genuine quartz stone? We cut, we burnt, we marked and stained it. Let's see we can damage or stain it or not.`}
          </Typography>

          <Box
            component="iframe"
            title="test quartz stone scratch resistance"
            src="https://www.youtube.com/embed/L80IMvVu8j0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Box
            component="iframe"
            title="test quartz stone stain resistance"
            src="https://www.youtube.com/embed/NPdanaeRwWc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Box
            component="iframe"
            title="test quartz stone heat resistance"
            src="https://www.youtube.com/embed/sEk7n4oj5Ps"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Typography component="p" variant="h6" paragraph sx={{ mt: 2 }}>
            Is this the quartz stone quality that meets your requirement?
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            {`The Quartz Stone Benefits`}
          </Typography>

          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Non-Porous Material
          </Typography>
          <Typography paragraph>Please have a look at orange skin.</Typography>
          <Image
            src="/quartz-stone/orange-skin.png"
            alt="orange skin"
            layout="responsive"
            width={800}
            height={600}
          />
          <Typography
            paragraph
            sx={{ mt: 2 }}
          >{`The stone surface is also full of tiny holes (porous) like orange skin, but we can't see it with our eyes. We called it porous`}</Typography>
          <Typography paragraph>
            According to our manufacturer test report (technical sheet) as
            below:
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src="/quartz-stone/test-report2.png"
              alt="orange skin"
              layout="responsive"
              width={800}
              height={600}
            />
          </Box>

          <Image
            src="/quartz-stone/test-report1.png"
            alt="orange skin"
            layout="responsive"
            width={800}
            height={600}
          />

          <Typography paragraph sx={{ mt: 2 }}>
            The water absorption rate is lesser than 0.05%. In other words, the
            tiny holes on the surface are too small for water to penetrate. Or
            we shall say it take a very long time to penetrate to be accurate.
          </Typography>
          <Typography paragraph>
            Quartz stone is 99.95% non-water absorption. This is the reason why
            quartz stone is a non-porous material.
          </Typography>
          <Typography
            paragraph
          >{`Suppose water has difficulty penetrating the surface, not to mention curry powder, turmeric powder, coffee powder, chilli sauce, curry sauce, or heavy colouring like red wine. In that case, these foods take an even longer time to go in the porous.`}</Typography>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Other Non-porous Important Feature
          </Typography>
          <Typography paragraph>
            {`Bacteria need space & moisture to grow a colony, and the surface's hole is too small for bacteria to live.`}
          </Typography>
          <Typography paragraph>
            {`Suppose bacteria can't grow on the surface, not to mention a bigger entity like mildew.`}{" "}
            Because of this, quartz stone is a{" "}
            <strong>bacteria-resistance</strong> &amp;{" "}
            <strong>mildew-resistance</strong> material thanks to its non-porous
            feature.
          </Typography>
          <Typography paragraph>
            All these non-porous material features make quartz stone{" "}
            <strong>safe for food preparation</strong>. You can knead the pizza
            dough and bread on the surface directly without worrying about
            bacteria, mildew, and other harmful germs.
          </Typography>

          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Low Maintenance
          </Typography>
          <Typography paragraph>
            Non-porous and stain resistance makes quartz stone{" "}
            <strong>no need to apply any sealant</strong> every few years to
            protect the surface. Use it as it is. No extra maintenance is
            needed.
          </Typography>
          <Typography paragraph>
            {`Unlike we use natural stone as kitchen top, it requires multiple sealants to maintain lustre, extend the lifetime of its beautiful surface and increase its stain resistance level.`}
          </Typography>

          <Typography
            component="h3"
            variant="h5"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Easy Cleaning
          </Typography>
          <Typography paragraph>
            After cooking, one of the headaches we face is the sticky oil left
            on top of the kitchen top. Non-porous make the oil has no supporting
            point to grip on the surface.
          </Typography>
          <Typography paragraph>
            Imagine a giant cloth wiping us away, but there is no supporting
            point for us to grip.
          </Typography>
          <Typography paragraph>
            The same situation applies to sticky oil.
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            How About Heat Resistance?
          </Typography>
          <Typography paragraph></Typography>
          <Typography>{`Let's refer to the technical spec sheet again.`}</Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src="/quartz-stone/heat-test.png"
              alt="technical spec sheet"
              layout="responsive"
              width={800}
              height={600}
            />
          </Box>

          <Typography
            paragraph
          >{`So many alien words (jargon), please ignore those testing method code. If you want to know more, you can search it online. `}</Typography>
          <Typography
            paragraph
          >{`Let's make it simple by focusing on the boiling water test for now. We need 100 °C to boil the water, which means this heat does not affect quartz stone.`}</Typography>
          <Typography
            paragraph
          >{`This YouTube's guy tested the heat on quartz stone from 200°C to 580°C. Could quartz stone survive?`}</Typography>
          <Typography paragraph>Watch it on YouTube:</Typography>
          <Box
            component="iframe"
            title="heat resistance test"
            src="https://www.youtube.com/embed/ZUYYjVb6hRM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Typography paragraph>
            The video shows that quartz stone can resist heat over 150°C.
            However, we DO NOT encourage you to use the quartz stone top without
            a trivet to put hot cookware.
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Repairable Up To Certain Extent
          </Typography>
          <Typography paragraph>
            We rarely repair a quartz stone top, and since 2013, we did repair a
            quartz stone top for a site, and it is the only repair record we
            have had.
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Wide Range Of Colour
          </Typography>
          <Typography paragraph>
            We could provide 91 colour and shades options
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Colour Consistency
          </Typography>
          <Typography paragraph>
            Quartz stone is excellent for large scale cladding, and the
            manufacturer can produce a uniform appearance of quartz stone.
          </Typography>
          <Typography paragraph>
            Said you want the whole corridor to have the same quartz stone
            colour, and quartz stone can satisfy your need.
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Quartz Stone Applications?
          </Typography>
          <Typography paragraph>
            {`Quartz stone's advantages make it a perfect indoor kitchen top solution.`}
          </Typography>
          <Typography paragraph>Quartz stone is suitable for:</Typography>
          <Typography component="ol" paragraph>
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

      <SectionWarranty />

      <SectionWrapper>
        <SectionContact stone="Quartz Stone" />
      </SectionWrapper>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Heading3>Frequently Ask Question</Heading3>
        <SectionWrapper>
          <Container maxWidth="sm">
            {faqQuartzStone.map(({ question, answer, id }) => (
              <FaqAccordion key={id} question={question} answer={answer} />
            ))}
          </Container>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default QuartzStone;
