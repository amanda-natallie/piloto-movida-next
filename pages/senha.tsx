import { Container } from "../components/Container";
import Senha from "./sections/portal/Senha";
import { Intro } from "../components/Intro";

export default () => {
  return (
      <Container>
        <Intro
          bg="/images/bg/1.jpg"
          title="Senha"
          subtitle="Altere sua senha"
        ></Intro>
        <Senha />
      </Container> 
    
  );
};
 