import React from "react";
import Link from "next/link";

import {
    makeStyles,
    Theme,
    createStyles,
    Grid,
    TextField,
    Button,
    CssBaseline,
    MuiThemeProvider,
  } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";
import { theme } from "../../utils/theme";

const Senha = () => {
  const classes = useStyles();

  return (
    <>
        <div className={`${classes.information}`}>
            <div>
                <div className={`${classes.square} ${classes.mr10}`}></div>
                <span className={`${classes.mr10}`}>Home &gt; </span>
                    Portal Do Motorista &gt; Dados cadastrais &gt; Senha
            </div>

            <div>
                Olá, <span className={`${classes.mgP}`}>Rodrigo</span>! Seja bem-vindo à sua area exclusiva! <span  className={`${classes.mgP}`}> sair</span>
            </div>
        </div>   
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={classes.senhaContainer}>
          <div className={classes.senhaBox}>
            <h1>Senhas</h1>
            <TextField
              className={classes.input}
              fullWidth
              label="Senha atual"
              type="password"
              variant="outlined"
              autoComplete="current-password"
            />
            <TextField
              className={classes.input}
              fullWidth
              label="Nova senha"
              variant="outlined"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              className={classes.input}
              fullWidth
              label="Confirme a nova senha"
              variant="outlined"
              type="password"
              autoComplete="current-password"
            />
            <Button className={`${classes.btn} ${classes.buttonOrange}`}>
              <Link href="#">Alterar</Link>
            </Button>
          </div>
        </Grid>
      </MuiThemeProvider>
    </>
  );
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    senhaContainer: {
      width: "90%",
      height: "100vh",
      maxHeight: "100vh",
      padding: 0,
      backgroundSize: "100%",
      margin:"auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    senhaBox: {
      width: "450px",
      borderRadius: "10px",
      padding: "0px 60px 40px 0px",
      color: "white",
      "& h1": {
        fontFamily: "'Bree Serif', serif",
        margin: "10px 0",
        color: theme.palette.primary.main,
      },
    },
    btn: {
      zIndex: 14,
      fontFamily: "Nunito Sans",
      textTransform: "uppercase",
      fontWeight: 300,
      fontSize: "0.875rem",
      margin: "30px 20px 0 0",
      borderRadius: "3px",
      padding: "18px 38px",
      transition: "all 0.3s ease",
    },
    buttonOrange: {
        backgroundColor: "rgb(247, 73, 25)",
        border:"1px solid rgb(247, 73, 25)",
        "& * ": {
        color: "#fff",
          textDecoration: "none",
        },
        "&:hover": {
            borderColor: "rgb(247, 73, 25)",
            backgroundColor: "#fafafa",
        },
        "&:hover *":{
            color:"rgb(247, 73, 25) !important",
        }
    },
    input: {
      marginBottom: "20px",
      "& *": {
        borderColor: "rgb(20, 32, 43)",
        color: "rgb(20, 32, 43)",
      },
      "& *:hover": {
        borderColor: "rgb(20, 32, 43) !important",
        color: "rgb(20, 32, 43)",
      },
    },
    information:{
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between",
        width:"90%",
        margin:"auto",
        fontSize: theme.typography.pxToRem(18),
        color:"#000",
        "& div":{
            display:"flex",
            alignItems:"center",
        },
        "& span":{
            color: theme.palette.primary.main,
        },
    },
    mr10:{
        marginRight:"10px"
    },
    square:{
        height:"20px",
        width:"20px",
        background: theme.palette.primary.main,
        marginRight:"10px",
        display: "inline-block"
    },
    mgP:{
        marginLeft:"2px",
    },
  })
);

export default Senha;
