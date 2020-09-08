import { Container } from "../components/Container";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../utils/theme";
import Cards from "./sections/Cards";
import { Intro } from "../components/Intro";

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Intro
          bg="/images/bg/1.jpg"
          title="Area restrita"
          subtitle="resolva suas pendencias online com facilidade e segurança"
        ></Intro>
        <Cards />
      </Container>
    </MuiThemeProvider>
  );
};
