import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FFFF",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

export default theme;