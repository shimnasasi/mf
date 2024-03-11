import React from "react";
import Layout from "../Layout/Layout";
import MainHome from "../Layout/MainHome";
import MainServices from "../Layout/MainServices";
import MainAbout from "../Layout/MainAbout";
// import MainMission from "../Layout/MainMission";
import Homeservice from "../Layout/Homeservice";

function Home() {
  return (
    <Layout>
      <MainHome />
      <MainAbout />
      
      <Homeservice/>
      {/* <MainMission /> */}

    </Layout>
  );
}

export default Home;
