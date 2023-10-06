import React from "react";
import { Drawer, DrawerHeader } from "./LayoutUtils";
import { Box, List, ListItem, ListItemText, Typography, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import "../../assets/css/layout.css";

interface SideBarProps {
  open: boolean
  handleDrawer: () => void;
}

export default function SideBar({open, handleDrawer}: SideBarProps) {

  return (
    <Drawer variant="permanent" open={open} >
      <DrawerHeader>
      </DrawerHeader>
      <Box className="divider-box">
        <Divider className="sidebar-divider" variant="middle"/>
      </Box>
      <List className="button-list">
        <ListItem className="expand-list-item">
          <ListItemButton className="expand-sidebar-button" onClick={handleDrawer}>
            <ListItemIcon className="list-item-expand-button-icon">
              {open ? (
                <ChevronLeft className="list-item-expand-button-icon-icon"/>
              ):(
                <ChevronRight className="list-item-expand-button-icon-icon"/>
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem key="home">
          <ListItemButton className={`list-generic-sidebar-button ${window.location.pathname === "/shanet220_site" && "active"}`}>
            <ListItemIcon className={`list-generic-sidebar-buttonicon ${open && 'active'}`}>
              <HomeIcon className="list-generic-sidebar-icon"/>
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Home"
                className={`list-generic-sidebar-text ${open && 'active'}`}
              />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}