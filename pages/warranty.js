import MuiNextLink from "@components/MuiNextLink";
import { Heading2 } from "@elements/Heading";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import ImgWarranty from "../public/warranty.png";

const Warranty = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ my: 10 }}>
        <Grid item xs={10} sm={8} lg={6}>
          <Paper>
            <Image
              layout="responsive"
              width={960}
              height={540}
              src={ImgWarranty}
              alt="warranty"
            />
          </Paper>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Typography variant="h1" align="center" gutterBottom>
          Warranty
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Materials Warranty
            </Typography>
            <Typography gutterBottom>
              The warranty starts from the date of installation.
            </Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>Caesarstone Quartz Surface - 10 Years</li>
              <li>Zenstone Quartz Surface - 10 Years</li>
              <li>Moca Compact Stone - 10 Years</li>
              <li>Granite - No Warranty</li>
              <li>Marble - No Warranty</li>
              <li>Workmanship - 2 Years</li>
            </Typography>

            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              What Is The Warranty Cover?
            </Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>Colour dimming</li>
              <li>Discolouration without any factors</li>
              <li>Scratches without any impacts</li>
              <li>Crack without any impacts</li>
              <li>Chip-off without any impacts</li>
            </Typography>

            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >{`Terms & Conditions`}</Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>
                We highly advise the client to follow the care & maintenance
                guide. Please read{" "}
                <MuiNextLink href="https://stoneinnovations.com.my/blog/care-and-maintenance">
                  here
                </MuiNextLink>
              </li>
              <li>
                All quartz stone countertops installed by Stone Innovations
                Enterprise are entitled to this warranty automatically.
              </li>
              <li>
                The client must cooperate with our service team to inspect and
                assist us in performing our obligations under warranty.
              </li>
            </Typography>

            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Fulfilment
            </Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>Report the defect</li>
              <li>Inspect by the service team</li>
              <li>Identity the defect</li>
              <li>Attend to repair</li>
              <li>{"Replace - Redo a new set for you if we can't fix it"}</li>
            </Typography>

            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              How To Claim The Warranty?
            </Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>Contact the office phone number or your sales rep.</li>
              <li>Inspect by the service team</li>
              <li>Identity the defect</li>
              <li>Attend to repair</li>
              <li>{`Replace - Redo a new set for you if we can't fix it`}</li>
            </Typography>

            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              The Warranty Excluded:-
            </Typography>
            <Typography component="ol" gutterBottom sx={{ mb: 3 }}>
              <li>Product is used for outdoor purposes</li>
              <li>Product is contacted with UV light (Quartz Surface Only)</li>
              <li>Product is used for flooring applications</li>
              <li>Product is used exceeded heat level</li>
              <li>Product is exposure to weather conditions</li>
              <li>Improper care and maintenance</li>
              <li>Improper purpose uses of the product</li>
              <li>{`It was damaged by applying any form of chemical foam & liquor on the product`}</li>
              <li>Cutting and chopping directly on the surfaces</li>
              <li>Uses of sharp items directly on the surface</li>
              <li>
                {`It does not cover seam performance, adhesives and caulks caused
                by the substrate's movement, cabinets, flooring foundation, and
                thermal shock`}
              </li>
              <li>Damages caused by the installation of plumbing fixture</li>
              <li>Damages caused by the installation of sink</li>
              <li>Damages caused by renovation works</li>
              <li>Altering works on the product by any third parties</li>
              <li>Does not cover the distribution of pattern</li>
              <li>
                Does not cover the move of the original installed location to a
                new location
              </li>
              <li>
                Does not cover the install of the product on unoccupied
                structures
              </li>
              <li>
                Does not cover product and/or service that have not been paid in
                full
              </li>
              <li>
                Warranty would be void if the product used to be serviced or
                maintained by any third party
              </li>
              <li>
                Warranty will be void if the product is moved from the original
                location
              </li>
              <li>
                This warranty is not transferable from the original owner of the
                structure to a new owner if the owner sell/transfer the
                ownership of the structure
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Warranty;
