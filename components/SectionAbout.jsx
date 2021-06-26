import { Button, Container, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import Image from "next/image";
import { MuiNextLink } from "../components";
import { Heading2 } from "../element";

export const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="false">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Image
            src="/image-home/posidonia-green.png"
            alt="silestone posidonia green kitchen top"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </Grid>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
        >
          <Heading2>Natural &amp; Engineered Stone Surfacing Mason</Heading2>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            We fabricate, supply and install genuine stone kitchen top for
            kitchen cabinet
          </Typography>
          <MuiNextLink href="/about-us" underline="none">
            <Button variant="outlined" size="large">
              About Us
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};
