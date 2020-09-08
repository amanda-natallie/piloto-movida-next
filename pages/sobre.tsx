import React from "react"
import { Container } from "../components/Container";
import { Intro } from "../components/Intro";
import About from "./sections/frontpage/About";

 const sobre = () => {
  return (
    <Container>
      <Intro
        bg="/images/bg/1.jpg"
        title="O que é"
        subtitle="O que é esse projeto?"
      ></Intro>
      <About />
    </Container>
  );
};
export default sobre