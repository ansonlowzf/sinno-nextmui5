import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MuiNextLink from "./MuiNextLink";

const MenuNaturalStone = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="natural-stone-menu"
        aria-controls={open ? "natural-stone-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
        size="large"
        sx={{
          display: "block",
          textTransform: "uppercase",
        }}
      >
        natural stone ▽
      </Button>
      <Menu
        id="natural-stone-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "natural-stone-button",
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/granite"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            granite
          </MuiNextLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/marble"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            marble
          </MuiNextLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuNaturalStone;
