import { Stack, Toolbar } from "@material-ui/core";
import * as React from "react";
import { MuiNextLink } from "../../components";
import { mainRoutes } from "../../const/nav-links";

const MainNav = () => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, lg: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {mainRoutes.map(({ name, path }, i) => (
          <MuiNextLink
            key={`${name}${i}`}
            href={path}
            variant="button"
            sx={{ color: "white", opacity: 0.7 }}
          >
            {name}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default MainNav;
