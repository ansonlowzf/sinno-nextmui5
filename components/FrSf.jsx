import { Typography, Grid } from "@mui/material";

const FrSf = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >{`Foot Run (FR) Price`}</Typography>
        <Typography>
          <strong>Foot Run (FR) price</strong> includes:-
        </Typography>
        <Typography component="ul" sx={{ mb: 2 }}>
          <li>Less than or equal to 600mm depth ofthe countertop</li>
          <li>
            50mm front drop/fascia/profile flat polished with a mitre joint
          </li>
          <li>50mm height backsplash</li>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >{`Square Feet (SF) Price`}</Typography>
        <Typography>
          <strong>Foot Run (FR) price</strong> includes:-
        </Typography>
        <Typography
          sx={{ mb: 2 }}
        >{`Countertop exceeding the foot run total depth (700mm including backsplash and front drop) will be calculated in Square Feet price.`}</Typography>
      </Grid>
    </Grid>
  );
};

export default FrSf;
