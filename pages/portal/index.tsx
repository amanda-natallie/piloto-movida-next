import React from 'react'
import styles from "../../assets/css/index.module.scss";
import { Container } from '../../components/Container';
import { DashboardPaper } from '../../components/DashboardPaper';
import { DashboardPaperBoxed } from '../../components/DashboardPaperBoxed';
import Cards from '../sections/portal/Cards';


const HomePageDashboard = () => {



  return (
   <Container>
      <DashboardPaperBoxed
        breadcrumb={["Portal"]}
        bg="/images/bg/1.jpg"
        title="Portal do Motorista"
        subtitle="resolva suas pendencias online com facilidade e segurança"
      >
        <Cards />
      </DashboardPaperBoxed>
    </Container>
  )
}

export default HomePageDashboard
