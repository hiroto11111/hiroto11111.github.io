import { Box, Typography } from "@mui/material";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#778899",
        color: "#fff",
        py: 2,
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 2000,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
      }}
    >
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