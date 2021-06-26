import { Box, Container } from "@material-ui/core";

export const SectionWrapper = ({ children }) => (
  <Box component="section" sx={{ mb: { xs: 15, sm: 20 } }}>
    {children}
  </Box>
);

export const TextWrapper = ({ children }) => (
  <Container component="article" maxWidth="sm">
    {children}
  </Container>
);
