"use client";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <HeroSection />
      <Header />
      <AboutMe />
      <Activities />
      <Footer />
    </div>
  );
}