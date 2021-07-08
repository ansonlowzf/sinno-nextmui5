import {
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@material-ui/core";
import { MuiNextLink } from ".";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={5}>
          <Image
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            layout="responsive"
            width={400}
            height={300}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6" gutterBottom>
            {post.frontmatter.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {post.frontmatter.date}
          </Typography>
          <Typography gutterBottom>{post.frontmatter.excerpt}</Typography>
          <MuiNextLink href={`/blog/${post.slug}`}>
            <Button>Read More</Button>
          </MuiNextLink>
        </Grid>
      </Grid>

      {/* <Card sx={{display: 'flex'}}>
        <CardContent>
         
          <Typography variant="subtitle2" gutterBottom>
            {post.frontmatter.date}
          </Typography>
          <Typography gutterBottom>{post.frontmatter.excerpt}</Typography>
        </CardContent>
        <CardActions>
          <MuiNextLink href={`/blog/${post.slug}`}>
            <Button>Read More</Button>
          </MuiNextLink>
        </CardActions>
      </Card> */}
    </Container>
  );
};

export default Post;
