import { Container } from "../components/Container";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from  "../utils/theme";
import Cards from "./sections/Cards";
import Teste from "./sections/Teste";

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Teste />
        <Cards />
      </Container>
    </MuiThemeProvider>
  );
};
 