"use client";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Activities from "@/components/Activities";
import Hobby from "@/components/Hobby";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <HeroSection />
      <Box sx={{ position: "relative", zIndex: 2, paddingTop: "100vh" }}> 
        <Header />
        <AboutMe />
        <Activities />
        <Hobby />
        <Footer />
      </Box>
    </div>
  );
}