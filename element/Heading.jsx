import { Typography } from "@material-ui/core";

export const Heading2 = ({ children }) => (
  <Typography
    component="h2"
    variant="h4"
    color="primary"
    textAlign="center"
    sx={{
      fontWeight: "bold",
      mb: 3,
    }}
  >
    {children}
  </Typography>
);
