import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const Strategy = () => {
  const classes = useStyles();

  return (
    <div className={classes.Strategy}>
      <h3>Nossos serviços</h3>
      <h2>Selecione o serviço desejado</h2>

      <div className={classes.topics}>

        <div className={`${classes.topics_left}`}>

          <div className={`${classes.topics_items}`}>
            <a href="#" className={`${classes.links}`}>
              <div className={`${classes.container_img}`}>
                  <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
              </div>
            
            
              <div className={`${classes.description_topics}`}>
                <h4>Financeiro</h4>
                <p>Imprima o comprovante, gere o boleto, verifique suas cobranças.</p>
              </div>
            </a>
          </div>

          <div className={`${classes.topics_items} ${classes.mtRight}`}>

            <a href="#" className={`${classes.links}`}>
              <div className={`${classes.container_img}`}>
                  <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
              </div>
              
              <div className={`${classes.description_topics}`} >
                <h4>Minha Locações</h4>
                <p>Teve algum problema com nossos carros? Acesse aqui e nos acione.</p>
              </div>
            </a>

          </div>


          <div className={`${classes.topics_items}`}>
            
            <a href="#" className={`${classes.links}`}>
              <div className={`${classes.container_img}`}>
                  <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
              </div>
              
              <div className={`${classes.description_topics}`}>
                <h4>Assistência</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!</p>
              </div>
            </a>
            
          </div>
        </div>

        <div className={classes.topics_middle}>
            <img src="/images/images/photo-man.jpg" alt=""/>
        </div>
        
        <div>
          <div className={`${classes.topics_items}`}>

              <a href="#" className={`${classes.links}`}>
                <div className={`${classes.container_img}`}>
                  <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
                </div>
                
                <div className={classes.description_topics}>
                  <h4>Pós-venda</h4>
                  <p>Notificação de sinistros, tem algum dúvida?</p>
                </div>
              </a>
            </div>

            <div className={`${classes.topics_items} ${classes.mtLeft}`}>
              <a href="#" className={`${classes.links}`}>
                <div className={`${classes.container_img}`}>
                  <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
                </div>

                <div className={`${classes.description_topics}`} >
                  <h4>Marketing</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!</p>
                </div>
              </a>
            </div>


            <div className={`${classes.topics_items}`}>
               <a href="#" className={`${classes.links}`}>
                <div className={`${classes.container_img}`}>
                    <img src="/images/images/icon-teste.svg" className={classes.imgTopic}/>
                  </div>
                    
                  <div className={classes.description_topics}>
                    <h4>Improvement</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!</p>
                  </div>
               </a>
            </div>
          </div>
        </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Strategy:{
      position:"relative",
      top:"100px",
      textAlign:"center",

      "& h3":{
        fontSize: theme.typography.pxToRem(20),
        textTransform:"upercase",
        color: theme.palette.primary.main,
      },
      "& h2":{
        fontSize:"3rem",
        color:"#000",
        marginTop:"-20px"
      }
    },
    topics:{
      color:"#000",
      padding:"0 100px 100px",
      display:"flex",
      justifyContent:"center"
    },
    topics_left:{},

    description_topics:{
      textAlign:"left",
      "& h4":{
        fontSize: theme.typography.pxToRem(17),
      },
      "& p":{
        marginTop:"-20px",
        color:"#818181",
      }
    },

    topics_items:{
      background:"#fff",
      width:"350px",
      height:"130px",
      borderRadius:"10px",
      boxShadow:"6px 5px 30px 0px rgba(0,0,0,0.12)",
      display:"flex",
      alignItems:"center",
      padding:"10px",
      marginTop:"50px"
    },
    container_img:{
      height:"80px",
      width:"120px",
      display:"flex",
      alignItems:"center",
    },
    imgTopic:{
      height:"60px",
      marginRight:"10px",
      objectFit:"cover"
    },

    topics_middle:{},

    mtRight:{
      position:"relative",
      right:"50px",
    },
    mtLeft:{
      position:"relative",
      left:"50px",
    },
    links:{
      textDecoration:"none",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      color:"#000"
    }
  })
);

export default Strategy;
