import React from 'react'
import { Intro } from '../../../components/Intro'
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core'

const Welcome = () => {
  const classes = useStyles();
  return (
    <Intro
    bg="/images/bg/1.jpg"
    fullScreen
    title="MOVIDA PILOTO: Seu dia a dia, mesma rotina, mais praticidade"
    subtitle="resolva suas pendencias online com facilidade e segurança"
  >
    <div className={classes.actions}>
      <Button className={`${classes.btn} ${classes.buttonOrange}`}>
        Saiba Mais
      </Button>
      <Button className={`${classes.btn} ${classes.buttonWhite}`}>
        Benefícios
      </Button>
    </div>
  </Intro>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      width: "100%",
      display: "block",
      textAlign: "left",
    },
    btn: {
      zIndex: 14,
      fontFamily: "Nunito Sans",
      textTransform: "uppercase",
      fontWeight: 300,
      fontSize: "0.875rem",
      borderStyle: "solid",
      borderWidth: "1px",
      margin: "30px 20px 0 0",
      borderRadius: "3px",
      padding: "18px 38px",
      transition: "all 0.3s ease",
      
    },
    buttonOrange: {
      borderColor: "rgba(255, 255, 255, 0)",
      backgroundColor: "rgb(247, 125, 0)",
      color: "rgb(255, 255, 255)",

      "&:hover": {
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "none",
      },
    },
    buttonWhite: {
      color: "rgb(255, 255, 255)",
      backgroundColor: "transparent",
      borderColor: "rgb(255, 255, 255)",

      "&:hover": {
        color: "#14202B",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgb(255, 255, 255)",
      },
    },
  })
);

export default Welcome
