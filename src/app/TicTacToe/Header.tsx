import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        zIndex: 1200,
        transition: "opacity 0.6s",
        backgroundColor: "rgba(255,255,255,0.5)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Toolbar sx={{ px: 2 }}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 0, mr: 1.5, cursor: "pointer" }}>
            <Image
              src="/kurumiicon.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography
            component="a"
            href="#"
            color="#000"
            fontSize={30}
            fontFamily={"'Sawarabi Mincho', sans-serif"}
            sx={{ textDecoration: "none" }}
          >
            三目並べ
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Typography
            component="a"
            href="/"
            color="#000"
            sx={{ textDecoration: "none" }}
          >
            ホームに戻る
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}