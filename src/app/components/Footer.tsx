import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#000000",
        color: "#fff",
        py: 2,
        textAlign: "center",
        width: "100%",
        mt: 0,
      }}
    >
      <Typography variant="body2">© 2025 MyPortfolio. All rights reserved.</Typography>
    </Box>
  );
}