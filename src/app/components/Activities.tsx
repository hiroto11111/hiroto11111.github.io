import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";

export default function Activities() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start" // ← ここをflex-startに
      textAlign="center"
      sx={{
        color: "#000",
        paddingTop: "40px", // ヘッダーの高さ分だけ余白
        paddingBottom: 4,
        minHeight: "0",     // ← 余白を詰めるため0または削除
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
            height: 300,
            bgcolor: "#f4f4f4",
            p: 3,
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
        }}
        >
        {/* 縦書きラベル */}
        <Typography
            sx={{
            position: "absolute",
            left: 0,
            top: 32,
            writingMode: "vertical-rl",
            fontSize: 12,
            color: "#333",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            userSelect: "none",
            }}
        >
            ORIGINAL BRAND
        </Typography>

        {/* 画像とロゴ */}
        <Box sx={{ width: "100%", height: 120, mb: 2, position: "relative" }}>
            <img
            src="/nobegane.jpg" // 画像ファイル名を正しく
            alt="nobegane"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
                display: "block",
            }}
            />
            {/* ロゴ（画像の中央に重ねる場合） */}
            <Typography
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 32,
                textShadow: "0 2px 8px #000",
                textAlign: "center",
                width: "100%",
                letterSpacing: "0.1em",
            }}
            >
            <span style={{ fontSize: 24, display: "block" }}>nobegane</span>
            </Typography>
        </Box>

        {/* 説明文 */}
        <Typography sx={{ fontSize: 13, color: "#333", mb: 3 }}>
            伝統工芸のさらなる可能性を追求する楽芸工房のオリジナルブランド
        </Typography>

        {/* VIEW MORE */}
        <Box
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
            }}
        >
            VIEW MORE
            <Box sx={{ flex: 1, borderBottom: "1px solid #222", mx: 1 }} />
            <Box sx={{ fontSize: 22, lineHeight: 1 }}>→</Box>
        </Box>
      </Box>
    </Box>
  );
}