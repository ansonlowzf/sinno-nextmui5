import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, Typography } from "@material-ui/core";
import Post from "../components/Post";
import { sortByDate } from "../utils/index";

const BlogPage = ({ posts }) => {
  return (
    <Container maxWidth="sm">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
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
