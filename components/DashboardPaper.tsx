import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Intro } from "./Intro";

interface Iprops {
  title: string
  subtitle: string
  breadcrumb: any
  bg: string
}

export const DashboardPaper: FunctionComponent<Iprops> = ({
  children,
  breadcrumb,
  title,
  subtitle,
  bg
}) => {
  const classes = useStyles();
  return (
    <>
      <Intro
        bg={bg}
        title={title}
        subtitle={subtitle}
      ></Intro>
      <div className={classes.root}>
        <div className={classes.information}>
          <div>
            <div className={`${classes.square} ${classes.mr10}`}></div>
            <span className={classes.mr10}>&gt; Home </span>
            {breadcrumb.map((e:any) => (<span className={classes.mr10}>&gt; {e}</span>))}
          </div>

          <div>
            Olá, <span className={classes.mgP}>Suellen</span>! Seja
            bem-vindo à sua area exclusiva!{" "}
            <span className={classes.mgP}> sair</span>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      maxWidth: "1200px",
      margin: "60px auto",
      display: "block",
    },
    information: {
      marginBottom: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",

      "& div": {
        display: "flex",
        alignItems: "center",
      },
      "& div > span:first-of-type": {
        
          color: theme.palette.primary.main,
        
      },
    },
    mr10: {
      marginRight: "10px",
    },
    square: {
      height: "15px",
      width: "15px",
      background: theme.palette.primary.main,
      marginRight: "10px",
      display: "inline-block",
    },
    mgP: {
      marginLeft: "2px",
    },
  })
);
