import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily:
      '"Nunito Sans", sans-serif',
  },
  palette: {
    primary: {
      main: "rgb(247, 73, 25)",
    },
    secondary: {
      main: "rgb(20, 32, 43)",
    },
  },
 
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          padding: 0,
          margin: 0,
          lineHeight: "1.875",
          fontFamily: "Nunito Sans",

          a: { textDecoration: "none" },
          "a:active": { textDecoration: "none" },
          "a:focus": { textDecoration: "none" },
          "a:hover": { textDecoration: "none" },
        },
      },
    },
  },
});