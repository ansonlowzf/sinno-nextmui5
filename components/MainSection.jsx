import { Container } from "@mui/material";

const MainSection = ({ children }) => {
  return (
    <Container component="main" maxWidth="sm">
      {children}
    </Container>
  );
};

export default MainSection;
