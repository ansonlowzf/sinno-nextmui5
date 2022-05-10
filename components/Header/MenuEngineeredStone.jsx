import { Menu, MenuItem, Button } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
import * as React from "react";

const MenuQuartzStone = () => {
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
        id="quartz-stone-menu"
        aria-controls={open ? "quartz-stone-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        Engineered Stone ▽
      </Button>
      <Menu
        id="qs-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "quartz-stone-button",
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/quartz-stone"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            In-Depth Quartz Stone
          </MuiNextLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/quartz-stone/caesarstone"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            Caesarstone Quartz Surface
          </MuiNextLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/quartz-stone/zenstone"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            Zenstone Quartz Surface
          </MuiNextLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiNextLink
            href="/sintered-stone"
            underline="none"
            sx={{ textTransform: "uppercase" }}
          >
            sintered stone
          </MuiNextLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuQuartzStone;
