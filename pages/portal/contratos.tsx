import React from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/contracts.module.scss";
import { Button, Grid } from "@material-ui/core";
import Sidebar from "../../components/template/Sidebar";

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
              <h2>Informações de seu contrato atual</h2>

              <ul>
                <li>
                  <span>Data de Inicio: </span> 24/12/2019
                </li>
                <li>
                  <span>Data de Término: </span> 24/12/2029
                </li>
                <li>
                  <span>Modelo Carro: </span> Kia Soul
                </li>
                <li>
                  <span>Placa Carro: </span> GRT-6553
                </li>
                <li>
                  <span>KM Rodados: </span> 483.008
                </li>
                <li>
                  <span>Responsável Financeiro </span> Suellen Mariano Garcia
                </li>
                <li>
                  <span>Locatário: </span> Suellen Mariano Garcia
                </li>
              </ul>
              <hr />
              <div className={styles.contractActions}>
              
                <Button variant="outlined" color="primary" className={styles.cta}>
                  Renovar Plano
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="outlined" color="primary" className={styles.cta}>
                  Cancelar Plano
                </Button>{" "}
                &nbsp;&nbsp;&nbsp;
                <Button variant="outlined" color="primary" className={styles.cta}>
                  Visualizar contrato
                </Button> 
              </div>
            </div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default Contracts;
