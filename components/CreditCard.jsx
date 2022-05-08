import { Typography, Grid } from "@mui/material";
import Image from "next/image";

const CreditCard = () => {
  return (
    <>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        sx={{ py: { xs: 5, sm: 7, md: 10 } }}
      >
        <Image
          src="/credit-card.png"
          alt="credit card icon"
          width={200}
          height={150}
        />
        <Typography sx={{ pt: { xs: 2, sm: 0 } }}>
          Credit Card Payment Accepted
        </Typography>
      </Grid>
    </>
  );
};

export default CreditCard;
