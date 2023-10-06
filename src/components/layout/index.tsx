import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import "../../assets/css/layout.css";
import { Outlet } from "react-router"
import CssBaseline from '@mui/material/CssBaseline';


export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => setOpen((prev) => !prev);
  

  return (
    <Box component="div" className="layout-main">
      <CssBaseline/>
      <Header open={open}/>
      <SideBar open={open} handleDrawer={handleDrawer} />
      <Outlet/>
    </Box>
  )
} 