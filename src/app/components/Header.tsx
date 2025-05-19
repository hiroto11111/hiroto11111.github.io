import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar, Link } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        {/* ロゴ */}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <Avatar src="/kurumiicon.png" alt="Logo" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="#home" color="inherit" underline="none">
            MyPortfolio
          </Link>
        </Typography>
        {/* ナビゲーション */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="#about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="#projects" color="inherit" underline="hover">
            Projects
          </Link>
          <Link href="#contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;