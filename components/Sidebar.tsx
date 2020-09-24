import React, { memo } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import styles from "../assets/css/styles.module.scss"

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid item md={3}>
      <div className={styles.teste}>
        <div className={classes.avatar}>
          <img src="/images/images/profile-dp.jpg" alt="avatar photo" />
          <h3>Suellen Mariano Garcia</h3>
          <small>Ultima vez online ontem as 19:35</small>
        </div>
        <div className={classes.rank}>
          <h5>Rank: #6595 (nacional)</h5>
          <p>
            <span>Seu plano: Ouro</span> <span>ver mais</span>
          </p>
        </div>
        <Button className={classes.btn}>
          <Link href="/portal">Voltar</Link>
        </Button>
      </div>
    </Grid>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      width: "100%",
      padding: "30px",
      boxShadow: "6px 5px 30px 0px rgba(0,0,0,0.12)",
    },
    avatar: {
      margin: "10px 0",
      textAlign: "center",
      paddingBottom: 10,
      borderBottom: "1px solid rgba(0,0,0,0.12)",
      "& img": {
        borderRadius: "100%",
        margin: "0 auto",
        display: "block",
      },
      "& h3": {
        fontSize: "0.875rem",
        fontWeight: 500,
        fontFamily: "'Bree serif', serif",
        margin: " 15px 0 0 0",
      },
    },
    rank: {
      "& h5": {
        marginBottom: 0,
      },
      "& p": {
        margin: 0,
        display: "flex",
        justifyContent: "space-between",

        "& span:nth-child(2)": {
          color: theme.palette.primary.main,
          textDecoration: "underline",
        },
      },
    },
    btn: {
      width: "100%",
      "& > span > a": {
        display: "block",
        zIndex: 14,
        fontFamily: "Nunito Sans",
        width: "100%",
        fontWeight: 300,
        fontSize: "0.875rem",
        borderStyle: "solid",
        borderWidth: "1px",
        marginTop: 20,
        borderRadius: "3px",
        padding: "5px 0",
        transition: "all 0.3s ease",
        borderColor: "rgba(255, 255, 255, 0)",
        backgroundColor: "rgb(255, 74, 23)",
        color: "rgb(255, 255, 255)",
        textDecoration: "none",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 1)",
          backgroundColor: "none",
        },
      },
    },
  })
);
export default memo(Sidebar);
