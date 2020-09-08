import { NextPage } from "next";
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
import { theme } from "../utils/theme";

const login = () => {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={classes.loginContainer}>
          <div className={classes.loginBox}>
            <h1>Faça seu login</h1>
            <p>Entre com seu usuário e senha para continuar</p>
            <TextField
              className={classes.input}
              fullWidth
              label="E-mail"
              variant="outlined"
            />
            <TextField
              className={classes.input}
              fullWidth
              label="Senha"
              variant="outlined"
              type="password"
              autoComplete="current-password"
            />
            <Button className={`${classes.btn} ${classes.buttonOrange}`}>
              <Link href="/area-restrita">Login</Link>
            </Button>
          </div>
        </Grid>
      </MuiThemeProvider>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      width: "100%",
      height: "100vh",
      maxHeight: "100vh",
      padding: 0,
      background: "url(/images/bg/2.jpg) #fff bottom left no-repeat",
      backgroundSize: "100%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginBox: {
      width: "500px",
      background: "rgb(20, 32, 43)",
      borderRadius: "10px",
      padding: "50px 60px 40px 60px",
      color: "white",

      "& h1": {
        fontFamily: "'Bree Serif', serif",
        margin: "10px 0",
      },
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
      borderColor: "rgb(20, 32, 43)",
      backgroundColor: "rgb(247, 73, 25)",

      "& * ": {
        color: "white",
        textDecoration: "none",
      },

      "&:hover": {
        borderColor: "white",
        backgroundColor: "none",
      },
    },
    input: {
      marginBottom: "20px",
      "& *": {
        borderColor: "white",
        color: "white",
      },
      "& *:hover": {
        borderColor: "white",
        color: "white",
      },
    },
  })
);

export default login;
