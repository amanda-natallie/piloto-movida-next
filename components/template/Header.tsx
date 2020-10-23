import React, { FunctionComponent, useEffect, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  Grid,
  Button,
  Hidden,
  Container,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockIcon from "@material-ui/icons/Lock";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

interface Iprops {
  source?: string;
}

export const Header: FunctionComponent<Iprops> = ({ source }) => {
  const classes = useStyles();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.screen.width > 576
        ? !menuOpen && setMenuOpen(true)
        : menuOpen && setMenuOpen(false);
    }
  }, []);

  return (
    <>
      <div className={classes.header}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className={classes.brand}>
                <img src="/images/movida-logo.png" alt="" />
              </div>
              <Hidden mdUp>
                <IconButton
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={classes.menuIcon}
                  aria-label="Menu"
                >
                  {!menuOpen ? (
                    <MenuIcon fontSize="large" />
                  ) : (
                    <MenuOpenIcon fontSize="large" />
                  )}
                </IconButton>
              </Hidden>
            </Grid>
            {menuOpen && (
              <Grid item xs={12} md={6}>
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
                    {source && source !== "dashboard" && (
                      <li>
                        <Link href="/login">
                          <a href="">Login</a>
                        </Link>
                      </li>
                    )}
                    <li>
                      <a href="">Benefícios</a>
                    </li>
                    <Hidden smUp>
                      {source && source === "dashboard" ? (
                        <li>
                          <Link passHref href="/login">
                            <a>
                              Fazer logout &nbsp;&nbsp;
                              <ExitToAppIcon />
                            </a>
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link passHref href="/login">
                            <a>
                              Area Restrita &nbsp;&nbsp;
                              <LockIcon />
                            </a>
                          </Link>
                        </li>
                      )}
                    </Hidden>
                  </ul>
                </div>
              </Grid>
            )}
            <Hidden smDown>
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
            </Hidden>
          </Grid>
        </Container>
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
        justifyContent: "space-between",
        "&:nth-of-type(3)": {
          justifyContent: "flex-end",
        },
      },
    },
    brand: {
      width: "100%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
    },
    menu: {
      width: "100%",
      justifyContent: "center !important",
      [theme.breakpoints.down("md")]: {
        background: "white",
        height: "auto !important",
        marginTop: "150px",
        zIndex: 999999
      },

      "& ul": {
        fontWeight: "700",
        lineHeight: "30px",
        fontSize: "14px",
        height: "100%",
        padding: 0,
        margin: 0,
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
        },

        "& li": {
          position: "relative",
          paddingLeft: 0,
          height: "100%",
          display: "inline-block",
          verticalAlign: "middle",
          lineHeight: "inherit",
          [theme.breakpoints.down("md")]: {
            padding: "10px 0",
            display: "block",
          },
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
            opacity: 1,
            transition: "0.2s",
            color: "#FFFFFF",
            [theme.breakpoints.down("md")]: {
              color: theme.palette.primary.main,
            },

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
    menuIcon: {
      "& * svg": {
        fill: "#fff",
        width: "30px",
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
