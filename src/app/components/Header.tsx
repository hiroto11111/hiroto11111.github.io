"use client";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
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
    <AppBar ref={headerRef} position="fixed" color="primary" sx={{ top: 0, left: 0, right: 0, opacity: 0, transform: "translateY(-80px)", zIndex: 1200, transition: "opacity 0.6s" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img src="/kurumiicon.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography component="a" href="#about" color="inherit" sx={{ textDecoration: "none" }}>About</Typography>
          <Typography component="a" href="#projects" color="inherit" sx={{ textDecoration: "none" }}>Projects</Typography>
          <Typography component="a" href="#contact" color="inherit" sx={{ textDecoration: "none" }}>Contact</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
