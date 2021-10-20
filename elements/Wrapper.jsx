import { Box, Container } from "@mui/material";

export const SectionWrapper = ({ children, styles }) => (
  <Box component="section" sx={{ ...styles, mb: { xs: 15, sm: 20 } }}>
    {children}
  </Box>
);

export const TextWrapper = ({ children }) => (
  <Container component="article" maxWidth="sm">
    {children}
  </Container>
);
