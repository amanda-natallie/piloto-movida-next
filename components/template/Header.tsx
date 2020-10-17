import React, { FunctionComponent, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  Grid,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockIcon from '@material-ui/icons/Lock';

interface Iprops {
  source?: string;
}

export const Header: FunctionComponent<Iprops> = ({ source }) => {
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
                  <Link href="/">
                    <a href="">Home</a>
                  </Link>
                </li>
                <li>
                  <a href="/sobre">O que é</a>
                </li>
                <li>
                  <a href="">Como funciona</a>
                </li>
                <li>
                  <Link href="/login">
                    <a href="">Login</a>
                  </Link>
                </li>
                <li>
                  <a href="">Benefícios</a>
                </li>
              </ul>
            </div>
          </Grid>

          {source && source === "dashboard" ? (
            <Grid item xs={3}>
              <Link passHref href="/">
                <Button className={classes.ctaButton}>
                  Fazer logout &nbsp;&nbsp;
                  <ExitToAppIcon />
                </Button>
              </Link>
            </Grid>
          ) : (
            <Grid item xs={3}>
              <Link passHref href="/login">
                <Button className={classes.ctaButton}>
                  Area Restrita &nbsp;&nbsp;
                  <LockIcon />
                </Button>
              </Link>
            </Grid>
          )}
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
        justifyContent: "center",
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
            padding: "0 20px",
            color: "inherit",
            opacity: 1,
            transition: "0.2s",

            "&:after": {
              content: "''",
              position: "absolute",
              bottom: 30,
              left: 0,
              right: 0,
              width: "100%",
              height: "1px",
              transform: "scaleX(0)",
              backgroundColor: "white",
              transition: "transform 0.3s",
            },
            "&:hover": {
              "&:after": {
                transform: "scaleX(1)",
              },
            },
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

      "& * ": {
        textDecoration: "none",
        color: "#fff",
      },

      "&:hover": {
        background: "rgba(204, 120, 47, 0.6)",
        border: "2px solid rgba(204, 120, 47, 1)",
      },
    },
  })
);
