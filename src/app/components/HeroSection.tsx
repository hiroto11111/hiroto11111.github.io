"use client";
import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import gsap from "gsap";

export default function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ["/background3.jpg", "/hiroshima.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        zIndex: 0, 
        overflow: "hidden",
      }}
    >
      {/* 背景画像 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src={bgImages[bgIndex]}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: 1,
          }}
        />
      </Box>
      {/* テキストを中央に配置 */}
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,

      }}>
        <Typography
          id="heroText"
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            pointerEvents: "auto",
            textShadow: "0 2px 16px #000, 0 0 8px #fff8",
            fontFamily: "'Noto Serif JP', sans-serif"
          }}
        >
          Welcome to my Portfolio
        </Typography>
      </Box>
    </Box>
  );
}