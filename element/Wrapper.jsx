import { Box } from "@material-ui/core";

export const SectionWrapper = ({ children }) => (
  <Box component="section" sx={{ mb: 15 }}>
    {children}
  </Box>
);
