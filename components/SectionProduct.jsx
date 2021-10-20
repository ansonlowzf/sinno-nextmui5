import { Container, Grid } from "@mui/material";
import { Heading3 } from "../elements";
import { StoneCard } from "../components";

export const SectionProduct = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Heading3>Type of Stones</Heading3>
        <Grid container spacing={2} justifyContent="center">
          <Grid container item xs={12} sm={6} md={4} justifyContent="center">
            <StoneCard
              imgSrc="/image-home/grey_mirror.jpg"
              stone="Quartz Stone"
              desc="Engineered Stone"
              linkUrl="/quartz-stone"
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={4} justifyContent="center">
            <StoneCard
              imgSrc="/image-home/granite.jpg"
              stone="Granite"
              desc="Natural Stone"
              linkUrl="/granite"
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={4} justifyContent="center">
            <StoneCard
              imgSrc="/image-home/sintered-stone.jpg"
              stone="Sintered Stone"
              desc="Engineered Stone"
              linkUrl="/sintered-stone"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
