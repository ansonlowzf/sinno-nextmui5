import { Box, Button, Grid, Typography, Paper } from "@material-ui/core";
import Image from "next/image";
import { MuiNextLink } from ".";

const Post = ({ post }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        p: 2,
        mb: 5,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
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
        justifyContent="space-between"
        xs={12}
        sm={8}
        sx={{ px: { xs: 0, sm: 3 } }}
      >
        <Box>
          <MuiNextLink href={`/blog/${post.slug}`} underline="none">
            <Typography component="h3" variant="h5" gutterBottom>
              {post.frontmatter.title}
            </Typography>
          </MuiNextLink>
          <Typography variant="subtitle2" gutterBottom>
            {post.frontmatter.date}
          </Typography>
        </Box>

        <Typography gutterBottom>{post.frontmatter.excerpt}</Typography>

        <MuiNextLink href={`/blog/${post.slug}`} underline="none">
          <Button variant="outlined">Read More</Button>
        </MuiNextLink>
      </Grid>
    </Grid>
  );
};

export default Post;
