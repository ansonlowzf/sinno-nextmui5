import * as React from "react";
import {
  Hero,
  SectionAbout,
  SectionContact,
  SectionImage,
  SectionProduct,
  SectionBlog,
  MetaSEO,
} from "../components";
import { SectionWrapper } from "../element";
import { Container, Typography } from "@material-ui/core";
import { Heading3 } from "../element";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Home"
        pageDesc="We're a stonemason and factory that fabricate, supply and install genuine stone countertops for residential and commercial use."
        pagePath="home"
        metaImg="/home/hero.jpg"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/home/hero.jpg"
          imgAlt="factory entrance"
          title="Stone Innovations Enterprise"
          subtitle="Specializing in Genuine Stone Surfacing Top &amp; Wall Cladding"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Heading3>
            We Turn 10 FT by 4 FT Stone Surfacing To Various Top
          </Heading3>
          <Image
            src="/home/stone2variousTop.png"
            alt="various stone surfacing top"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Heading3>
            We Turn 10 FT by 4 FT Stone Surfacing To Various Top
          </Heading3>
          <Typography
            component="ul"
            variant="body1"
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
            <li>Shelves</li>
            <li>And More</li>
          </Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <SectionImage
          imgSrc="/home/5101.jpg"
          imgAlt="Caesarstone Empira Black"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Heading3>We Supply &amp; Install The Following Stones:</Heading3>
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
        <SectionProduct />
      </SectionWrapper>

      <SectionWrapper>
        <SectionImage
          imgSrc="/home/5151.jpg"
          imgAlt="Caesarstone Empira White"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionBlog />
      </SectionWrapper>

      <SectionWrapper>
        <SectionContact stone="Stone" />
      </SectionWrapper>
    </>
  );
};

export default Homepage;
