import React from "react";

import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.About}>
        <section className={`${classes.aboutSec1}`}>

            <div className={`${classes.imgBox}`}>
                <img src="/images/images/smartphone_uber_car.jpg" className={`${classes.myImg}`} alt="Imagem"/>
            </div>

            <div className={`${classes.conteudo_sec1}`}>
                <h3>ABOUT ZIKZAG</h3>
                <h2>We Work for Your Incredible Success</h2>
                <p>We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                <div className={`${classes.destaqueSec1}`}>
                    <p>Best Counsalting Solutions since 2002.</p>
                </div>
            
            </div>
        </section>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    About:{},
    myImg:{
        height:"100%",
        width:"80%",
        objectFit:"cover"
    },
    conteudo_sec1:{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"510px",
        "& h3":{
            color: theme.palette.primary.main,
            fontSize: theme.typography.pxToRem(14),
        },
        "& h2":{
            fontSize: theme.typography.pxToRem(35),
        }
    },
    imgBox:{
        width:"50%",
        height:"530px",
        padding:"20px"
    },
    aboutSec1:{
        display:"flex",
        justifyContent:"space-around",
        padding:"20px"

    },
    destaqueSec1:{
        fontSize: theme.typography.pxToRem(28),
        background:"#ececec",
        borderLeft:"2px solid rgb(247, 73, 25)",
        padding:"15px",
        fontWeight:"bold",
    }
  })
);

export default About;
