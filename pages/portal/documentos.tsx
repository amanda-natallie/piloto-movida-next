import React from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/documents.module.scss";
import { Grid } from "@material-ui/core";
import Sidebar from "../../components/template/Sidebar";
import CreateIcon from "@material-ui/icons/Create";

const Documents = () => {
  const array = ["CNH", "CPF", "Titulo de Eleitor", "RG"];
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
          <Grid item md={9}>
            <div className={styles.documents}>
              <h2>Consulte e Gerencie seus documentos</h2>

              <ul>
                {array.map((e: any) => (
                  <li>
                    <div className={styles.icon}>
                      <img src="/images/icons/document.svg" alt="document" />
                      <p>{e}</p>
                    </div>
                    <div className={styles.description}>
                      <header>
                        <p>
                          Nº <span>0654948165419</span>
                        </p>
                        <p>
                          Data de Inclusão: <span>05/05/2019</span>
                        </p>
                      </header>
                      <footer>
                        <span>aprovado</span>
                        <span>
                          Editar <CreateIcon fontSize="small" />
                        </span>
                      </footer>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default Documents;
