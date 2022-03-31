import { Typography } from "@mui/material";
import { Heading2s } from "../elements";

export const PriceTerm = () => {
  return (
    <>
      <Heading2s isCenter>Price Term</Heading2s>
      <Typography component="ol">
        <li>
          The price include material, fabrication, installation &amp; transport.
        </li>
        <li>Final quotation price is based on on-site measurement.</li>
        <li>
          Price does not include dismantle of existing kitchen top if applied.
        </li>
        <li>
          Goods will be delivered and installed within 14 - 21 days or as
          earlier as possible.
        </li>
        <li>
          Subject to stock availability or installation leads might take longer.
        </li>
        <li>
          Minimum order 15 FR or 30 SQ.FT per order or a surcharge will be
          applied.
        </li>
        <li>
          Additional workmanship, travel cost, accommodation will be applied for
          outstation works.
        </li>
        <li>
          The price does not apply to wall cladding, &amp; flooring
          applications.
        </li>
        <li>The price is applicable in Malaysia only.</li>
      </Typography>
    </>
  );
};
