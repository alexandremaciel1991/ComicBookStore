import { createTheme } from "@mui/material/styles";
import { Typography } from "./typography";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    blue: string;
    orange: string;
    white: string;
  }

  interface PaletteOptions {
    white: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#6565651f",
    },
    success: {
      main: "#4caf50",
    },
    white: "#fff",
    text: { primary: "#000" },
  },
  typography: Typography,
});

export default theme;
