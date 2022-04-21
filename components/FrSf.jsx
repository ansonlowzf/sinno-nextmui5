import { Container, Typography, Grid } from "@mui/material";

const FrSf = () => {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            <strong>Foot Run (FR) price</strong> is for countertop with:-
          </Typography>
          <Typography component="ul" sx={{ mb: 2 }}>
            <li>Less than or equal to 600mm of depth</li>
            <li>
              50mm front drop/fascia/profile flat polished with a mitre joint
            </li>
            <li>50mm height backsplash</li>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Square Feet (SF) price</strong> includes:-
          </Typography>
          <Typography
            sx={{ mb: 2 }}
          >{`Countertop exceeding the foot run total depth (700mm including backsplash and front drop) will be quoted in Square Feet price.`}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FrSf;
