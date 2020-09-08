import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import classes from "*.module.css";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <p>
          <img src="/images/movida-logo.png" alt="" />
        </p>
        <p>Copyright © 2020 @ Movida Piloto</p>
      </div>
    </footer>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: "100%",
      height: "120px",
      background: "#081219", 
      marginTop: 60,
      color: "white"
    },
    inner: {
      width: "80%",
      height: "100%", 
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 auto"
    },
  })
);
export default Footer;
