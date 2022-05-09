import { Menu, MenuItem } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
import * as React from "react";

const QuartzStoneMenu = ({ anchorEl, openMenu, handleClose }) => {
  return (
    <Menu
      id="qs-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "qs-button",
        onMouseLeave: handleClose,
      }}
    >
      <MenuItem onClick={handleClose}>
        <MuiNextLink href="/quartz-stone" underline="none">
          In-Depth Quartz Stone
        </MuiNextLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MuiNextLink href="/quartz-stone/caesarstone" underline="none">
          Caesarstone
        </MuiNextLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MuiNextLink href="/quartz-stone/zenstone" underline="none">
          Zenstone
        </MuiNextLink>
      </MenuItem>
    </Menu>
  );
};

export default QuartzStoneMenu;
