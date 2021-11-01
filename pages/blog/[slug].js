import { Button, Container, Typography } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import { MuiNextLink } from "../../components";
import { SectionWrapper } from "@elements/Wrapper";
import Image from "next/image";
import Head from "next/head";

const PostPage = ({
  frontmatter: { title, date, coverImage, imgAlt },
  slug,
  content,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SectionWrapper>
        <Container maxWidth="sm" sx={{ mt: 10 }}>
          <MuiNextLink href="/blog#blog" underline="none">
            <Button variant="outlined" sx={{ mb: 5 }}>
              Go Back
            </Button>
          </MuiNextLink>
          <Image
            src={coverImage}
            alt={imgAlt}
            layout="responsive"
            width={960}
            height={720}
          />
          <Typography
            component="h1"
            variant="h2"
            fontWeight="bold"
            sx={{ mt: 5 }}
          >
            {title}
          </Typography>
          <Typography component="p" variant="subtitle1 " sx={{ mb: 5 }}>
            Posted on {date}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <MuiNextLink href="/blog#blog" underline="none">
            <Button variant="outlined" sx={{ mt: 5 }}>
              Go Back
            </Button>
          </MuiNextLink>
        </Container>
      </SectionWrapper>
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
