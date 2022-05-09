import { Typography } from "@mui/material";

export const ArticleHeading2 = ({ children }) => (
  <Typography
    component="h2"
    variant="h4"
    color="primary"
    fontWeight="bold"
    gutterBottom
  >
    {children}
  </Typography>
);

export const ArticleHeading3 = ({ children }) => (
  <Typography
    component="h3"
    variant="h5"
    color="primary"
    fontWeight="bold"
    gutterBottom
  >
    {children}
  </Typography>
);

export const Heading2 = ({ children }) => (
  <Typography
    variant="h2"
    color="primary"
    align="center"
    sx={{
      fontWeight: "bold",
      mb: 5,
    }}
  >
    {children}
  </Typography>
);

export const Heading2s = ({ children, isCenter }) => (
  <Typography
    component="h2"
    variant="h4"
    color="primary"
    fontWeight="bold"
    align={isCenter ? "center" : "inherit"}
    sx={{
      my: 2.5,
    }}
  >
    {children}
  </Typography>
);

export const Heading3 = ({ children }) => (
  <Typography
    variant="h3"
    color="primary"
    align="center"
    sx={{
      fontWeight: "bold",
      mb: 5,
    }}
  >
    {children}
  </Typography>
);
