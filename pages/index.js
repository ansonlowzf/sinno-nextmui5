import * as React from "react";
import {
  Hero,
  SectionAbout,
  SectionContact,
  SectionImage,
  SectionProduct,
  SectionBlog,
} from "../components";
import { SectionWrapper } from "../element";

const Homepage = () => {
  return (
    <>
      <SectionWrapper>
        <Hero
          imgSrc="/image-home/home-hero1.png"
          imgAlt="factory entrance"
          title="Stone Innovations Enterprise"
          subtitle="Specializing in Genuine Stone Kitchen Top"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionAbout />
      </SectionWrapper>

      <SectionWrapper>
        <SectionImage
          imgSrc="/image-home/5101.jpg"
          imgAlt="Caesarstone Empira Black"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionProduct />
      </SectionWrapper>

      <SectionWrapper>
        <SectionImage
          imgSrc="/image-home/5151-1.jpg"
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
