import React, { useState } from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/accident.module.scss";
import ButtonGroupTabs from "../../components/general/ButtonGroupTabs";
import { Grid } from "@material-ui/core";
import Sidebar from "../../components/template/Sidebar";
import BackButton from "../../components/general/BackButton";

const SupportTickets = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [step, setStep] = useState(1);

  return (
    <>
      <Head>
        <title>Tickets de Suporte - Movida Piloto</title>
      </Head>
      <Container source="dashboard">
        <DashboardPaperBoxed
          breadcrumb={["Portal", "Tickets de Suporte"]}
          bg="/images/bg/1.jpg"
          title="Tickets de Suporte"
          subtitle="consiga o suporte que você precisa em minutos!"
        >
          <Sidebar />
          <Grid item xs={12} md={9}>
            <ButtonGroupTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className={styles.steps}>
              <br />
              <br />
              <h2>Criar novo Ticket: Passo {step}</h2>
              {step === 1 && (
                <>
                  <p>Escolha um assunto para começar</p>
                  <ul>
                    <li onClick={() => setStep(2)}>
                      <img src="/images/icons/colisao.svg" alt="colisão" />
                      <p>Administrativo</p>
                    </li>
                    <li onClick={() => setStep(2)}>
                      <img src="/images/icons/roubo.svg" alt="roubo" />
                      <p>Financeiro</p>
                    </li>
                    <li onClick={() => setStep(2)}>
                      <img src="/images/icons/desastres.svg" alt="desastres" />
                      <p>Area Técnica</p>
                    </li>
                    <li onClick={() => setStep(2)}>
                      <img src="/images/icons/pessoa.svg" alt="pessoa" />
                      <p>Outros assuntos</p>
                    </li>
                  </ul>
                </>
              )}
              {step === 2 && (
                <div />  
              )}
            </div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default SupportTickets;
