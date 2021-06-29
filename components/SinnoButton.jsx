import { Grid, Button } from "@material-ui/core";
import { MuiNextLink } from "../components";

export const SinnoButton = ({ linkUrl, btnText }) => {
  return (
    <Grid container item justifyContent="center">
      <MuiNextLink href={linkUrl}>
        <Button variant="outlined" aria-label={btnText}>
          {btnText}
        </Button>
      </MuiNextLink>
    </Grid>
  );
};
