import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
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
      <Button size="small" color="primary">
        Check Out
      </Button>
    </CardActions>
  </Card>
);
