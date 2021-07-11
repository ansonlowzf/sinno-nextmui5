import { Box, Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { MuiNextLink } from ".";

const Post = ({ post }) => {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={12} sm={4} sx={{ mb: { xs: 2.5, sm: 0 }, zIndex: "-100" }}>
        <Image
          src={post.frontmatter.coverImage}
          alt={post.frontmatter.title}
          layout="responsive"
          width={400}
          height={300}
        />
      </Grid>
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="space-evenly"
        xs={12}
        sm={8}
        sx={{ px: { xs: 0, sm: 3 } }}
      >
        <Box>
          <Typography component="h3" variant="h5" gutterBottom>
            {post.frontmatter.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {post.frontmatter.date}
          </Typography>
        </Box>

        <Typography gutterBottom>{post.frontmatter.excerpt}</Typography>

        <MuiNextLink href={`/blog/${post.slug}`} underline="none">
          <Button size="large" sx={{ p: 0 }}>
            Read More
          </Button>
        </MuiNextLink>
      </Grid>
    </Grid>
  );
};

export default Post;
