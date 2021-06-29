import { SectionWrapper, Heading2, TextWrapper } from "../../element";
import { SinnoButton } from "../../components";
import { Typography } from "@material-ui/core";

export const SectionWarranty = () => (
  <SectionWrapper>
    <Heading2>Warranty</Heading2>
    <TextWrapper>
      <Typography align="center" paragraph>
        What if the quartz countertop you bought from us is crack, chip-off,
        mildew growth, colour dimming without any impact?
      </Typography>
      <Typography component="p" variant="body1" align="center" paragraph>
        First, check out
      </Typography>

      <SinnoButton linkUrl="/blog/warranty" btnText="Warranty" />
      <Typography variant="h6" align="center">
        If under warranty, we replace a new set for you - FREE OF CHARGE!
      </Typography>
    </TextWrapper>
  </SectionWrapper>
);
