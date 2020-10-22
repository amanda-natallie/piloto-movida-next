import "../assets/css/styles.global.scss";
import dynamic from "next/dynamic";
import Head from "next/head";

interface Iprops {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: Iprops) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/general/TopProgressBar");
    },
    { ssr: false }
  );

  return (
    <>
     <Head>
        <title>Movida Piloto</title>
        <link rel="manifest" href="manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}
