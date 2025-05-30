"use client"
import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

function Dcord({
  imageSrc,
  imageAlt,
  title,
  explanation,
  link,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  explanation: string;
  link: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 300,
        minWidth: 0,
        height: "100%",
        bgcolor: "#fff",
        p: 2.5,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 170,
          mb: 1.5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={220}
          height={170}
          style={{
            borderRadius: 6,
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "'Noto Serif JP', sans-serif",
          fontSize: 20,
          color: "#000",
          mb: 1,
          textAlign: "left",
          width: "100%",
          pl: 0.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Noto Serif JP', sans-serif",
          fontSize: 16,
          color: "#000",
          mb: 1,
          textAlign: "left",
          width: "100%",
          pl: 0.5,
        }}
      >
        {explanation}
      </Typography>
      <Box
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: "bold",
          letterSpacing: "0.1em",
          color: "#222",
          mt: "auto",
          textDecoration: "none",
          transition: "color 0.2s",
          "&:hover": { color: "#555" },
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box
          sx={{
            transition: "transform 0.2s",
            transform: hover ? "translateX(8px)" : "translateX(0)",
            display: "flex",
            alignItems: "center",
          }}
        >
          VIEW MORE
          <Box
            sx={{
              minWidth: 70,
              flex: 1,
              borderBottom: "1px solid #222",
              mx: 1,
            }}
          />
          <Box sx={{ fontSize: 20, lineHeight: 1 }}>→</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function Deliverables() {
  return (
    <Box
      id="deliverables"
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
        Deliverables
      </Typography>
      <Divider
        sx={{
          borderColor: "#000",
          borderWidth: "2px",
          width: "60%",
          mx: "auto",
          mt: "5px",
          mb: "5px",
        }}
      />

      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={2}
        justifyContent="center"
        alignItems="stretch"
        width="100%"
        maxWidth={1000}
        mx="auto"
        mt={3}
      >
        <Dcord
          imageSrc="/tictactoe.png"
          imageAlt="三目並べ"
          title="三目並べ"
          explanation="少し変わった三目並べ"
          link="/TicTacToe"
        />
      </Box>
    </Box>
  );
}