import React from "react";
import Head from "next/head";
import styles from "../../assets/css/index.module.scss";
import { Container } from "../../components/Container";
import { DashboardPaper } from "../../components/DashboardPaper";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import Cards from "../sections/portal/Cards";

const HomePageDashboard = () => {
  return (
    <>
      <Head>
        <title>Portal do Motorista - Movida Piloto</title>
      </Head>
      <Container source="dashboard">
        <DashboardPaperBoxed
          breadcrumb={["Portal"]}
          bg="/images/bg/1.jpg"
          title="Portal do Motorista"
          subtitle="resolva suas pendencias online com facilidade e segurança"
        >
          <Cards />
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default HomePageDashboard;
