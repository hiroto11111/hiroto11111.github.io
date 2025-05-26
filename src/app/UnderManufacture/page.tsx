import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function UnderManufacture() {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#fff"
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "#000",
        }}
      >
        製作途中です。もう少々お待ちください。
      </Typography>
      <Button
        variant="contained"
        component={Link}
        href="/"
        sx={{
          bgcolor: "#000",
          color: "#fff",
          "&:hover": {
            bgcolor: "#333",
            color: "#fff",
          },
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          fontSize: 16,
        }}
      >
        ホームに戻る
      </Button>
    </Box>
  );
}