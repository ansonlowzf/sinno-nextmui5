import Hero from "@components/Hero";
import MetaSEO from "@components/MetaSEO";
import { SectionWrapper } from "@elements/Wrapper";
import { Container, Typography } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";
import { sortByDate } from "../utils/index";

const BlogPage = ({ posts }) => {
  return (
    <>
      <MetaSEO
        pageTitle="Blog"
        pageDesc="Articles about custom-made stone countertops. These articles help you make the right decision to custom made your stone countertop without hesitation."
        pagePath="/blog"
        metaImg="/blog/hero.jpg"
      />
      <Hero
        imgSrc="/blog/hero.jpg"
        imgAlt="blog hero image"
        title="Blog"
        subtitle="Articles To Know More About Custom Made Your Stone Countertop"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Typography id="blog" variant="h2" align="center" sx={{ mb: 5 }}>
          Blog
        </Typography>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        {/* Previous and Next blog button */}
      </Container>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
