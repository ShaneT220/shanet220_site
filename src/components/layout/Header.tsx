import React from "react";
import { AppBar } from "./LayoutUtils";
import { Toolbar, Box, List, ListItem, Typography, ListItemIcon, ListItemButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../assets/css/layout.css";

interface HeaderProps {
  open: boolean
}

export default function Header({open}: HeaderProps) {

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/shane-tomasello-5334a09a/")
  }

  function handleGitHubClick() {
    window.open("https://github.com/ShaneT220")
  }

  return (
    <AppBar position="fixed" open={open} >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" className="header-title">
          Shane Tomasello's Portfolio
        </Typography>
        <Box className="head-box">
          <List className="head-box-list">
            <ListItem key="github" onClick={handleGitHubClick}>
              <ListItemButton className="head-box-list-button">
                <ListItemIcon className="head-box-list-button-icon">
                  <GitHubIcon className="head-box-list-button-iconicon"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem key="linkedin">
              <ListItemButton className="head-box-list-button" onClick={handleLinkedInClick}>
                <ListItemIcon className="head-box-list-button-icon">
                  <LinkedInIcon className="head-box-list-button-iconicon"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}