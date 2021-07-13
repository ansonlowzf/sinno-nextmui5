import { Button, Container, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import Image from "next/image";
import { MuiNextLink } from "../components";
import { Heading3 } from "../element";

export const SectionBlog = () => {
  return (
    <Container component="section" maxWidth="false">
      <Grid container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{ mb: 5, px: { md: 5 } }}
        >
          <Heading3>Blog</Heading3>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            Would like to know more about custom made stone kitchen top?
          </Typography>
          <MuiNextLink href="/about-us" underline="none">
            <Button variant="outlined" size="large">
              Read Article
            </Button>
          </MuiNextLink>
        </Grid>
        <Grid item xs={12} md={6} sx={{ overflow: `hidden` }}>
          <Image
            src="/image-home/cala-blue.png"
            alt="silestone posidonia green kitchen top"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
