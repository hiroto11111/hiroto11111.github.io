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
        left: 0,
        bottom: 0,
        zIndex: 1300,
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
      <Typography variant="body2">© 2025 Nishihiro's Portfolio</Typography>
    </Box>
  );
}