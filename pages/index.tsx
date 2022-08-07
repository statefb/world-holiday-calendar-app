import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppBarMain from "../components/AppBarMain";
import MainView from "../components/MainView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Holiday Viewer</title>
        <meta name="description" content="world holiday viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBarMain></AppBarMain>
      <MainView></MainView>
    </>
  );
};

export default Home;
