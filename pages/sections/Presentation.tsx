import React from "react";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";

const Presentation = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cta}>
        <div className={`${classes.child} ${classes.one}`}>
          <h3>Sou usuário padrão</h3>
          <i className={classes.nextIcon} />
        </div>
        <div className={`${classes.child} ${classes.two}`}>
          <h3>Sou motorista de aplicativo</h3>
          <i className={classes.nextIcon} />
        </div>
      </div>
      <div className={classes.presentation}>
        <Grid container>
          <Grid item md={5}>
            <h4>Sobre o Movida Piloto</h4>
            <h2>Sua plataforma personalizada e criada sob medida</h2>
            <p>
              Uma solução inovadora voltada para você motorista! Aqui você
              poderá ganhar benefícios como: descontos em carwash, higienização
              e abastecimento, entre muitos outros, e sem nenhum trabalho:{" "}
              <strong>
                você precisa apenas utilizar os serviços da Movida!
              </strong>
              E ainda mais que isso! A plataforma garante autonomia para você
              conseguir desde a contratação de serviços até a resolução de
              pendências de modo fácil e ágil, sem necessitar de deslocamento ou
              de uma ligação.
            </p>
            <blockquote>Afinal de contas, seu tempo é precioso para gastar com filas. </blockquote>
          </Grid>
          <Grid item md={7} >
            <img src="/images/images/1.png" alt="" className={classes.img}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cta: {
      zIndex: 99,
      width: "81%",
      margin: "-12.2vh auto 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      height: "120px",
      color: "white",
      fontFamily: "Nunito Sans",
      fontSize: "1.395rem",

      "& h3": {
        fontWeight: 100,
      },
    },
    child: {
      width: "50%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "inherit",
      flexDirection: "row",
      padding: `0 ${theme.spacing(10)}px`,
    },
    one: {
      background: "#14202B",
      borderTopLeftRadius: "5px",
    },
    two: {
      background: "#E84719",
      borderTopRightRadius: "5px",
    },
    nextIcon: {
      position: "relative",
      zIndex: 1,
      width: "50px",
      height: "2px",
      display: "inline-block",
      verticalAlign: "middle",
      borderTop: "2px solid white",

      "&:after": {
        content: "''",
        position: "absolute",
        width: "10px",
        height: "10px",
        right: "0",
        transition: "all 0.4s, color 0s",
        top: "-2px",
        borderTop: "2px solid white",
        transform: "rotate(-45deg)",
        transformOrigin: "100% 0",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "10px",
        height: "10px",
        right: "0",
        transition: "all 0.4s, color 0s",
        bottom: "0",
        borderBottom: "2px solid white",
        transform: "rotate(45deg)",
        transformOrigin: " 100% 100%",
      },
    },
    presentation: {
      width: "81%",
      margin: "0 auto",
      boxShadow: "6px 5px 30px 0px rgba(0, 0, 0, 0.12)",
      padding: `${theme.spacing(10)}px`,
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
        color: "#616161",
        fontSize: theme.typography.pxToRem(17),
      },
      "& blockquote": {
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        fontSize: "30px",
        lineHeight: "40px",
        display: "inline-block",
        position: "relative",
        zIndex: "1",
        fontWeight: 700,
        padding: "34px 43px",
        background: " #f5f5f5",
        borderRadius: " 0 10px 10px 0",
        width: " 100%,",
        margin: 0,
      },
    },
        img: {
          float: "right"
        }
  })
);

export default Presentation;
