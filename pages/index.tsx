import Head from "next/head";
import { Container } from "../components/Container";
import Welcome from "./sections/frontpage/Welcome";
import Presentation from "./sections/frontpage/Presentation";

import Benefits from "./sections/frontpage/Benefits";
import Strategy from "./sections/frontpage/Strategy";
import React from "react";
import { Hidden } from "@material-ui/core";

 const FrontPage = () => {
  return (
    <>
    <Head>
        <title>Movida Piloto: Seu dia a dia, mesma rotina, mais praticidade</title>
      </Head>
      <Container>
        <Welcome />
        <Presentation />
        <Hidden smDown >
          <Benefits />
          <Strategy />
        </Hidden>
      </Container>
    </>
  );
};

export default FrontPage