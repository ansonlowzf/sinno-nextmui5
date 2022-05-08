import { Grid, Button } from "@mui/material";
import MuiNextLink from "./MuiNextLink";

export const SinnoButton = ({ linkUrl, btnText }) => {
  return (
    <Grid container item justifyContent="center">
      <MuiNextLink href={linkUrl} underline="none" sx={{ mb: 5 }}>
        <Button variant="outlined" size="large" aria-label={btnText}>
          {btnText}
        </Button>
      </MuiNextLink>
    </Grid>
  );
};
