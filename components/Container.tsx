import { FunctionComponent, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { Header } from "./template/Header";
import { theme } from "../utils/theme";
import Footer from "./template/Footer";

interface Iprops {
  source?: "dashboard" | "frontpage";
}
export const Container: FunctionComponent<Iprops> = ({ children, source }) => {
  const classes = useStyles();

  return (
    <>
    <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <CssBaseline />
        <Header source={source}/>
        {children}
        <Footer />
      </div>
    </MuiThemeProvider>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      marginRight: "auto",
      marginLeft: "auto",
      position: "relative",
      flexDirection: "column",
    },
  })
);
