import { FunctionComponent, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  Grid,
  Button,
} from "@material-ui/core";

export const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <Grid container>
          <Grid item xs={3}>
            <div className={classes.brand}>
              <img src="/images/movida-logo.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.menu}>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">O que é</a>
                </li>
                <li>
                  <a href="">Como funciona</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Benefícios</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Button className={classes.ctaButton}>
              Quero Participar
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: "100%",
      position: "absolute",
      zIndex: 99,
      left: 0,
      top: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100px",
      "& * div ": {
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
    },
    brand: {
      width: "100%",
    },
    menu: {
      width: "100%",
      color: "#FFFFFF",

      "& ul": {
        fontWeight: "700",
        lineHeight: "30px",
        fontSize: "14px",
        height: "100%",
        padding: 0,
        margin: 0,
        
        "& li": {
          position: "relative",
          paddingLeft: 0,
          height: "100%",
          display: "inline-block",
          verticalAlign: "middle",
          lineHeight: "inherit",
          "& a": {
            fontFamily: "Nunito Sans",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "flex",
            position: "relative",
            zIndex: 1,
            height: "100%",
            alignItems: "center",
            verticalAlign: "middle",
            padding: "0 32px",
            color: "inherit",
            opacity: 1,
            transition: "0.2s",
          },
        },
      },
    },
    ctaButton: {
      border: "2px solid rgba(255,255,255, 0.7)",
      padding: "10px 25px",
      background: "none",
      color: "#fff",
      transition: "all 0.2s ease",

      "&:hover": {
        background: "rgba(204, 120, 47, 0.6)",
        border: "2px solid rgba(204, 120, 47, 1)",
      }
    }
  })
);
