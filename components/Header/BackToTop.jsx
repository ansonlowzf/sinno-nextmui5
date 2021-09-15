import { useScrollTrigger, Zoom, Box } from "@mui/material";

const BackToTop = ({ children }) => {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="back to top"
        sx={{
          position: "fixed",
          zIndex: 999,
          bottom: { xs: 16, md: 48 },
          right: { xs: 16, md: 48 },
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default BackToTop;
