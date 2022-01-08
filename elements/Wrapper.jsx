import { Box, Container } from "@mui/material";

export const SectionWrapper = ({ children, styles }) => (
  <Box component="section" sx={{ my: { xs: 5, sm: 10, md: 15, lg: 20 } }}>
    {children}
  </Box>
);

export const TextWrapper = ({ children }) => (
  <Container component="article" maxWidth="sm" fixed>
    {children}
  </Container>
);
