import { createTheme } from "@mui/material/styles";
import { Property } from "csstype";
let t = createTheme();

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    button1: TypographyStyleOptions | undefined;
    cart: TypographyStyleOptions | undefined;
  }
}

export const Typography = () => {
  return {
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
    cart: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "0.6rem",
    },
    button: {
      fontSize: "1.5rem",
      fontWeight: 700,
      [t.breakpoints.down("md")]: {
        fontSize: "1.3rem",
      },
    },
    button1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      textTransform: "lowercase" as Property.TextTransform,
    },
  };
};
