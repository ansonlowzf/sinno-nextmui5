import { Card, CardContent, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

const TwoColumnDisplay = ({
  imgSrc,
  stoneName,
  materialCode,
  finish,
  thickness,
  series,
  slabSize,
  price,
}) => {
  return (
    <Grid container item xs={12} md={6}>
      <Grid item xs={12} sm={12} md={6}>
        <Image src={imgSrc} alt={stoneName} width={600} height={600} />
      </Grid>
      <Grid container item xs={12} sm={12} md={6} alignItems="center">
        <Card sx={{ minWidth: "100%" }}>
          <CardContent>
            <Typography
              component="h3"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              {stoneName}
            </Typography>
            <Typography gutterBottom>
              {`Code: `}
              <strong>{materialCode}</strong>
            </Typography>
            <Typography gutterBottom>
              {`Finish: `}
              <strong>{finish}</strong>
            </Typography>
            <Typography gutterBottom>
              {`Thickness: `}
              <strong>{thickness}</strong>
            </Typography>
            <Typography gutterBottom>
              {`Series: `}
              <strong>{series}</strong>
            </Typography>
            <Typography gutterBottom>
              {`Slab Size: `}
              <strong>{slabSize}</strong>
            </Typography>
            <Typography
              component="p"
              variant="h6"
              color="text.secondary"
              fontWeight="bold"
            >
              {price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TwoColumnDisplay;
