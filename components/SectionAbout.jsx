import { Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import { MuiNextLink } from "../components";
import { Heading3 } from "../element";

export const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="false">
      <Grid container>
        <Grid item xs={12} md={6} sx={{ mb: { xs: 5, md: null } }}>
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
          md={6}
          sx={{ px: { md: 5 } }}
        >
          <Heading3>Natural &amp; Engineered Stone Surfacing Mason</Heading3>
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
