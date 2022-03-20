import { Container, Typography } from "@mui/material";

const ProjectDescription = ({ description }) => {
  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography fontWeight="bold" gutterBottom>
        Work Description:
      </Typography>
      <Typography paragraph>{description}</Typography>
    </Container>
  );
};

export default ProjectDescription;
