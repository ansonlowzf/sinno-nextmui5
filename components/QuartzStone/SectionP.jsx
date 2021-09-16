import { Heading3, TextWrapper, SectionWrapper } from "../../element";
import { Box, Typography } from "@mui/material";

export const SectionP = () => (
  <Box mt={15}>
    <Heading3>Genuine Quartz Stone</Heading3>
    <SectionWrapper>
      <TextWrapper>
        <Typography paragraph>
          {`Since the year 2018, Malaysia's quartz stone market started to chaos. The
        market is bloated with low-end quartz stone or sells compressed marble to
        sell as quartz stone. The seller told the buyer that compressed marble is
        a marble effect quartz stone, but the price is significantly lower.`}
        </Typography>
        <Typography paragraph>
          {`Some buyers sabotaged us and said we make big money by selling quartz
        stone at a higher price. Seeing the iceberg floating on the sea without
        seeing how big is the iceberg's base under the sea is superficial. These people compare the price without seeing all the facts behind.`}
        </Typography>
        <Typography paragraph>Do you care:-</Typography>
        <Typography component="ol" paragraph>
          <li>The grade of quality?</li>
          <li>Foreign worker or a local master?</li>
          <li>Machine or hand tool cutting?</li>
          <li>Installation on time?</li>
          <li>With or Without a warranty?</li>
          <li>The team can handle your project well?</li>
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
          Who made the most money?
        </Typography>
        <Typography component="ol" paragraph>
          <li>Genuine quartz stone sells at a genuine price.</li>
          <li>Fake quartz stone sell at a genuine quartz stone price?</li>
        </Typography>
        <Typography paragraph>
          Who is not thinking of the massive hassles that can bring to the house
          owner, especially the owner who has moved into the house?
        </Typography>
        <Typography paragraph>
          In the year of 2020, the problems start exposed on the surface. Owners
          send us these photos and ask for help to polish or repair them. Said
          their seller not picking up the phone, blocked their phone or
          disappeared.
        </Typography>
      </TextWrapper>
    </SectionWrapper>
  </Box>
);
