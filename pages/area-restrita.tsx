import { Container } from "../components/Container";
import Welcome from "./sections/Welcome";
import Presentation from "./sections/Presentation";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from  "../utils/theme";
import Cards from "./sections/Cards";

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Welcome />
        <Cards />
      </Container>
    </MuiThemeProvider>
  );
};
 