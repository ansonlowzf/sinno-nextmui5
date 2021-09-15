import { Heading3, TextWrapper } from "../element";
import { Typography } from "@mui/material";

export const PriceTerm = () => {
  return (
    <>
      <Heading3>Price Term</Heading3>
      <TextWrapper>
        <Typography component="p" variant="h6">
          The Calculation:-
        </Typography>
        <Typography component="ul" paragraph>
          <li>
            Foot Run (FR) is for standard kitchen top with the total depth equal
            or less than 700mm.
          </li>
          <li>
            Square Feet (SF) is for total depth equal or greater than 701mm
            (e.g: Island with 900mm depth).
          </li>
        </Typography>
        <Typography component="p" variant="h6">
          {`The Price Include: -`}
        </Typography>
        <Typography component="ul" paragraph>
          <li>
            Standard depth 600mm, 50mm front edging mitre joint &amp; 50mm
            backsplash with flat polish.
          </li>
          <li>Material, fabrication, installation &amp; transport.</li>
          <li>Top mount hole opening RM 100 / hole.</li>
          <li>Under-mount hole opening with polish RM 150 / hole</li>
          <li>
            Price does not include dismantle of existing kitchen top if applied.
          </li>
        </Typography>
        <Typography component="p" variant="h6">
          {`Terms and Conditions: -`}
        </Typography>
        <Typography component="ul">
          <li>Final quotation price is based on on-site measurement.</li>
          <li>
            Goods will be delivered and installed within 14 - 21 days or as
            earlier as possible.
          </li>
          <li>
            Subject to stock availability or installation leads might take
            longer.
          </li>
          <li>
            Minimum order 15 FR or 30 SQ.FT per order or a surcharge will be
            applied.
          </li>
          <li>
            Payment terms: 40% deposit upon confirmation, 40% before
            installation, &amp; 20% after installation.
          </li>
          <li>
            Additional workmanship, travel cost, accommodation will be applied
            for outstation works.
          </li>
          <li>
            The price does not apply to wall cladding, &amp; flooring
            applications.
          </li>
          <li>The price is applicable in Malaysia only.</li>
        </Typography>
      </TextWrapper>
    </>
  );
};
