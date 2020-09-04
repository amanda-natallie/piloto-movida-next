import { Container } from "../components/Container";

import Welcome from "./sections/Welcome";
import Presentation from "./sections/Presentation";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../utils/theme";




export default () => {

  return (
    <MuiThemeProvider theme={theme}>
    <Container>
      <Welcome />
      <Presentation />
      
    </Container>
    </MuiThemeProvider>
  );
};

