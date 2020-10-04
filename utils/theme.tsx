import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily:
      '"Nunito Sans", sans-serif',
  },
  palette: {
    primary: {
      main: "rgb(247, 125, 0)",
    },
    secondary: {
      main: "rgb(20, 32, 43)",
    },
  },
 
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "0.95rem",
        textAlign: "center"
      }
    },
    MuiButton: {
      containedPrimary: {
        padding: "15px 20px"
      },
      containedSecondary: {
        padding: "15px 20px"
      }
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          padding: 0,
          margin: 0,
          lineHeight: "1.875",
          fontFamily: "'Nunito Sans', sans-serif",

        },
        a: { textDecoration: "none" },
      },
    },
  },
});