import { Container, Grid, Typography } from "@mui/material";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { zenstone } from "const/pricing";

const { noble } = zenstone;

export const ZenstoneNoble = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h3"
        variant="h5"
        fontWeight="bold"
        align="center"
        sx={{ bgcolor: "primary.main", mb: 2, py: 2 }}
      >
        Noble Series
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201505.png"
          stoneName="Pure Black"
          price={noble}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q202032.png"
          stoneName="Pure Grey"
          price={noble}
        />
        <ZenstoneDisplay
          imgSrc="/zenstone/qs/Q201541.png"
          stoneName="Super White"
          price={noble}
        />
      </Grid>
    </Container>
  );
};
