import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Link,
  Grid,
  Avatar,
  Divider,
  Tooltip,
  Button,
} from "@material-ui/core";
import styles from "../../../assets/css/cards.module.scss";
import AirportShuttleOutlinedIcon from "@material-ui/icons/AirportShuttleOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import ContactlessOutlinedIcon from "@material-ui/icons/ContactlessOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import BrightnessAutoIcon from "@material-ui/icons/BrightnessAuto";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const Cards = () => {
  return (
    <section className={styles.cards}>
      <Grid container spacing={3} justify="space-between" alignItems="center">
        <Grid item md={3} className={styles.profile}>
          <div className={styles.intro}>
            <Avatar
              className={styles.avatar}
              src="/images/images/profile-dp.jpg"
              alt="profile"
            />
            <h3>Suellen Marques</h3>
          </div>
          <div className={styles.info}>
            
            <p> Rodando com um Honda Civic de placa GRT5984 até 28/12/2020</p>
          </div>
          <Divider className={styles.whitedivider} />
          <div className={styles.benefits}>
            <h3>Programa de pontos</h3>
            <small>seus benefícios atuais:</small>

            <div className={styles.buttons}>
              <Avatar className={styles.avatar}>
                <Tooltip title="Gift card de R$50 em combustivel">
                  <CardGiftcardOutlinedIcon />
                </Tooltip>
              </Avatar>
              <Avatar className={styles.avatar}>
                <Tooltip title="Wifi grátis por todo o período do contrato">
                  <ContactlessOutlinedIcon />
                </Tooltip>
              </Avatar>
              <Avatar className={styles.avatar}>
                <Tooltip title="Descontos no SemParar">
                  <ConfirmationNumberOutlinedIcon />
                </Tooltip>
              </Avatar>
              <Avatar className={styles.avatar}>
                <Tooltip title="Sorteios mensais de até R$1500,00">
                  <EmojiEventsOutlinedIcon />
                </Tooltip>
              </Avatar>
              <Avatar className={styles.avatar}>
                <Tooltip title="Assistente Virtual personalizada">
                  <BrightnessAutoIcon />
                </Tooltip>
              </Avatar>
              <Avatar className={styles.avatar}>
                <Tooltip title="Descontos e premios em restaurantes parceiros">
                  <FastfoodIcon />
                </Tooltip>
              </Avatar>
            </div>
            <Button variant="contained" color="secondary" className={styles.cta}>
              Obter mais benefícios
            </Button>
          </div>
        </Grid>
        <Grid item md={9} className={styles.card}></Grid>
      </Grid>
    </section>
  );
};

export default Cards;
