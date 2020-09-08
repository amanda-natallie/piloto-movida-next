import { Container } from "../components/Container";
import Welcome from "./sections/Welcome";
import Presentation from "./sections/Presentation";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from  "../utils/theme";
import Plans from "./sections/Plans";

export default () => {
  return (
    
      <Container>
        <Welcome />
        <Plans />
      </Container>
    
  );
};
 