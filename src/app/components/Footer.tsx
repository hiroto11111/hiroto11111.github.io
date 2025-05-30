import { Box, Typography } from "@mui/material";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "#778899",
        color: "#fff",
        py: 2,
        textAlign: "center",
        mt: 0,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
        <a href="#top" style={{ color: "#fff", textDecoration: "none" }}>Top</a>
        <a href="#aboutme" style={{ color: "#fff", textDecoration: "none" }}>About</a>
        <a href="#activities" style={{ color: "#fff", textDecoration: "none" }}>Activities</a>
        <a href="#hobby" style={{ color: "#fff", textDecoration: "none" }}>Hobby</a>
        <a href="#deliverables" style={{ color: "#fff", textDecoration: "none" }}>Deliverables</a>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 1 }}>
        <a
          href="https://github.com/hiroto11111"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: 28 }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/daaaasu8/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: 28 }}
        >
          <FaInstagram />
        </a>
      </Box>
      <Typography variant="body2">© 2025 Nishihiro&apos;s Portfolio</Typography>
    </Box>
  );
}