import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.About}>
      <section className={`${classes.aboutSec1}`}>
        <div className={`${classes.imgBox}`}>
          <img
            src="/images/images/smartphone_uber_car.jpg"
            className={`${classes.myImg}`}
            alt="Imagem"
          />
        </div>

        <div className={`${classes.conteudo_sec1}`}>
          <h3>SOBRE A MOVIDA PILOTO</h3>
          <h2>
            O seu portal administrativo para gerenciar suas corridas com
            facilidade
          </h2>
          <p>
            Se você é um motorista de aplicativo e gasta horas para resolver
            problemas burocráticos, seus problemas acabaram. Com o Movida Piloto
            você consegue extender o período de locação do veiculo com
            assinatura digitalizada, fazer pagamento online com cartão de
            crédito ou via boletos, obter informações sobre sinistro, agendar
            manutenções e vistorias, acompanhar processos de notificações de
            infraçao de transito e contestação de multas com facilidade entre
            outras coisas.
          </p>

          <div className={`${classes.destaqueSec1}`}>
            <p>Ganhe mais tempo no seu dia-a-dia. Experimente!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    About: {
      width: "75%",
      margin: "0 auto",
    },
    myImg: {
      height: "100%",
      width: "80%",
      objectFit: "cover",
    },
    conteudo_sec1: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "510px",
      "& h3": {
          color: theme.palette.primary.main,
          fontSize: theme.typography.pxToRem(14),
        },
        "& h2": {
            fontFamily: "'Bree Serif', serif",
            fontWeight: 300,
            lineHeight: 1.3,
        fontSize: theme.typography.pxToRem(35),
      },
    },
    imgBox: {
      width: "50%",
      height: "530px",
      padding: "20px",
    },
    aboutSec1: {
      display: "flex",
      justifyContent: "space-around",
      padding: "20px",
    },
    destaqueSec1: {
      fontSize: theme.typography.pxToRem(28),
      background: "#ececec",
      borderLeft: "2px solid rgb(247, 125, 0)",
      padding: "15px",
      fontWeight: "lighter",
      fontFamily: "'Bree Serif', serif",
    },
  })
);

export default About;
