"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.set(footerRef.current, { y: 80, opacity: 0 });
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (footerRef.current) {
        gsap.to(footerRef.current, {
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
    <Box ref={footerRef} component="footer" sx={{ position: "fixed", left: 0, right: 0, bottom: 0, bgcolor: "primary.main", color: "#fff", py: 2, textAlign: "center", opacity: 0, transform: "translateY(80px)", zIndex: 1200, transition: "opacity 0.6s" }}>
      <Typography variant="body2">© 2025 MyPortfolio. All rights reserved.</Typography>
    </Box>
  );
}
