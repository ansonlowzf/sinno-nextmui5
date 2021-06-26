import { Container, Grid } from "@material-ui/core";
import { Heading2 } from "../element";
import { StoneCard } from "../components";

export const SectionProduct = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Heading2>Type of Stones</Heading2>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <StoneCard
              imgSrc="/image-home/grey_mirror.jpg"
              stone="Quartz Stone"
              desc="Engineered Stone"
              linkUrl="/quartz-stone"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StoneCard
              imgSrc="/image-home/granite.jpg"
              stone="Granite"
              desc="Natural Stone"
              linkUrl="/granite"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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