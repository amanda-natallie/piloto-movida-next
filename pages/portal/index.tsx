import { Container } from "../../components/Container";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../../utils/theme";
import Cards from "../sections/portal/Cards";
import { Intro } from "../../components/Intro";
import { DashboardPaper } from "../../components/DashboardPaper";

export default () => {
  return (
    <Container>
      <DashboardPaper
        breadcrumb={["Portal"]}
        bg="/images/bg/1.jpg"
        title="Portal do Motorista"
        subtitle="resolva suas pendencias online com facilidade e segurança"
      >
        <Cards />
      </DashboardPaper>
    </Container>
  );
};
