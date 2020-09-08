import { Container } from "../components/Container";
import Welcome from "./sections/Welcome";
import Presentation from "./sections/Presentation";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../utils/theme";
import Benefits from "./sections/Benefits";
import Strategy from "./sections/Strategy";

export default () => {
  return (
    
      <Container>
        <Welcome />
        <Presentation />
        <Benefits />
        <Strategy />
      </Container>
    
  );
};
