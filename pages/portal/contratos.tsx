import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Container } from "../../components/Container";
import { DashboardPaper } from "../../components/DashboardPaper";

const contratos = () => {
  const classes = useStyles();
  return (
    <Container>
      <DashboardPaper
        breadcrumb={["Portal", "Meus Contratos"]}
        bg="/images/bg/1.jpg"
        title="Meus Contratos"
        subtitle="resolva suas pendencias online com facilidade e segurança"
      ></DashboardPaper>
    </Container>
  );
};
const useStyles = makeStyles((theme: Theme) => createStyles({}));
export default contratos;
