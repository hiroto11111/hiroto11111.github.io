"use client";

import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

type BookCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  summary: string;
  details: string;
  impressions: string;
  link: string;
};

export default function BookCard({
  imageSrc,
  imageAlt,
  title,
  summary,
  details,
  impressions,
  link
}: BookCardProps) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
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
            height: 300,
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
            fill
            style={{
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

        {/* あらすじ */}
        <Typography
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 15,
            color: "#333",
            mb: 1.5,
            textAlign: "left",
            width: "100%",
            pl: 0.5,
          }}
        >
          {summary}
        </Typography>

        {/* VIEW MORE */}
        <Box
          component="button"
          type="button"
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
            background: "none",
            border: "none",
            p: 0,
            "&:hover": { color: "#555" },
          }}
          onClick={() => setOpen(true)}
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

      {/* モーダルウィンドウ */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth sx={{ "& .MuiDialog-paper": { maxHeight: 420 } }}>
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {title}
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3}}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={200}
              height={280}
              style={{
                objectFit: "cover",
                borderRadius: 6,
                marginBottom: 16,
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 1 }}>あらすじ</Typography>
              <Typography sx={{ mb: 2, whiteSpace: "pre-line" }}>{details}</Typography>
              <Typography sx={{ fontWeight: "bold", mb: 1 }}>感想</Typography>
              <Typography sx={{ mb: 2, whiteSpace: "pre-line" }}>{impressions}</Typography>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2" }}>
                公式ページへ
              </a>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}