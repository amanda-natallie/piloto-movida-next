import { Container } from "../components/Container";
import Welcome from "./sections/frontpage/Welcome";
import Presentation from "./sections/frontpage/Presentation";

import Benefits from "./sections/frontpage/Benefits";
import Strategy from "./sections/frontpage/Strategy";

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
