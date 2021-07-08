import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { MuiNextLink } from "../../components";

const PostPage = ({
  frontmatter: { title, date, coverImage },
  slug,
  content,
}) => {
  return (
    <>
      <MuiNextLink href="/blog">Go Back</MuiNextLink>
      <h1>{title}</h1>
      <div>Posted on {date}</div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
