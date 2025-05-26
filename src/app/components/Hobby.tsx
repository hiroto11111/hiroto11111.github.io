import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";

function HobbyCard({
  imageSrc,
  imageAlt,
  title,
  link,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
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
      {/* 画像 */}
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
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: 220,
            height: 150,
            borderRadius: 6,
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* タイトル */}
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

      {/* VIEW MORE */}
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
          fontSize: 14, // 大きく
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

// ...existing code...
export default function Hobby() {
  return (
    <Box
      id="hobby"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      textAlign="center"
      bgcolor={"#fff"}
      sx={{
        color: "#000",
        paddingTop: "65px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "'Noto Serif JP', sans-serif" }}
      >
        Hobby
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
        <HobbyCard
          imageSrc="/book.png"
          imageAlt="book"
          title="読書"
          link="/ReadingLog"
        />

        <HobbyCard
          imageSrc="/yakyu.jpg"
          imageAlt="baseball"
          title="野球・サッカー"
          link="/UnderManufacture"
        />

        <HobbyCard
          imageSrc="/headphone.png"
          imageAlt="music"
          title="音楽"
          link="/UnderManufacture"
        />
      </Box>
    </Box>
  );
}