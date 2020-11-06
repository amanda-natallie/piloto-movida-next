import React from "react";
import Link from "next/link";
import { Grid, Avatar, Divider, Tooltip, Button } from "@material-ui/core";
import styles from "../../../assets/css/cards.module.scss";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import ContactlessOutlinedIcon from "@material-ui/icons/ContactlessOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import BrightnessAutoIcon from "@material-ui/icons/BrightnessAuto";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MenuList from "../../../components/general/MenuList";

const Cards = () => {
  return (
    <section className={styles.cards}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <div className={styles.profile}>
            <div className={styles.intro}>
              <Avatar
                className={styles.avatar}
                src="/images/images/avatar.jpeg"
                alt="profile"
              />
              <div className={styles.description}>
                <h3>Suellen Marques</h3>
                <p>
                  Honda Civic <span>•</span> Placa GRT5986
                </p>
                <p>
                  Vencimento do Contrato: <span>28/12/2020</span>
                </p>
              </div>
            </div>
            <Divider className={styles.whitedivider} />
            <div className={styles.benefits}>
              <h3>Programa de pontos</h3>
              <small>seus benefícios atuais:</small>

              <div className={styles.buttons}>
                <Tooltip title="Gift card de R$50 em combustivel">
                  <Avatar className={styles.avatar}>
                    <CardGiftcardOutlinedIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Wifi grátis por todo o período do contrato">
                  <Avatar className={styles.avatar}>
                    <ContactlessOutlinedIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Descontos no SemParar">
                  <Avatar className={styles.avatar}>
                    <ConfirmationNumberOutlinedIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Sorteios mensais de até R$1500,00">
                  <Avatar className={styles.avatar}>
                    <EmojiEventsOutlinedIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Assistente Virtual personalizada">
                  <Avatar className={styles.avatar}>
                    <BrightnessAutoIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Descontos e premios em restaurantes parceiros">
                  <Avatar className={styles.avatar}>
                    <FastfoodIcon />
                  </Avatar>
                </Tooltip>
              </div>
              <Button variant="outlined" color="primary" className={styles.cta}>
                Obter mais benefícios
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className={styles.tickets}>
            <h2>Seus tickets de suporte</h2>

            <ul>
              <li>
                <div className={styles.description}>
                  <h4>Duvidas de contrato</h4>
                  <p>Solicitado a 27 minutos •</p>
                  <small>respondido</small>
                </div>
                <a href="#">Ver Detalhes</a>
              </li>
              <li>
                <div className={styles.description}>
                  <h4>Não consigo adicionar motorista</h4>
                  <p>Atualizado 1 dia atrás •</p>
                  <small>aberto</small>
                </div>
                <a href="#">Ver status</a>
              </li>
              <li>
                <div className={styles.description}>
                  <h4>Utilizar cupom de desconto</h4>
                  <p>Finalizado à 12 dias •</p>
                  <small>fechado</small>
                </div>
                <a href="#">Reabrir</a>
              </li>
            </ul>
            <div className={styles.actions}>
              <Button variant="outlined" color="primary" className={styles.cta}>
                Pedir ajuda
              </Button>
              <Link passHref href="/portal/tickets-de-suporte">
                <Button variant="outlined" color="primary" className={styles.cta}>
                  Ver todos os tickets
                </Button>
              </Link>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.dashboardbottom}>
            <h2>Navegue pelo seu portal</h2>
            <MenuList />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.dashboardbottom}>
            <h2>Lojas de Suporte ao motorista mais próximas!</h2>
            
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Cards;
