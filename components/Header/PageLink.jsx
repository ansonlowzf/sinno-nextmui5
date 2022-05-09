import MuiNextLink from "@components/MuiNextLink";
import { Button } from "@mui/material";

const PageLink = ({ pageUrl, pageName, ...buttonProps }) => {
  return (
    <MuiNextLink href={pageUrl} underline="none">
      <Button
        {...buttonProps}
        size="large"
        sx={{
          display: "block",
          textTransform: "uppercase",
        }}
      >
        {pageName}
      </Button>
    </MuiNextLink>
  );
};

export default PageLink;
