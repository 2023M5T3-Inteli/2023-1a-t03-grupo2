import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../techswaps.svg";
import { Notifications, Settings, PersonOutline } from "@mui/icons-material";

export default function HomeNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FFFFFF" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={logo}
            width="131px"
            height="50px"
            alt="logo"
            sx={{ marginLeft: "-16px" }}
          />
          <div sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="#636363">
              <Settings sx={{ alignItems: "left" }} />
            </IconButton>
            <IconButton color="#636363">
              <Notifications />
            </IconButton>
            <PersonOutline
              alt="User Avatar"
              sx={{ marginLeft: "16px" }}
            />
            <Typography variant="p" color="#636363" sx={{ marginLeft: "8px" }}>
              Alexandre Fonseca
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
