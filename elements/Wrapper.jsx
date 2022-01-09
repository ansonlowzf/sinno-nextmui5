import { Box, Container } from "@mui/material";

export const SectionWrapper = ({ children }) => (
  <Box component="section" sx={{ my: { xs: 5, sm: 10 } }}>
    {children}
  </Box>
);

export const TextWrapper = ({ children }) => (
  <Container component="article" maxWidth="sm" fixed>
    {children}
  </Container>
);
