import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const Benefits = () => {
  const classes = useStyles();

  const benefits = [
    "Descontos no abastecimento em postos de gasolina parceiros",
    "Descontos em carwash",
    "Descontos em tarifas Sem Parar",
    "Administrativo online",
    "Resolva suas pendências onde estiver",
  ];

  return (
    <Grid container className={classes.benefits}>
      <Grid item md={6} className={classes.one} />
      <Grid item md={6} className={classes.two}>
        <h4>Nossos benefícios</h4>
        <h2>Um mar de parcerias para beneficiar você!</h2>
        <p>
          Nós da Movida, selecionamos benefícios para que você, motorista, possa
          oferecer cada vez um serviço melhor
        </p>
        <ul>
          {benefits.map((e: string, key: number) => (
            <li key={key}>
              <span className={classes.icon}>
                <CheckIcon />
              </span>
              <span className={classes.desc}>{e}</span>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    benefits: {
      width: "100%",
      height: "75vh",
    },
    one: {
      height: "110%",
      background: "url(/images/bg/2.png) bottom left no-repeat",
      borderTopRightRadius: "10px",
      backgroundAttachment: "fixed",
      backgroundSize: "auto 100%",
    },
    two: {
      background: theme.palette.secondary.main,
      borderBottomLeftRadius: "10px",
      margin: "40px 0px 0px 0px",
      height: "100%",
      padding: "0 13vw 0 6vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      color: "white",

      "& h4": {
        color: theme.palette.primary.main,
        fontSize: theme.typography.pxToRem(15),
        margin: "0 0 30px 0",
        textTransform: "uppercase",
      },
      "& h2": {
        fontFamily: "'Bree Serif', serif",
        fontSize: theme.typography.pxToRem(36),
        lineHeight: "40px",
        fontWeight: "inherit",
        margin: "0 0 10px 0",
      },
      "& p": {
        margin: "30px 0",
        lineHeight: "32px",
        fontSize: theme.typography.pxToRem(17),
        fontFamily: "Nunito Sans",
      },

      "& ul": {
        marginLeft: "-38px",
      },
      "& ul li": {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Nunito Sans",
        margin: "15px 0",
      },
    },
    icon: {
      margin: "0px 30px 0px 0px",
      padding: "11px",
      display: "flex",
      backgroundColor: " #24313A",
      color: "#ffffff",
      borderRadius: "100%",
      alignItems: "inherit",
      justifyContent: "inherit",
    },
    desc: {
      marginTop: "10px",
      lineHeight: "21px",
      fontSize: theme.typography.pxToRem(17),
      fontFamily: "Nunito Sans",
    },
  })
);

export default Benefits;
