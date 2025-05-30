"use client"
import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Image from "next/image";


export default function Activities() {
  const [hover, setHover] = useState(false);

  return (
    <Box
      id="activities"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      textAlign="center"
      bgcolor={"#fff"}
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        color: "#000",
        paddingTop: "65px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "'Noto Serif JP', sans-serif" }}
      >
        Activities
      </Typography>
      <Divider
        sx={{
          borderColor: "#000",
          borderWidth: "2px",
          width: "60%",
          mx: "auto",
          mt: "5px",
          mb: "5px"
        }}
      />

      <Box
        sx={{
          width: 400,
          height: "100%",
          bgcolor: "#fff",
          p: 3,
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 画像とロゴ */}
        <Box sx={{ width: "100%", height: 200, mb: 2, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src="/kakuni.jpg"
            alt="8ban"
            width={300}
            height={200}
            style={{
              borderRadius: 4,
              display: "block",
            }}
          />
        </Box>

        {/* 説明文 */}
        <Typography sx={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: "#000", mb: 1, textAlign: "left", width: "100%", pl: 1 }}>
          Food Creation Project
        </Typography>
        <Typography sx={{ fontFamily: 'Sawarabi Mincho', fontSize: 18, color: "#000", mb: 2, textAlign: "left", width: "100%", pl: 1 }}>
          8番ラーメン工大前店で使えるポイントサイトを開発しています
        </Typography>

        {/* VIEW MORE */}
        <Box
          component="a"
          href="http://foodcreation.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: "0.1em",
            color: "#222",
            mt: "auto",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "#555" }
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Box
            sx={{
              transition: "transform 0.2s",
              transform: hover ? "translateX(8px)" : "translateX(0)",
              display: "flex",
              alignItems: "center"
            }}
          >
            VIEW MORE
            <Box sx={{ minWidth: 150, flex: 1, borderBottom: "1px solid #222", mx: 1 }} />
            <Box sx={{ fontSize: 22, lineHeight: 1 }}>→</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}