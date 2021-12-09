import { SectionWrapper } from "@elements/Wrapper";
import { Heading2 } from "@elements/Heading";
import { Container, Typography } from "@mui/material";

const CompanyInfo = () => {
  return (
    <SectionWrapper>
      <Heading2>Stone Innovations Enterprise</Heading2>
      <Container maxWidth="sm">
        <Typography align="center" fontWeight="bold" gutterBottom>
          Business Registration No.:-
        </Typography>
        <Typography align="center" paragraph>
          201603220786 (002560776-H)
        </Typography>
        <Typography align="center" color="error" fontWeight="bold">
          Please make an appointment before visiting the sales office or
          warehouse. Apology for any inconvenience caused, we have to control
          the numbers of visitors due to the pandemic of COVID-19.
        </Typography>
      </Container>
    </SectionWrapper>
  );
};

export default CompanyInfo;
