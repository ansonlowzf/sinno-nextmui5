import { Typography } from "@mui/material";

const CollectionTitle = ({ children }) => {
  return (
    <Typography
      component="h3"
      variant="h5"
      fontWeight="bold"
      align="center"
      sx={{ bgcolor: "primary.main", mb: 2, py: 2 }}
    >
      {children}
    </Typography>
  );
};

export default CollectionTitle;
