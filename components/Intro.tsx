import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { FunctionComponent } from "react";

interface Iprops {
  bg: string;
  title?: string;
  subtitle?: string;
  fullScreen?: boolean;
}
export const Intro: FunctionComponent<Iprops> = ({
  children,
  bg,
  title,
  subtitle,
  fullScreen,
}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.pageIntro} ${fullScreen && classes.fullScreen}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Grid container className={classes.container}>
        <div
          className={`${classes.introContent} ${
            fullScreen && classes.homeDescription
          }`}>
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
          {children}
        </div>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "80%",
      maxWidth: "1400px",
      margin: "auto",

      "& * ": {
        color: "white"
      }
    },
    pageIntro: {
      position: "relative",
      fontFamily: "Nunito Sans",
      width: "100%",
      backgroundSize: "100%",
      backgroundAttachment: "scroll",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top left",
      height: "290px",
      marginBottom: "60px",
      paddingTop: "120px",
      paddingBottom: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    fullScreen: {
      height: "100vh",
      alignItems: "start",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    },
    introContent: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",

      "& h1": {
        fontSize: "3rem",
        margin: "5px 0",
        lineHeight: "1.1",
        textAlign: "left"
      },
      "& p": {
        fontSize: "1rem",
        textTransform: "uppercase",
        margin: 0,
      },
    },
    homeDescription: {
      alignItems: "start",
      width: "50%",
      "& h1": {
        fontFamily: "'Bree Serif', serif",
        fontSize: "3.750rem",
        fontWeight: "200",
        margin: "5px 0",
      },
      "& p": {
        fontSize: "1.285rem",
        margin: 0,
        textAlign: "left",
      },
    },
  })
);
