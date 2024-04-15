import React from "react";
import Layout from "../Layout/Layout";
import MainHome from "../Layout/MainHome";
import MainAbout from "../Layout/MainAbout";
import Homeservice from "../Layout/Homeservice";

function Home() {
  return (
    <Layout>
      <MainHome />
      <MainAbout />
      <Homeservice />
    </Layout>
  );
}

export default Home;
