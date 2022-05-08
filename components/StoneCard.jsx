import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import MuiNextLink from "../components";

export const StoneCard = ({ imgSrc, stone, desc, linkUrl }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={MuiNextLink} href={linkUrl}>
      <CardMedia
        component="img"
        sx={{ height: { xs: 200, sm: 250 } }}
        title={stone}
        image={imgSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <MuiNextLink href={linkUrl} underline="hover">
        <Button color="primary">Check Out</Button>
      </MuiNextLink>
    </CardActions>
  </Card>
);
