import { Container } from "../components/Container";
import { Intro } from "../components/Intro";
import About from "./sections/About"
export default () => (
  <Container>
        <Intro
          bg="/images/bg/1.jpg"
          title="O que é"
          subtitle="O que é esse projeto?"
        ></Intro>
        <About />
  </Container>
);
