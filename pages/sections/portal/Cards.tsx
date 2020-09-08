import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Link,
  Grid,
} from "@material-ui/core";

const Cards = () => {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx1}`}></div>         
                <div>
                    <h2>Meus Dados</h2>
                    <p>Altere o seu cadastro, senha e cartões cadastrados.</p>
                    <a href="#">Acessar meus dados</a>
                </div>
            </div>
        </Grid>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx2}`}></div>         
                <div>
                    <h2>Contratos</h2>
                    <p>Gerencie seus contratos, prorrogue seu plano de assinatura e mais.</p>

                    <Link href="/portal/contratos">Acessar meus dados</Link>
                </div>
            </div>
        </Grid>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx3}`}></div>         
                <div>
                    <h2>Reservas</h2>
                    <p>Visualize aqui suas reservas atuais, periodo e mais.</p>

                    <a href="#">Acessar meus dados</a>
                </div>
            </div>
        </Grid>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx4}`}></div>         
                <div>
                    <h2>Documentação</h2>
                    <p>Veja suas multas, abra solicitações e acompanhe status com facilidade.</p>

                    <a href="#">Acessar meus dados</a>
                </div>
            </div>
        </Grid>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx5}`}></div>         
                <div>
                    <h2>Financeiro</h2>
                    <p>Acompanhe o extrato de suas negociações, reservas, e mais.</p>

                    <a href="#">Acessar meus dados</a>
                </div>
            </div>
        </Grid>
        <Grid item sm={6} md={4}>
        <div className={`${classes.informationCards} `}>   
                <div className={`${classes.cx6}`}></div>         
                <div>
                    <h2>Suporte & Ajuda</h2>
                    <p>Visualize aqui seus tickets de atendimento e suporte.</p>

                    <a href="#">Acessar meus dados</a>
                </div>
            </div>
        </Grid>
    </Grid>

  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Cards:{
        margin:"auto",
    },
    containerCards:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"50px",
        flexWrap:"wrap",
    },
    
    information:{
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between",
        width:"100%",
        fontSize: theme.typography.pxToRem(18),
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

    informationCards:{
        boxShadow:"6px 5px 30px 0px rgba(0,0,0,0.12)",
        width:"300px",
        height:"400px",
        borderRadius:"10px",
        textAlign:"center",
        margin:"20px 50px", 
        "& h2":{
            color:"#98999c",
        },
        "& p":{
            color:"#98999c",
        },
        "& a":{
            color:"#fff",
            background: theme.palette.primary.main,
            textDecoration:"none",
            borderRadius:"5px",
            padding:"10px 10%"
        }
    },
    cx1:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
        backgroundPosition:"-669px 0px"
    },
    cx2:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
    },
    cx3:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
        backgroundPosition:"0px -202px"
    },
    cx4:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
        backgroundPosition:"-342px -202px;"
    },
    cx5:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
        backgroundPosition:"-652px -202px"
    },
    cx6:{
        background:"url(/images/images/sprites--cards.jpg)",
        height:"190px",
        borderRadius:"10px 10px 0px 0px",
        backgroundPosition:"-329px 0px",
    }
  })
);

export default Cards;
