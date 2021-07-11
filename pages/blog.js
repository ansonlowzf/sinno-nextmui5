import { Container, Typography } from "@material-ui/core";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Hero } from "../components";
import Post from "../components/Post";
import { SectionWrapper } from "../element";
import { sortByDate } from "../utils/index";

const BlogPage = ({ posts }) => {
  return (
    <>
      <Hero
        imgSrc="/blog/hero.jpg"
        imgAlt="blog hero image"
        title="Blog"
        subtitle="Articles To Know More About Custom Made Your Stone Countertop"
      />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Typography id="blog" variant="h2" align="center" sx={{ mb: 5 }}>
          Blog
        </Typography>
        <SectionWrapper>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </SectionWrapper>
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
