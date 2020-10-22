import React, { useState } from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/accident.module.scss";
import Sidebar from "../../components/template/Sidebar";
import { Button, Grid, TextField } from "@material-ui/core";
import BackButton from "../../components/general/BackButton";
import BeatLoader from "react-spinners/BeatLoader";
import { getFile } from "../../utils/helper";
import Link from "next/link";

const AccidentReportSuccess = () => {
  return (
    <>
      <Head>
        <title>Portal do Motorista - Movida Piloto</title>
      </Head>
      <Container source="dashboard">
        <DashboardPaperBoxed
          breadcrumb={["Portal", "Reportar roubo ou acidente", "Solicitação enviada"]}
          bg="/images/bg/1.jpg"
          title="Roubo ou Acidente"
          subtitle=""
        >
          <Sidebar />
          <Grid item md={8}>
            <div className={styles.steps}>
              <h2>Solicitação criada com sucesso</h2>
              <br />
              <svg
                width="108"
                height="106"
                viewBox="0 0 108 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.47 42.091L47.655 73.3168L28.575 54.5901L34.92 48.3627L47.655 60.8618L73.125 35.8635L79.47 42.091ZM18 53.0002C18 42.7093 22.59 33.4785 29.79 27.0302L40.5 37.5418V11.0418H13.5L23.4 20.7585C14.58 28.7968 9 40.236 9 53.0002C9 75.9227 26.775 94.7377 49.5 96.946V88.0243C31.77 85.8602 18 70.976 18 53.0002ZM99 53.0002C99 30.0777 81.225 11.2627 58.5 9.05432V17.976C76.23 20.1402 90 35.0243 90 53.0002C90 63.291 85.41 72.5218 78.21 78.9701L67.5 68.4585V94.9585H94.5L84.6 85.2418C93.42 77.2035 99 65.7643 99 53.0002Z"
                  fill="#EE7201"
                />
              </svg>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <p>
                    Em breve entraremos novamente em contato para lhe informar
                    sobre o andamento de sua solicitação. Fique atento às suas
                    notificações!
                  </p>
                  <Link passHref href="/portal">
                    <Button
                      variant="outlined"
                      color="primary"
                      className={styles.cta}
                    >
                      Voltar para a página inicial
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default AccidentReportSuccess;
