import { FunctionComponent, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
} from "@material-ui/core";
import { Header } from "./template/Header";

interface Iprops {
  teste?: string;
}
export const Container: FunctionComponent<Iprops> = ({ children, teste }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <CssBaseline />
        <Header />
        {children}
      </div>
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
