import React from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/contracts.module.scss";
import { Button, Grid } from "@material-ui/core";
import Sidebar from "../../components/template/Sidebar";
import RoomIcon from "@material-ui/icons/Room";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import DateRangeIcon from "@material-ui/icons/DateRange";

const Contracts = () => {
  return (
    <>
      <Head>
        <title>Portal do Motorista - Movida Piloto</title>
      </Head>
      <Container source="dashboard">
        <DashboardPaperBoxed
          breadcrumb={["Portal", "Seus Documentos"]}
          bg="/images/bg/1.jpg"
          title="Documentação"
          subtitle="Nesta tela estão armazenados os documentos que você necessita para fazer transações no painel do motorista. Mantenha-os sempre atualizados!"
        >
          <Sidebar />
          <Grid item xs={9}>
            <div className={styles.contracts}>
              <Grid container>
                <Grid item xs={12}>
                  <h2>Informações de seu contrato atual</h2>
                </Grid>
                <Grid item xs={4}>
                  <div className={styles.resumeContract}>
                    <img src="/images/carro.png" alt="" />
                    <h3>Grupo B - Economico</h3>
                    <p>Sandero, Onix, Argo, Eitos ou similar</p>
                  </div>
                  <div className={styles.contractActions}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={styles.cta}
                    >
                      Renovar Plano
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="outlined"
                      color="primary"
                      className={styles.cta}
                    >
                      Cancelar Plano
                    </Button>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="outlined"
                      color="primary"
                      className={styles.cta}
                    >
                      Visualizar contrato
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={styles.box}>
                    <ul>
                      <li>
                        <p>Local de Retirada:</p>
                        <span>
                          <RoomIcon /> São Paulo - Barra Funda
                        </span>
                      </li>

                      <li>
                        <p>Data e Hora da Retirada</p>
                        <span>
                          <EventAvailableIcon /> 09/04/2020 - 9:46
                        </span>
                      </li>
                      <li>
                        <p>Data e Hora de Devolução:</p>
                        <span>
                          <DateRangeIcon /> 30/03/2022 13:30
                        </span>
                      </li>
                      <li>
                        <p>Período contratado:</p>
                        <span>720 dias</span>
                      </li>
                    </ul>
                  </div>

                 
                </Grid>
              </Grid>
            </div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default Contracts;
