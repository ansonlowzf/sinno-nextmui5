import { SectionWrapper, TextWrapper } from "@elements/Wrapper";
import { Box, Container, Typography } from "@mui/material";
import { Heading3 } from "@elements/Heading";

const MapInfo = () => {
  return (
    <>
      <SectionWrapper>
        <Container maxWidth="md">
          <Heading3>Sales Office</Heading3>
          <TextWrapper>
            <Typography align="center" sx={{ mb: 2 }}>
              No. 45, First Floor, Unit 1, Jalan Medan Putra 6, Medan Putra
              Business Center, Bandar Menjalara 52200 KL
            </Typography>
          </TextWrapper>
          <Box sx={{ height: 500 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6283264329245!2d101.62150531532713!3d3.1919960537764975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc460279d77759%3A0x58de15af40adf9e0!2s45%2C%20Jalan%20Medan%20Putra%206%2C%20Medan%20Putra%20Bussiness%20Centre%2C%2052200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1626227671106!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default MapInfo;
