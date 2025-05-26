"use client";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: -80, opacity: 0 });
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: scrollY > 100 ? 1 : 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      ref={headerRef}
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        opacity: 0,
        transform: "translateY(-80px)",
        zIndex: 1200,
        transition: "opacity 0.6s",
        backgroundColor: "rgba(255,255,255,0.5)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} sx={{ p: 0, mr: 1.5, cursor: "pointer" }}>
            <img
              src="/kurumiicon.png"
              alt="Logo"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography component="a" href="#aboutme" color="#000" sx={{ textDecoration: "none" }}>About</Typography>
          <Typography component="a" href="#activities" color="#000" sx={{ textDecoration: "none" }}>Activities</Typography>
          <Typography component="a" href="#hobby" color="#000" sx={{ textDecoration: "none" }}>Hobby</Typography>
        </Box>
      </Toolbar>
    </AppBar>
);
}
