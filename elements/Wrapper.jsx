import { Box, Container } from "@mui/material";

export const SectionWrapper = ({ children }) => (
  <Container component="section" maxWidth="sm" sx={{ my: { xs: 5, sm: 10 } }}>
    {children}
  </Container>
);

export const TextWrapper = ({ children }) => (
  <Container component="article" maxWidth="sm" fixed>
    {children}
  </Container>
);
