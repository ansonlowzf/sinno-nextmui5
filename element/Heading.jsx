import { Typography } from "@material-ui/core";

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

export const Heading3 = ({ children }) => (
  <Typography
    component="h2"
    variant="h4"
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
