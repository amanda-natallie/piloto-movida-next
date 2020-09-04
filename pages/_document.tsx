import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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

//server side rendering para material-ui https://material-ui.com/guides/server-rendering/
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/images/pwa-192.png" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
