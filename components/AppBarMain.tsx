import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { AccountCircle } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import ReactLoading from "react-loading";

export default function AppBarMain() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={showDrawer}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            World Holiday Calendar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
