import React from "react";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
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
            <div className={classes.root}></div>
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
  },
}));
export default contratos;
