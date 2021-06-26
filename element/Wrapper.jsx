import { Box } from "@material-ui/core";

export const SectionWrapper = ({ children }) => (
  <Box component="section" sx={{ mb: { xs: 15, sm: 20 } }}>
    {children}
  </Box>
);
