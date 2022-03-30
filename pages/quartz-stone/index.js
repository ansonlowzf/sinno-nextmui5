import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { ArticleHeading2, ArticleHeading3, Heading3 } from "@elements/Heading";
import { SectionWrapper } from "@elements/Wrapper";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import {
  FaqAccordion,
  MuiNextLink,
  SectionContact,
  SectionWarranty,
} from "../../components";
import { faqQuartzStone } from "../../const/faq";

const QuartzStone = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Quartz Stone Countertop Malaysia"
        pageDesc="All You Need To Know About Custom Made, Supply &amp; Install Quartz Stone Countertop."
        pagePath="/quartz-stone"
        metaImg="/quartz-stone/hero.jpg"
      />
      <Hero
        imgSrc="/quartz-stone/hero.jpg"
        imgAlt="quartz stone countertops"
        title="Quartz Stone Countertop Malaysia"
        subtitle="All You Need To Know About Custom Made, Supply &amp; Install Quartz Stone Countertop."
      />

      <Container maxWidth="sm">
        <Typography paragraph>
          If you already know about the quartz stone and are looking for our
          available colour, vein and pattern options, please have a look at the
          two brands we distribute in Malaysia by clicking the site menu above.
        </Typography>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
          <li>
            <strong>Caesarstone</strong> is the international top 1 quartz stone
            brand.
          </li>
          <li>
            <strong>Zenstone</strong> is a Malaysian brand OEM China genuine
            quartz stone.
          </li>
        </Typography>
        <Typography
          paragraph
        >{`This is an in-depth aritlce about quartz stone, quartz stone countertops, and the quartz stone market."`}</Typography>
        <ArticleHeading2>What is Quartz Stone?</ArticleHeading2>
        <Typography
          paragraph
        >{`Depending on the design composition, quartz stone is an engineered stone made with quartz, polymeric, crushed marble, ceramic, silica, glass, mirror chip, and many others materials. Then use resin to bond all materials together and make it a slab form.`}</Typography>
        <Typography paragraph>
          It must contain enough quartz sand (80 - 93%) to gain the benefits
          discussed below.
        </Typography>
        <Typography
          paragraph
        >{`Quartz stone looks, touch and feels like a stone, and it's manufactured to achieve advantages beyond natural stone.`}</Typography>
        <ArticleHeading2>What Is A Quartz Stone Countertop?</ArticleHeading2>
        <Typography
          paragraph
        >{`The word "countertop" confuses many people by just reading it. People often think it's a top for the shop and office's counter. `}</Typography>
        <Typography paragraph>
          In fact, all these words countertop, worktop, benchtop, tabletop, and
          kitchen top refer to the same thing as below,
        </Typography>
        <Image
          src="/quartz-stone/countertop.jpg"
          layout="responsive"
          alt="type of quartz stone countertop"
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
        <ArticleHeading2>
          What Is The World Best Countertop Be Like?
        </ArticleHeading2>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
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
        >{`Ops~ We go too far. Let's go back to reality.`}</Typography>
        <Typography
          paragraph
        >{`We humans can't manufacture and fabricate such stone material, especially with current technology.`}</Typography>
        <Typography paragraph>
          If we could invent it, it would be for the planet Mars migration
          purposes first.
        </Typography>
        <Typography paragraph>{`Enough cold jokes`}</Typography>
        <ArticleHeading2>So, Is Quartz Stone The Best Option?</ArticleHeading2>
        <Typography paragraph>
          Our answer is yes, quartz stone is the best stone material for indoor
          countertop application.
        </Typography>
        <Typography
          paragraph
        >{`But it's unsuitable for an outdoor countertop like BBQ pits and an open roof wet kitchen.`}</Typography>
        <Typography paragraph>{`Why? We'll discuss it later.`}</Typography>
        <ArticleHeading2>
          The Most Important Feature Of Quartz Stone
        </ArticleHeading2>
        <ArticleHeading3>Non-Porous Material</ArticleHeading3>
        <Typography paragraph>
          Please have a look at the orange skin.
        </Typography>
        <Image
          src="/quartz-stone/orange-skin.png"
          alt="orange with close up view"
          layout="responsive"
          width={800}
          height={600}
        />
        <Typography paragraph sx={{ mt: 2 }}>
          See the tiny hole?
        </Typography>
        <Typography
          paragraph
        >{`The stone surface has similar tiny holes. We called this "cannot be seen by human eyes' hole" - porous`}</Typography>
        <ArticleHeading3>
          How To Determine Quartz Stone Is A Non-porous Material?
        </ArticleHeading3>
        <Typography paragraph>
          {`According to our manufacturers' test report (technical sheet),`}
        </Typography>
        <Box sx={{ my: 2 }}>
          <Image
            src="/quartz-stone/test-report2.png"
            alt="caesarstone test report"
            layout="responsive"
            width={800}
            height={600}
          />
        </Box>
        <Image
          src="/quartz-stone/test-report1.png"
          alt="quartz stone test report in chinese"
          layout="responsive"
          width={800}
          height={600}
        />
        <Typography paragraph sx={{ mt: 2 }}>
          The result is less than 0.05%. What does it mean?
        </Typography>
        <Typography paragraph>
          In other words, 99.95% of water cannot penetrate the surface.
        </Typography>
        <Typography paragraph>
          This feature determines quartz stone as a non-porous material.
        </Typography>
        <ArticleHeading2>
          Non-Porous Make Quartz Stone Stain Resistance
        </ArticleHeading2>
        <Typography
          paragraph
        >{`If water has difficulty, go into the surface, not to mention curry powder, curry sauce, turmeric powder, coffee powder, chilli sauce, red wine, etc.`}</Typography>
        <Typography paragraph>
          {`What if we leave the foods and drinks on the quartz stone's surface
            for a long time, said 30 days?`}
        </Typography>
        <Typography paragraph>
          {`Yep, there is a 0.05% rate and that causes a permanent stain.`}
        </Typography>
        <Typography paragraph>
          {`How about leaving turmeric for 7 days? We can still remove the stain based on our in-house test.`}
        </Typography>
        <Typography paragraph>{`Let's watch a video,`}</Typography>
        <Typography
          paragraph
        >{`We use a highlight pen and a permanent marker to simulate the stain. The permanent marker (the stain's boss like turmeric) is hard to clean. It takes time, but we still can clean it with the CIF cleaning foam.`}</Typography>
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
        <ArticleHeading2>More Non-porous Important Features</ArticleHeading2>
        <Typography paragraph>
          Non-porous is an essential feature of quartz stone. It solves many
          hygiene issues.
        </Typography>
        <ArticleHeading3>{`Bacteria & Mildew Resistance`}</ArticleHeading3>
        <Typography paragraph>
          {`Bacteria need space & moisture to grow a colony. Non-porous leave no room for bacteria and mildew to grow.`}
        </Typography>
        <ArticleHeading3>Safe For Food Preparation</ArticleHeading3>
        <Typography
          paragraph
        >{`Non-porous also leave no space for food residue.`}</Typography>
        <Typography
          paragraph
        >{`Perfect for kneading the pizza dough and bread on the surface directly without worrying about bacteria, mildew, food residue and other harmful germs.`}</Typography>
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
        <ArticleHeading2>Resist Acidic Foods</ArticleHeading2>
        <Typography paragraph>
          Acidic foods such as lemon juice or lime juice do not affect or dim
          the surface - <strong>acidic resistance</strong>.
        </Typography>
        <Typography paragraph>(Video Coming Soon!)</Typography>
        <ArticleHeading2>Easy Cleaning</ArticleHeading2>
        <Typography
          paragraph
        >{`Non-porous leave no supporting point for oil to stick.`}</Typography>
        <Typography paragraph>
          This makes quartz stone easy to clean. Say bye-bye to sticky oil.
        </Typography>
        <ArticleHeading2>Low Maintenance</ArticleHeading2>
        <Typography paragraph>
          Unlike natural stone like marble which needs to apply sealants to
          maintain lustre, extend the lifetime of its beautiful surface and
          increase its stain resistance level every few years.
        </Typography>
        <Typography paragraph>
          Quartz stone does not require much maintenance because non-porous
          eliminate most of the hassle.
        </Typography>
        <ArticleHeading2>Does Quartz Stone Resist Heat?</ArticleHeading2>
        <Typography
          paragraph
        >{`Let's refer to the technical spec sheet again.`}</Typography>
        <Box sx={{ my: 2 }}>
          <Image
            src="/quartz-stone/heat-test.png"
            alt="quartz stone technical spec sheet"
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
        >{`Let's make it simple by focusing on the boiling water test. The test report indicates "no effect". What does it mean?`}</Typography>
        <Typography
          paragraph
        >{`We need 100°C heat to boil the water. It means 100°C caused "no effect" on quartz stone.`}</Typography>
        <Typography
          paragraph
        >{`Let's watch one of the test videos,`}</Typography>
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
          The video shows that quartz stone can resist heat over 150°C. However,
          we DO NOT encourage putting hot cookware on the quartz stone
          countertop top without a trivet.
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
            alt="mohs hardness scale chart"
            width={800}
            height={600}
          />
        </Box>
        <Typography
          paragraph
        >{`A knife with a lower hardness scale of 5.5 can't scratch a higher hardness scale 7 material - quartz stone.`}</Typography>
        <ArticleHeading3>
          What is the Mohs Hardness Scale, in short?
        </ArticleHeading3>
        <Typography paragraph>
          It is a hardness test to scratch among 2 specimens to determine which
          material is harder.
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
          Quartz stone is the highest hardness in the kitchen environment,
          making sure no kitchen item, cookware or utensil can scratch it so
          easily. Hence, it could maintain its appearance for a long time.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          This hardness makes quartz stone a high{" "}
          <strong>scratch-resistant</strong> surfacing product in the kitchen.
        </Typography>
        <ArticleHeading2>
          Are You Satisfied With Genuine Quartz Stone Quality?
        </ArticleHeading2>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
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
        <ArticleHeading2>
          We Are Not Done Yet. Genuine Quartz Stone Has More Benefits
        </ArticleHeading2>
        <ArticleHeading3>Non-Flammable Material</ArticleHeading3>
        <Typography paragraph>{`Let's see the test report again.`}</Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/fire-test.jpg"
            layout="responsive"
            alt="quartz stone technical spec sheet"
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
          If you want to know the fire test index and result details, you could
          read the fire test on{" "}
          <MuiNextLink href="https://en.wikipedia.org/wiki/Fire_test">
            Wikipedia
          </MuiNextLink>
          .
        </Typography>
        <ArticleHeading3>Repairable Up To A Certain Extent</ArticleHeading3>
        <Typography paragraph>
          Unlike engineered stone using printing technology which has a 1-2mm
          texture on the surface, quartz stone is homogenous.
        </Typography>
        <Typography
          paragraph
        >{`Minor scratches can still be polished. Please note that we can't polish 100% back to its original status. Similar to granite and marble, the polish spot is noticeable.`}</Typography>
        <Typography
          paragraph
        >{`We noticed the discolouration in the third year (2019), and it remained the same discolouration until 2022.`}</Typography>
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
          With 42 Caesarstone quartz surfaces, 49 Zenstone quartz surfaces, and
          43 Silestone quartz surfaces, We could provide more than 134 colour
          and shade options, mimicking terrazzo, granite, jade, pure and marble
          to match your kitchen design.{" "}
        </Typography>

        <ArticleHeading3>Chemical Resistance</ArticleHeading3>
        <Typography
          paragraph
        >{`Either a natural stone or engineered stone is not afraid of the household dishwasher. If a dishwasher is so powerful that it damages the stone, it'll hurt your hand first.`}</Typography>
        <Typography
          paragraph
        >{`To check whether the quartz stone is chemical resistant, use lacquer thinner; It's corrosive. You could buy a lacquer thinner from a hardware shop pour it on the quartz stone.`}</Typography>
        <Typography paragraph>
          If you see the surface become matt. It is not chemical resistance.
        </Typography>
        {/* image of matt quartz stone */}
        <Typography paragraph>
          In fact, lacquer thinner does not affect genuine quartz stone at all.
          We often use it to clean the remaining sticker glue on the surface.
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
            alt="UV light dim quartz stone countertop"
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

        <ArticleHeading2>About Us</ArticleHeading2>
        <Typography
          paragraph
        >{`Stone Innovations Enterprise is a stonemason company specialising in the supply & installation of natural & engineered stones.`}</Typography>
        <Typography
          paragraph
        >{`We have been one of Malaysia's pioneer quartz stone suppliers, fabricators, and distributors since 2013.`}</Typography>
        <Typography paragraph>
          {`Quartz stone is one of our essential products. We custom make, supply
          & install genuine quartz stone for the following applications:-`}
        </Typography>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
          <li>Kitchen Top</li>
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
          <li>{`Other surface tops, cladding & decoration purposes`}</li>
        </Typography>
        <ArticleHeading2>Quartz Stone Market in Chaos</ArticleHeading2>
        <Typography paragraph>
          Malaysia quartz stone market is bloated with many different qualities
          and grades.
        </Typography>
        <Typography paragraph>
          Many house owners caught up the trouble,
        </Typography>
        <Typography paragraph>
          House owners sent the following photo to us,
        </Typography>
        {/* TODO: add photo swiper got probelm*/}
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/burnt-by-oil.jpg"
            layout="responsive"
            alt="quartz stone with oil burnt mark"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/chemical.jpg"
            layout="responsive"
            alt="discolouration by chemical"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/chip-off.jpg"
            layout="responsive"
            alt="quartz stone chip off"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/low-end-materials.jpg"
            layout="responsive"
            alt="quartz stone with low end materials"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/scratches.jpg"
            layout="responsive"
            alt="quartz stone with scratches"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/discolouration.jpg"
            layout="responsive"
            alt="quartz stone discolouration"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/stain.jpg"
            layout="responsive"
            alt="quartz stone with stain"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/stain2.jpg"
            layout="responsive"
            alt="quartz stone with stain"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/defectqs/burnt-mark.jpg"
            layout="responsive"
            alt="quartz stone with burnt mark"
            width={800}
            height={600}
          />
        </Box>

        <Typography paragraph sx={{ mt: 2 }}>
          There are also similar posts reported on Facebook especially in the
          renovation, interior design and construction groups.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-problems-fb/1.jpg"
            layout="responsive"
            alt="quartz stone countertop problem reported on Facebook"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-problems-fb/2.jpg"
            layout="responsive"
            alt="quartz stone countertop problem reported on Facebook"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-problems-fb/3.jpg"
            layout="responsive"
            alt="quartz stone countertop problem reported on Facebook"
            width={800}
            height={600}
          />
        </Box>
        <Typography paragraph>
          This is just the tip of the iceberg. We believe there are many cases
          out there.
        </Typography>
        <ArticleHeading2>Why Are These Happening?</ArticleHeading2>
        <Typography paragraph>There are 2 reasons:</Typography>
        <ArticleHeading3>{`First, Low Quartz Content's Quartz Stone`}</ArticleHeading3>
        <Typography paragraph>
          Suppose quartz stone needs 85-93% quartz content to have all the
          benefits.
        </Typography>
        <Typography paragraph>
          The lower the percentage of the quartz content, the more benefits will
          be sacrificed, example:
        </Typography>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
          <li>
            The lower the quartz content, the lower the hardness; The easier the
            stone can be scratched.
          </li>
          <li>The bigger the porous, the easier the stone can be stained.</li>
          <li>
            The more the stone powder, the easier the acidic foods can damage
            the stone.
          </li>
          <li>Lacquer thinner damages the stone easily.</li>
        </Typography>
        <ArticleHeading3>
          Second, The Worst Material For Countertop
        </ArticleHeading3>
        <Typography paragraph>
          The low content quartz stone still can hold up to a certain extent.
          The problem might occur a few months later.
        </Typography>
        <Typography paragraph>
          The worst countertop material you might get is a compressed marble
          countertop.
        </Typography>
        <Typography paragraph>
          This stone initially is made for budget wall cladding. But, it looks
          similar to natural marble at a significantly low price.
        </Typography>
        <Typography paragraph>
          But if custom-made for countertop application, the countertop problems
          happen as soon as you use it or sometime before you use it.{" "}
        </Typography>
        <ArticleHeading3>What Is Compressed Marble In Short?</ArticleHeading3>
        <Typography paragraph>
          The manufacturer used recycled crushed marble mixed with pigment,
          colouring, lime powder, and glass powder and used compressed
          technology to make it a marble slab again.
        </Typography>
        <Typography paragraph>
          {`After that, using a stone print technology to print marble's
            texture, vein, and pattern on the surface.`}
        </Typography>
        <ArticleHeading2>Low Price Close Deal Easier</ArticleHeading2>
        <Typography paragraph>
          Genuine quartz stone prices scared many owners away.
        </Typography>
        <Typography
          paragraph
        >{`Compressed marble looks like marble and is low price.`}</Typography>
        <Typography
          paragraph
        >{`The house owners are not a stone expert. They wouldn't know in-depth about a stone`}</Typography>
        <Typography paragraph>
          Those suppliers make a final blow and say it is marble-effect quartz
          stone. Bang, close deal and the owner tragedy begin.
        </Typography>
        <ArticleHeading2>{`We Willing To Help But Can't`}</ArticleHeading2>
        <Typography paragraph>
          Owners find us online and hope we can help repair or polish.
        </Typography>
        <Typography
          paragraph
        >{`We're willing to help, but repair or polish could not solve the problem.`}</Typography>
        <Typography paragraph>
          The same situation will keep happening because the actual problem is
          the stone quality itself.
        </Typography>
        <Typography paragraph>
          How much money and time do you plan to keep spending on the polishing?
        </Typography>
        <ArticleHeading2>
          Why Do Owners Not Contact Their Ex-Supplier?
        </ArticleHeading2>
        <Typography
          paragraph
        >{`We asked: "why not call back their supplier to touch up?"`}</Typography>
        <Typography
          paragraph
        >{`The owners' replied: "after telling the supplier about the problems, the supplier no longer picks up the call."`}</Typography>
        <Typography
          paragraph
        >{`What is even worst is some suppliers block contact.`}</Typography>
        <ArticleHeading2>{`It's Hassle, Waste Of Money & Time`}</ArticleHeading2>
        <Typography paragraph>
          {`Mr/Mrs owner, what if this tragedy happens to you?`}
        </Typography>
        <Typography
          paragraph
        >{`Would you close your eyes and let the problem keep getting serious? Or take the hassle and money to find a new supplier to custom make a new countertop?`}</Typography>
        <ArticleHeading2>Why Those Suppliers Ignore Owner?</ArticleHeading2>
        <Typography
          paragraph
        >{`We guess the supplier sell very low price. The touch-up cost can't cover their losses. Ignore owner at least can maintain some small profit margin.`}</Typography>
        <Typography paragraph>
          Or the supplier knows the product is low content quartz stone or
          compressed marble that touch up is useless to solve the problem.
        </Typography>
        <ArticleHeading2>Profit Or Reputation?</ArticleHeading2>
        <Typography paragraph>
          Why do those suppliers not think about their reputation?
        </Typography>
        <Typography paragraph>
          The answer is simple - a custom-made stone countertop is not a
          repetitive business. Custom made one set, last for a decade.
        </Typography>
        <Typography
          paragraph
        >{`You will not custom made a second set so soon anyway. Plus, even you want to custom made a second set after a decade, they don't think you can remember them.`}</Typography>
        <Typography paragraph>
          For short sighter suppliers, what is reputation? Can feed the hunger?
        </Typography>
        <ArticleHeading2>Business Ethics</ArticleHeading2>
        <Typography
          paragraph
        >{`Some suppliers will be honest with you and tell you the product they're selling is low content quartz stone or compressed marble.`}</Typography>
        <Typography paragraph>
          They emphasize the disadvantages and let you decide to use or not to
          use it.
        </Typography>
        <Typography
          paragraph
        >{`Don't expect all suppliers to practice business ethics.`}</Typography>

        <ArticleHeading2>{`The Article's Mission`}</ArticleHeading2>
        <Typography paragraph>
          This article is to provide in-depth information about quartz stones,
          quartz-stone countertops and quartz stone market.
        </Typography>
        <Typography paragraph>{`We've no defamatory intention.`}</Typography>

        <ArticleHeading2>Few Tips Select Quartz Stone</ArticleHeading2>
        <Typography
          paragraph
        >{`We might not have the colour and shade you're looking for.`}</Typography>
        <Typography paragraph>
          There are many genuine suppliers out there.
        </Typography>
        <Typography paragraph>
          We would like to share a few tips on how to choose genuine quartz
          stone:-
        </Typography>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
          <li>
            Choose quartz stone with warranty. Quartz stone often comes with 10
            years of material warranty.
          </li>
          <li>
            Choose quartz stone with a brand. Usually, the vendor would keep the
            reputation and not risk by importing low content quartz stone.
          </li>
          <li>
            Request a sample you would like to confirm, test it with the below
            method before placing an order.
          </li>
        </Typography>
        <ArticleHeading2>{`Test & Check Method`}</ArticleHeading2>
        <Typography paragraph>{`Let's see the quartz stone below,`}</Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/1.jpg"
            layout="responsive"
            alt="low content quartz stone sample"
            width={800}
            height={600}
          />
        </Box>
        <Typography paragraph>
          Translate the sticker, this quartz stone uses some kinds of
          nano-technology, diamond quality, stain and crack resistance.
        </Typography>
        <Typography
          paragraph
        >{`Is it a good quality quartz stone? Let's test and see,`}</Typography>
        <Typography
          paragraph
        >{`We'll use Harpic 10x for this test.`}</Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/2.jpg"
            layout="responsive"
            alt="Harpic 10x"
            width={800}
            height={600}
          />
        </Box>
        <Typography paragraph>{`Let's pour on the surface,`}</Typography>
        <Typography paragraph>
          Keep staring and wait for 10 - 15 min,
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/3.jpg"
            layout="responsive"
            alt="bubble reaction on low content quartz stone"
            width={800}
            height={600}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/4.jpg"
            layout="responsive"
            alt="bubble reaction on low content quartz stone"
            width={800}
            height={600}
          />
        </Box>
        <Typography
          paragraph
        >{`During the test, you should not go away. By the time you come back, the bubble reaction might already be over.`}</Typography>
        <Typography paragraph>
          Bubble reaction? Why does this happen?
        </Typography>
        <Typography paragraph>
          This stone does not have enough quartz content and contains too much
          stone or lime powder. The more it had, the faster you could see the
          bubble reaction.
        </Typography>
        <Typography paragraph>
          Second, this stone was coated with a sealant on the surface to make it
          shiny. It will create a bubble reaction too.
        </Typography>
        <Typography
          paragraph
        >{`Either one, it is not the quartz stone you're seeking for,`}</Typography>
        <Typography paragraph>After wiping the Harpic,</Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/5.jpg"
            layout="responsive"
            alt="low content quartz stone test result"
            width={800}
            height={600}
          />
        </Box>
        <Typography component="ol" paragraph sx={{ lineHeight: 2 }}>
          <li>A layer of sealant is gone</li>
          <li>Become rough surface, tiny hole can see by human eyes now</li>
          <li>Colour faded</li>
          <li>Discolouration</li>
        </Typography>
        <Typography paragraph>
          This kinds of quality quartz stone give the house owner many
          unnecessary troubles.
        </Typography>
        <Typography paragraph>What result should you seek?</Typography>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/quartz-stone/qs-test/6.jpg"
            layout="responsive"
            alt="no bubble reaction on genuine quartz stone"
            width={800}
            height={600}
          />
        </Box>
        <Typography paragraph>
          This is the result you should look for. No chemical or bubble reaction
          on quartz stone.
        </Typography>
        <Typography paragraph>
          We hope this tip can help you filter out the unwanted quartz stones.
        </Typography>
        <Typography paragraph color="error" fontWeight="bold">
          Disclaimer
        </Typography>
        <Typography paragraph>
          This method cannot guarantee you find genuine quartz stone.
        </Typography>
        <Typography paragraph>
          Some low content quartz stones can resist Harpic 10x up to 30 min or
          more.
        </Typography>
        <Typography paragraph></Typography>
      </Container>

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
