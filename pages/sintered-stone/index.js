import FrSf from "@components/FrSf";
import MainSection from "@components/MainSection";
import MetaSEO from "@components/MetaSEO";
import StsDisplay from "@components/StsDisplay";
import { Heading2s } from "@elements/Heading";
import MuiParagraph from "@elements/MuiParagraph";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Grid } from "@mui/material";
import { sinteredStone } from "const/sintered-stone";
import Image from "next/image";
import {
  ColourWarning,
  MuiNextLink,
  PriceTerm,
  SectionContact,
} from "../../components";

const MocaPage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Sintered Stone Malaysia"
        pageDesc="We fabricate, supply &amp; install Moca Compact sintered stone countertop in Malaysia"
        pagePath="/sintered-stone"
        metaImg="/moca/logo.png"
      />
      <Grid container justifyContent="center" sx={{ mt: 15, mb: 5 }}>
        <Grid item xs={12} md={5}>
          <Image
            src="/moca/logo.png"
            alt="moca compact sintered stone logo"
            layout="responsive"
            width={727}
            height={200}
          />
        </Grid>
      </Grid>

      <MainSection>
        <Heading2s>What is Sintered Stone?</Heading2s>
        <MuiParagraph>
          {`Also known as porcelain slab, compact stone or ultra-compact stone. Sintered stone in Chinese is called "岩板".`}
        </MuiParagraph>
        <MuiParagraph>{`It's an engineered stone combined with multiple natural ingredients and compressed with a high-pressure machine. This process is called the sintering process.`}</MuiParagraph>
        <MuiParagraph>
          Now, you know how sintered stone gets his name.
        </MuiParagraph>
        <MuiParagraph>
          This process mimics how nature creates a natural stone like granite
          underground.
        </MuiParagraph>
        <MuiParagraph>
          Manufacturers compress the sintered stone with 15000 - 28000 tons of
          high compact machines without resin. Then bake with 1200℃ heat to form
          a solid hard stone slab material.
        </MuiParagraph>
        <MuiParagraph>
          Hence, the sintered stone is a very hard material and not tolerant to
          flexibility (this might be a disadvantage in a specific situation).
        </MuiParagraph>
        <MuiParagraph>
          {`If you want to know more in-depth about sintered stone. We recommend you read the `}
          <MuiNextLink href="/quartz-stone">{`in-depth quartz stone's article`}</MuiNextLink>
          {` before reading further. It'll help you understand sintered stone easier.`}
        </MuiParagraph>
        <MuiParagraph>
          We explain some extra sintered stone advantages and disadvantages
          compared to quartz stone below.
        </MuiParagraph>

        <Heading2s>Smaller Porous</Heading2s>
        <MuiParagraph>
          The non-porous feature brings a lot of benefits to engineered stone.
          You could read more about this feature in our quartz stone article.
        </MuiParagraph>
        <MuiParagraph>
          Sintered stone has smaller porous compared to quartz stone. With a
          0.05% water absorption rate, the quartz stone is already categorized
          as non-porous material.
        </MuiParagraph>
        <MuiParagraph>{`The sintered stone's water absorption is 0.02%. In reality, there is no difference in our use case. But it's good to know that sintered stone has smaller porous.`}</MuiParagraph>
        <MuiParagraph>
          Sintered stone has most of the quartz stone advantages.
        </MuiParagraph>
        <MuiParagraph>Plus, the following differences:-</MuiParagraph>

        <Heading2s>Higher Heat Resistance</Heading2s>
        <MuiParagraph>
          The sintered stone can resist up to 300℃ of heat, whereas the quartz
          stone resists up to 200℃.
        </MuiParagraph>

        <Heading2s>Lower Scratch Resistance</Heading2s>
        <MuiParagraph>{`Sintered stone has a slightly lower Mohs Hardness Scale, 6.5, whereas quartz stone is 7. It's enough to resist scratches on 95% of the kitchen utensils.`}</MuiParagraph>

        <Heading2s>Finish Options</Heading2s>
        <MuiParagraph>{`The sintered stone has 2 additional finishes: high gloss and smooth matt that can't be found in quartz stone.`}</MuiParagraph>

        <Heading2s>Almost Unlimited Colour Options</Heading2s>
        <MuiParagraph>
          There is no limitation on colour options with the latest stone
          printing technology.
        </MuiParagraph>
        <MuiParagraph>{`Marble, terrazzo, granite, onyx, solid, wood, flower, bamboo, tree's pattern, veins and shades`}</MuiParagraph>

        <Heading2s>UV Ray Resistance</Heading2s>
        <MuiParagraph>
          {`If you read the`}{" "}
          <MuiNextLink href="/quartz-stone">quartz stone article</MuiNextLink>{" "}
          suggest above, you will know that quartz stone cannot use for outdoor
          applications because of the resin.
        </MuiParagraph>
        <MuiParagraph>
          The UV Ray will dim the resin, causing colour fading and
          discolouration after a few years.
        </MuiParagraph>
        <MuiParagraph>
          Without resin, UV Ray will not impact sintered stone and causes colour
          fading and discolouration like quartz stone.
        </MuiParagraph>

        <Heading2s>Sintered Stone Applications</Heading2s>
        <MuiParagraph>
          Without resin, sintered stone can use for outdoor applications. It can
          be used as a countertop, wall cladding, indoor flooring and additional
          applications as below:-
        </MuiParagraph>
        <MuiParagraph>
          <ol>
            <li>Building Facades</li>
            <li>Car porch flooring</li>
            <li>Outdoor barbeque pits</li>
            <li>Gate pillar</li>
          </ol>
        </MuiParagraph>
      </MainSection>

      <Container maxWidth="sm" sx={{ my: { xs: 5, sm: 10 } }}>
        <Heading2s>Colour Catalogue &amp; Pricing</Heading2s>
        <FrSf />
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {sinteredStone.map(
            (
              {
                stoneName,
                materialCode,
                finish,
                thickness,
                slabSize,
                price,
                imgSrc,
              },
              i
            ) => (
              <StsDisplay
                key={i}
                stoneName={stoneName}
                materialCode={materialCode}
                finish={finish}
                thickness={thickness}
                slabSize={slabSize}
                price={price}
                imgSrc={imgSrc}
              />
            )
          )}
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact
          stone="Moca Compact Sintered Stone"
          href="/contact/sintered-stone"
        />
      </SectionWrapper>
    </>
  );
};

export default MocaPage;

// TODO: add keyword sintered stone applications
