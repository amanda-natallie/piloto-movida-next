import React from "react";
import { makeStyles, Theme, createStyles, Grid, Button } from "@material-ui/core";
import { Container } from "../../components/Container";
import { DashboardPaper } from "../../components/DashboardPaper";
import Sidebar from "../../components/Sidebar";

const contratos = () => {
  const classes = useStyles();
  return (
    <Container>
      <DashboardPaper
        breadcrumb={["Portal", "Meus Contratos"]}
        bg="/images/bg/1.jpg"
        title="Meus Contratos"
        subtitle="resolva suas pendencias online com facilidade e segurança"
      >
        <Grid container spacing={3}>
          <Sidebar />
          <Grid item md={9}>
            <div className={classes.root}>
              <h2>Informações de seu contrato atual</h2>
              
              <ul>
                <li><span>Data de Inicio: </span> 24/12/2019</li>
                <li><span>Data de Término: </span> 24/12/2029</li>
                <li><span>Modelo Carro: </span> Kia Soul</li>
                <li><span>Placa Carro: </span> GRT-6553</li>
                <li><span>KM Rodados: </span> 483.008</li>
                <li><span>Responsável Financeiro </span> Suellen Mariano Garcia</li>
                <li><span>Locatário: </span> Suellen Mariano Garcia</li>
              </ul>
              <hr />
              <div className={classes.actions}>
              <Button variant="contained" color="primary">Renovar Plano</Button> &nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="primary">Cancelar Plano</Button> &nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="primary">Visualizar contrato</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </DashboardPaper>
    </Container>
  );
};
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    padding: "30px",
    boxShadow: "6px 5px 30px 0px rgba(0,0,0,0.12)",
    
    "& h2": {
      fontFamily: "'Bree Serif', serif",
      marginTop:0,
      fontWeight: 400,
    }
  },
  actions: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));
export default contratos;
