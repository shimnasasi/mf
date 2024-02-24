import React from "react";
import Layout from "../Layout/Layout";
import MainHome from "../Layout/MainHome";
import MainServices from "../Layout/MainServices";
import MainAbout from "../Layout/MainAbout";

function Home() {
  return (
    <Layout>
      <MainHome />
      <MainAbout />
      <MainServices />
    </Layout>
  );
}

export default Home;
