import { Container } from "../components/Container";
import { Intro } from "../components/Intro";
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <Intro
        bg="/images/bg/1.jpg"
        fullScreen
        title="Seu dia a dia, mais cômodo e leve"
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

      <div className={classes.cta}>
        <div className={`${classes.child} ${classes.one}`}>
          <h3>Consulting for Private Equity</h3>
          <i className={classes.nextIcon} />
        </div>
        <div className={`${classes.child} ${classes.two}`}>
          <h3>Consulting for Corporates</h3>
          <i className={classes.nextIcon} />
        </div>
      </div>
    </Container>
  );
};
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
      fontWeight: 700,
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
      backgroundColor: "rgb(255, 74, 23)",
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
    container: {
      maxWidth: "80vw",
      margin: "auto",
    },
    cta: {
      zIndex: 99,
      width: "81%",
      margin: "-12.2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            vh auto 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row",
      height: "120px",
      color: "white",
      fontFamily: "Nunito Sans",
      fontSize: "1.395rem",
      
      "& h3": {
        fontWeight: 100,
      }
    },
    child: {
      width: "50%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "inherit",
      flexDirection: "row",
    },
    one: {
      background: "#14202B",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
    },
    two: {
      background: "#E84719",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
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
  })
);
