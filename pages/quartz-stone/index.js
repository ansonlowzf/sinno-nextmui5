import Hero from "@components/Hero";
import ImageSwiper from "@components/ImageSwiper";
import MetaSEO from "@components/MetaSEO";
import { ArticleHeading3 } from "@elements/Heading";
import { Heading3, ArticleHeading2 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Box, Container, Typography } from "@mui/material";
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

const imagesLinks = [
  {
    imgSrc: "/defectqs/burnt-by-oil.jpg",
    imgAlt: "quartz stone with oil burnt mark",
  },
  { imgSrc: "/defectqs/chemical.jpg", imgAlt: "discolouration by chemical" },
  { imgSrc: "/defectqs/chip-off.jpg", imgAlt: "quartz stone chip off" },
  {
    imgSrc: "/defectqs/low-end-materials.jpg",
    imgAlt: "quartz stone with low end materials",
  },
  { imgSrc: "/defectqs/scratches.jpg", imgAlt: "quartz stone with scratches" },
  {
    imgSrc: "/defectqs/discolouration.jpg",
    imgAlt: "quartz stone discolouration",
  },
  { imgSrc: "/defectqs/stain.jpg", imgAlt: "quartz stone with stain" },
  { imgSrc: "/defectqs/stain2.jpg", imgAlt: "quartz stone with stain" },
  {
    imgSrc: "/defectqs/burnt-mark.jpg",
    imgAlt: "quartz stone with burnt mark",
  },
];

const QuartzStone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Quartz Stone Countertop Malaysia"
        pageDesc="All You Need To Know About Custom Made (Supply &amp; Install) Quartz Stone Countertop."
        pagePath="/quartz-stone"
        metaImg="/quartz-stone/4735.jpg"
      />
      <Hero
        imgSrc="/quartz-stone/4735.jpg"
        imgAlt="Caesarstone Oxidian"
        title="Quartz Stone Countertop Malaysia"
        subtitle="All You Need To Know About Custom Made (Supply &amp; Install) Quartz Stone Countertop."
        noMB
      />
      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <Container maxWidth="sm">
          <Typography paragraph>
            If you already know about the quartz stone and are looking for our
            available colour, vein and pattern options, please click the two
            brands above.
          </Typography>
          <Typography component="ol" paragraph>
            <li>
              <strong>Caesarstone</strong> is the international top 1 quartz
              stone brand.
            </li>
            <li>
              <strong>Zenstone</strong> is a Malaysian brand OEM China genuine
              quartz stone.
            </li>
          </Typography>
          <Typography paragraph>
            If you are unsure whether quartz stone is suitable for countertops
            or looking for more in-depth information.
          </Typography>
          <Typography paragraph>
            This article can help you understand the genuine quartz stone and
            its advantages for countertops.
          </Typography>

          <ArticleHeading2>First, What is Quartz Stone?</ArticleHeading2>
          <Typography
            paragraph
          >{`To be accurate, we shall call it quartz surface. In Malaysia, we often use the term "quartz stone". We'll use the same word for this article.`}</Typography>
          <Typography paragraph>
            Depending on the design composition, quartz stone is an engineered
            stone made with quartz, polymeric, crushed marble, ceramic, silica,
            glass, mirror chip, and many others materials. Then use resin to
            bond all materials together and make it a slab form.
          </Typography>
          <Typography
            paragraph
          >{`Quartz stone looks, touch and feels like a stone, and it's manufactured to achieve advantages beyond natural stone.`}</Typography>
          <ArticleHeading2>What Is A Quartz Stone Countertop?</ArticleHeading2>
          <Typography
            paragraph
          >{`The word "countertop" confuses many people by just reading it. People often think it's a top for the shop and office's counter. `}</Typography>
          <Typography paragraph>
            In fact, all these words countertop, worktop, benchtop, tabletop,
            and kitchen top is referred to the same thing as below,
          </Typography>
          <Image
            src="/quartz-stone/countertop.jpg"
            layout="responsive"
            alt="Quartz Stone Countertop"
            width={800}
            height={450}
          />
          <Typography paragraph sx={{ mt: 2 }}>
            <MuiNextLink
              href="https://en.wikipedia.org/wiki/Countertop"
              target="_blank"
              rel="noopener noreferrer"
            >
              The countertop
            </MuiNextLink>
            {` `}is a horizontal surface built for work in the kitchen or a flat
            surface for food preparation.
          </Typography>

          <Typography
            paragraph
          >{`A gentle reminder, we'll use the term "countertop" across the article.`}</Typography>
          <ArticleHeading2>
            What Is The World Best Countertop be like?
          </ArticleHeading2>
          <Typography component="ol" paragraph>
            <li>Indestructible</li>
            <li>Unbreakable</li>
            <li>Forever remain the same colour</li>
            <li>No fair wear and tear</li>
            <li>Invincible</li>
            <li>Immortal</li>
            <li>As cheap as possible</li>
          </Typography>
          <Typography
            paragraph
          >{`Ops~ We go too far. Let's back to reality.`}</Typography>
          <Typography
            paragraph
          >{`We humans can't manufacture and fabricate such stone material, especially with current technology.`}</Typography>
          <Typography
            paragraph
          >{`If we could invent it, will be for the planet Mars migration purposes first.`}</Typography>
          <Typography paragraph>{`Enough cold jokes`}</Typography>
          <ArticleHeading2>
            So, Is Quartz Stone The Best Option?
          </ArticleHeading2>
          <Typography paragraph>
            Our answer is yes, quartz stone is the best stone material for
            countertop application by far.
          </Typography>
          <Typography
            paragraph
          >{`How about the outdoor application like BBQ pits and an open roof wet kitchen?`}</Typography>
          <Typography paragraph>{`We'll discuss it later.`}</Typography>
          <ArticleHeading2>
            The Most Important Feature Of Quartz Stone
          </ArticleHeading2>
          <ArticleHeading3>Non-Porous Material</ArticleHeading3>
          <Typography paragraph>Please have a look at orange skin.</Typography>
          <Image
            src="/quartz-stone/orange-skin.png"
            alt="orange skin"
            layout="responsive"
            width={800}
            height={600}
          />
          <Typography paragraph sx={{ mt: 2 }}>
            See the tiny hole?
          </Typography>
          <Typography
            paragraph
          >{`The stone surface also has tiny holes like this. We called this cannot be seen by human eyes' hole - porous.`}</Typography>
          <ArticleHeading3>
            How To Determine Quartz Stone Is A Non-porous Material?
          </ArticleHeading3>
          <Typography paragraph>
            {`According to our manufacturers' test report (technical sheet),`}
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
            The result is less than 0.05% and less than 0.049%. What does it
            mean?
          </Typography>
          <Typography paragraph>
            The lab people put water on the quartz stone and checked the water
            penetration rate.
          </Typography>
          <Typography paragraph>
            In other words, quartz stone is 99.95% water cannot penetrate the
            surface.
          </Typography>

          <Typography paragraph>
            If water has difficulty, go in the surface, not to mention curry
            powder, turmeric powder, coffee powder, chilli sauce, curry sauce,
            red wine, etc.
          </Typography>
          <Typography paragraph>
            {`What if we leave the foods and drinks on the quartz stone's surface
            for a long time, said 30 days?`}
          </Typography>
          <Typography paragraph>
            {`Yep, there is a 0.05% rate and that causes a permanent stain.`}
          </Typography>
          <Typography paragraph>
            {`How about leaving turmeric for 7 days? We can still remove the turmeric's stain based on our in-house test.`}
          </Typography>
          <Typography paragraph>{`Let's watch a video,`}</Typography>
          <Typography
            paragraph
          >{`We use a highlight pen and a permanent marker to simulate the stain. Frankly speaking, the permanent marker (the stain's boss like turmeric) is hard to clean. It takes time, but we clean it with the CIF cleaning foam.`}</Typography>
          <Box
            component="iframe"
            title="test quartz stone stain resistance"
            src="https://www.youtube.com/embed/NPdanaeRwWc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Typography paragraph>
            We recommend not leaving heavy colouring foods or drinks on the
            surface for more than 48 hours.
          </Typography>
          <Typography paragraph>
            The best practice is to clean the surface after cooking to maintain
            the beauty of the surface for a longer time.
          </Typography>
          <ArticleHeading3>More Non-porous Important Features</ArticleHeading3>
          <Typography paragraph>
            Non-porous is an essential feature of quartz stone. It solves many
            hygiene issues.
          </Typography>
          <Typography paragraph>
            {`Bacteria need space & moisture to grow a colony. Water is hard to penetrate the quartz stone's porous, not to mention bacteria. There is no room for bacteria and mildew to grow`}{" "}
            - <strong>bacteria resistance</strong> &amp; mildew resistance
            <strong>mildew resistance</strong>.
          </Typography>

          <ArticleHeading3>Safe For Food Preparation</ArticleHeading3>
          <Typography
            paragraph
          >{`You can knead the pizza dough and bread on the surface directly without worrying about bacteria, mildew, and other harmful germs.`}</Typography>
          <Typography
            paragraph
          >{`The dough and powder also can't go inside the porous.`}</Typography>
          <Typography paragraph>
            Quartz stone is{" "}
            <MuiNextLink
              href="https://www.nsf.org/knowledge-library/nsf-ansi-51-and-nsf-ansi-61-product-certifications-for-food-and-drinking-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              NSF 51 certified
            </MuiNextLink>{" "}
            and well suited for food preparation.
          </Typography>

          <ArticleHeading3>Not Damage By Acidic Foods</ArticleHeading3>
          <Typography paragraph>
            Acidic foods such as lemon juice or lime juice do not affect or dim
            the surface - <strong>acidic resistance</strong>.
          </Typography>
          {/* Acid Test Video */}
          <ArticleHeading3>Easy Cleaning</ArticleHeading3>
          <Typography
            paragraph
          >{`The most annoying thing in the kitchen is the sticky oil. It's hard to clean it. The home chef often needs to wipe the entire surface a few times to clean the sticky oil.`}</Typography>
          <Typography paragraph>
            The quartz stone non-porous feature makes the stubborn oil have no
            supporting point to grip. Hence, the sticky oil can be cleaned with
            ease.
          </Typography>

          <ArticleHeading3>Low Maintenance</ArticleHeading3>
          <Typography paragraph>
            You will not have feelings about maintenance issues if you have not
            used marble before.
          </Typography>
          <Typography paragraph>
            If you do, you might be annoyed by needing to apply multiple
            sealants to maintain lustre, extend the lifetime of its beautiful
            surface and increase its stain resistance level every few years.
          </Typography>
          <Typography paragraph>How about quartz stone maintenance?</Typography>
          <Typography
            paragraph
          >{`Quartz stone is polished surface as it is, no need to apply sealant and extra maintenance.`}</Typography>
          <ArticleHeading2>Does Quartz Stone Resist Heat?</ArticleHeading2>
          <Typography
            paragraph
          >{`Let's refer to the technical spec sheet again.`}</Typography>
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
          >{`So many alien words (jargon code),`}</Typography>
          <Typography
            paragraph
          >{`Let's make it simple by focusing on the boiling water test only. The test report indicates "no effect". What does it mean?`}</Typography>
          <Typography
            paragraph
          >{`We need 100°C heat to boil the water. It means 100°C caused "no effect" on the quartz stone.`}</Typography>
          <Typography
            paragraph
          >{`Let's see one of our video tests,`}</Typography>
          <Box
            component="iframe"
            title="test quartz stone heat resistance"
            src="https://www.youtube.com/embed/sEk7n4oj5Ps"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <ArticleHeading3>How About Extreme Heat?</ArticleHeading3>
          <Typography
            paragraph
          >{`We don't have the equipment to get the extreme heat. But, we found a stonemason from YouTube who tested the heat on quartz stone from 200°C to 600°C.`}</Typography>
          <Typography paragraph>{`Let's watch it,`}</Typography>
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
            What surprised us is he tested on one of our popular colours -
            Zenstone Quartz Surface White Mirror.
          </Typography>
          <Typography paragraph>
            The video shows that quartz stone can resist heat over 150°C.
            However, we DO NOT encourage putting hot cookware on the quartz
            stone countertop top without a trivet.
          </Typography>
          <ArticleHeading2>{`Torture The Quartz Stone`}</ArticleHeading2>
          <Typography paragraph>{`Let's watch how we torture it,`}</Typography>
          <Box
            component="iframe"
            title="test quartz stone scratch resistance"
            src="https://www.youtube.com/embed/L80IMvVu8j0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ position: `relative`, width: `100%`, height: 300, mb: 2 }}
          />
          <Typography
            paragraph
          >{`Why can't the heavy cutter scratch the quartz stone?`}</Typography>
          <Typography
            paragraph
          >{`According to the US National Park Service's Mohs Hardness Scale, quartz's hardness is scale 7.`}</Typography>
          <Box sx={{ mb: 2 }}>
            <Image
              src="/mohs.jpg"
              layout="responsive"
              alt="mohs hardness scale"
              width={800}
              height={600}
            />
          </Box>
          <Typography
            paragraph
          >{`Knife with lower hardness scale 5.5 can't scratch higher hardness scale 7 material - quartz stone.`}</Typography>
          <ArticleHeading3>
            What is the Mohs Hardness Scale in short?
          </ArticleHeading3>
          <Typography paragraph>
            It is a hardness test to scratch among 2 specimens to determine
            which material is harder.
          </Typography>
          <Typography paragraph>
            The harder the material, the higher it can resist scratch.
          </Typography>
          <Typography paragraph>
            For more information about Mohs Hardness Scale, visit:
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://geology.com/minerals/mohs-hardness-scale.shtml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geology.com
            </MuiNextLink>
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://en.wikipedia.org/wiki/Mohs_scale_of_mineral_hardness"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </MuiNextLink>
          </Typography>
          <Typography paragraph>
            <MuiNextLink
              href="https://www.nps.gov/articles/mohs-hardness-scale.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Park Service
            </MuiNextLink>
          </Typography>
          <ArticleHeading2>
            Why is Quartz Stone Hardness Important?
          </ArticleHeading2>
          <Typography paragraph>
            Quartz stone is the highest hardness in the kitchen environment
            makes sure no kitchen item, cookware or utensil can scratch it so
            easily. Hence, it could maintain its appearance for a long time.
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
            This hardness makes quartz stone a high{" "}
            <strong>scratch-resistant</strong> surfacing product in the kitchen.
          </Typography>
          <ArticleHeading2>
            Are You Satisfied With Genuine Quartz Stone Quality?
          </ArticleHeading2>
          <Typography component="ol" paragraph>
            <li>Non-Porous Material</li>
            <li>Stain resistance</li>
            <li>Scratch resistance</li>
            <li>Bacteria resistance</li>
            <li>Mildew resistance</li>
            <li>Heat resistance</li>
            <li>Acidic resistance</li>
            <li>Low maintenance</li>
            <li>Easy to clean</li>
            <li>Safe for food preparation</li>
          </Typography>

          <SectionWrapper>
            <SectionContact stone="Quartz Stone" href="/contact/quartz-stone" />
          </SectionWrapper>

          <Typography paragraph></Typography>

          <ArticleHeading2>
            We Are Not Done Yet. Genuine Quartz Stone Has More Benefits
          </ArticleHeading2>
          <ArticleHeading3>Non-Flammable Material</ArticleHeading3>
          <Typography
            paragraph
          >{`Let's see the test report again.`}</Typography>
          <Box sx={{ mb: 2 }}>
            <Image
              src="/quartz-stone/fire-test.jpg"
              layout="responsive"
              alt="mohs hardness scale"
              width={800}
              height={600}
            />
          </Box>
          <Typography
            paragraph
          >{`Well, it's complicated to explain all these fire test results,`}</Typography>
          <Typography paragraph>
            In short, this fire test determines that quartz stone is not easy to
            flame, fire spread, or smoke.
          </Typography>
          <Typography
            paragraph
          >{`Quartz stone is made of natural quartz and stones. It is like we can't fire up the stone, right?`}</Typography>
          <Typography paragraph>
            If you want to know the fire test index and result details, you
            could read the fire test on{" "}
            <MuiNextLink href="https://en.wikipedia.org/wiki/Fire_test">
              Wikipedia
            </MuiNextLink>
            .
          </Typography>

          <ArticleHeading3>Repairable Up To Certain Extent</ArticleHeading3>
          <Typography paragraph>
            Unlike engineered stone using printing technology which has 1-2mm
            texture on the surface, quartz stone is homogenous.
          </Typography>
          <Typography
            paragraph
          >{`Minor scratches can still be polished. Please note that we can't polish 100% back to its original status. Similar to granite and marble, the polish spot is noticeable.`}</Typography>
          <Typography
            paragraph
          >{`Since we started selling quartz stone in 2013 (from day one), the good news is that we haven't needed to repair or polish a quartz stone top.`}</Typography>

          <ArticleHeading3>Colour Consistency</ArticleHeading3>
          <Typography paragraph>
            Quartz stone is excellent for large scale cladding, and the
            manufacturer can produce a uniform appearance of quartz stone.
          </Typography>
          <Typography paragraph>
            Said you want the whole corridor wall to have the same colour, veins
            and pattern. Quartz stone can satisfy your needs.
          </Typography>

          <ArticleHeading3>Wide Range Of Colour</ArticleHeading3>
          <Typography paragraph>
            With 35 Caesarstone colours and 55 Zenstone colours, We could
            provide more than 90 colour and shade options. Terrazzo, granite,
            jade, pure and marble series to match your kitchen design.
          </Typography>

          <ArticleHeading3>Chemical Resistance</ArticleHeading3>
          <Typography paragraph>
            Either a natural stone or engineered stone is not afraid of the
            household dishwasher. If a dishwasher is so powerful that it damages
            the stone, it definitely hurts your hand first.
          </Typography>
          <Typography
            paragraph
          >{`To check whether the quartz stone is chemical resistant, use lacquer thinner; It's corrosive. You could buy a lacquer thinner from a hardware shop pour it on the quartz stone.`}</Typography>
          <Typography paragraph>
            If you see the surface become matt. It is not chemical resistance.
          </Typography>
          {/* image of matt quartz stone */}
          <Typography paragraph>
            In fact, lacquer thinner does not affect genuine quartz stone at
            all. We often use it to clean the remaining sticker glue on the
            surface.
          </Typography>

          <ArticleHeading3>Crack and Chip-off Resistance</ArticleHeading3>
          <Typography paragraph>
            One of the key ingredients in quartz stone is{" "}
            <MuiNextLink href="https://en.wikipedia.org/wiki/Resin">
              resin
            </MuiNextLink>{" "}
            - a highly viscous plant substance used to bond quartz stone
            ingredients.{" "}
          </Typography>
          <Typography paragraph>
            It makes quartz stone a hard material while maintaining some
            flexibility.
          </Typography>
          <Typography paragraph>
            This flexibility is needed to fight against thermal expansion and
            avoid cracking.
          </Typography>
          <Typography paragraph>
            And also, because of the resin, quartz stone rarely chip-off.
          </Typography>
          <Typography paragraph>
            However, the resin also brings a disadvantage to quartz stone.
          </Typography>

          <ArticleHeading2>The Quartz Stone Disadvantage</ArticleHeading2>
          <Typography paragraph>
            Every type of stone has its advantages and disadvantages.
          </Typography>
          <Typography paragraph>
            Quartz stone is not suitable for outdoor usage especially exposed to
            direct sunlight. The UV ray of the sun affect the resin and slowly
            cause discolouration.
          </Typography>
          <Typography
            paragraph
          >{`Based on our test, we installed a quartz stone countertop on one of our staff's apartments next to the window without a blind in the year 2016. The countertop exposes to evening sunlight.`}</Typography>
          <Typography paragraph>
            {`We started to notice the discolouration in the third
            year (2019) and remain the same discolouration until 2022.`}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Image
              src="/quartz-stone/uv-light.jpg"
              layout="responsive"
              alt="mohs hardness scale"
              width={800}
              height={600}
            />
          </Box>

          <ArticleHeading2>Conclusion</ArticleHeading2>
          <Typography paragraph>
            The benefits of quartz stone make it a virtually worry-free surface,
            especially for indoor countertop applications.
          </Typography>
          <Typography paragraph>
            No need to pay extra attention to take care of and maintain it.
          </Typography>

          <ArticleHeading2>Who Are We?</ArticleHeading2>
          <Typography paragraph>
            Stone Innovations Enterprise is a stonemason company specialising in
            quartz stone countertops since 2013.
          </Typography>

          <ArticleHeading2>Quartz Stone Applications</ArticleHeading2>
          <Typography paragraph>
            {`Although, we only talk about countertop in the article. With Quartz
            stone advantages, it's also well suited to be custom
            made as:-`}
          </Typography>
          <Typography component="ol" paragraph>
            <li>Vanity Top</li>
            <li>Kitchen Backsplash</li>
            <li>Kitchen Shelves</li>
            <li>Pantry Top</li>
            <li>TV Cabinet Wall Cladding</li>
            <li>TV Cabinet Top</li>
            <li>Bar Countertop</li>
            <li>Breakfast Countertop</li>
            <li>Dining Table Top</li>
            <li>Coffee Table Top</li>
            <li>Side Table Top</li>
            <li>Cashier Countertop</li>
            <li>Sauces Countertop</li>
            <li>Wall Cladding</li>
            <li>Flooring</li>
            <li>Other Top &amp; Cladding Purposes</li>
          </Typography>
        </Container>
      </SectionWrapper>

      <SectionWarranty />

      <SectionWrapper>
        <SectionContact stone="Quartz Stone" href="/contact/quartz-stone" />
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
