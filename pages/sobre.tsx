import React from "react"
import Head from "next/head";
import { Container } from "../components/Container";
import { Intro } from "../components/Intro";
import About from "./sections/frontpage/About";

 const sobre = () => {
  return (
    <>
    <Head>
      <title>O que é o projeto? | Movida Piloto</title>
    </Head>
    <Container>
      <Intro
        bg="/images/bg/1.jpg"
        title="O que é"
        subtitle="O que é esse projeto?"
      ></Intro>
      <About />
    </Container>
    </>
  );
};
export default sobre