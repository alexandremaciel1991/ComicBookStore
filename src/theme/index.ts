import { createTheme } from "@mui/material/styles";

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

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    button1: TypographyStyleOptions | undefined;
  }

  interface TypographyOptions {
    button1: TypographyStyleOptions | undefined;
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
  typography: {
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: "2.6rem",
    },
    h2: {
      fontFamily: "Oxygen, sans-serif",
      fontWeight: 700,
      fontSize: "2.4rem",
    },
    h3: {
      fontFamily: "Oxygen, sans-serif",
      fontWeight: 700,
      fontSize: "2.0rem",
    },
    h4: {
      fontFamily: "Oxygen, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontFamily: "Oxygen, sans-serif",
      fontSize: "1.17rem",
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },

    body1: {
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    body2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },

    button: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },

    button1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      textTransform: "lowercase",
    },
  },
});

export default theme;
