import React from "react";
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import Layout from "../Layout/Layout";
// import MainAbout from '../Layout/MainAbout'
import { FaArrowRightLong, FaMaskFace } from "react-icons/fa6";
import MainMission from "../Layout/MainMission";
import MainAbout from "../Layout/MainAbout";

function About() {
  return (
    <Layout>
      <div className="w-full h-64 bg-bannerbg px-5 md:px-32">
        <h1 className="text-white md:mx-32 pt-24 text-5xl font-bold">
          About us
        </h1>
        <h2 className="text-white md:mx-32 pt-2 ">Home/About us</h2>
      </div>
      {/* <div className='w-full h-64 bg-bannerbg px-32'>
        <h1 className="text-white mx-32 pt-24 text-5xl font-bold">About us</h1>
        <h2 className='text-white mx-32 pt-2 '>Home/About us</h2>
      </div> */}
      {/* <div className="w-full h-[100vh] flex md:flex-row flex-col  md:px-32 ">
        <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-4 md:p-9">
          <div className="md:w-[10.5rem] text-right">
            <h1 className="cursor-pointer text-3xl text-[#002060] font-bold">
              Mech<span className="text-[#595959]">Fusion</span>
            </h1>
            <h1 className="text-xs uppercase text-right mt-[-8px] text-[#595959]">
              Engineering Solutions
            </h1>
          </div>
          <h1 className="text-4xl font-bold capitalize text-[#595959]">
            What we <span className="text-[#002060]">Aimed </span>about?
          </h1>
          <p className="drop-shadow-lg font-semibold">
            <span className="text-lg text-[#002060] font-bold">MechFusion</span>
            , your premier provider of Engineering services tailored to meet
            your 7 design and manufacturing needs. With years of expertise in
            the industry, we pride ourselves on delivering innovative solutions
            that streamline your production processes and bring your ideas to
            life with precision and efficiency. Our dedicated team of skilled
            professionals utilizes cutting-edge technology and software to
            deliver high-quality designs, prototyping, and manufacturing
            services that exceed expectations. We are committed to provide
            personalized attention and customized solutions to help you achieve
            your goals. <br />
            <br />
            We deliver professional services including full range of Mechanical
            CAD/CAM services, Engineering documentation, Costing, etc.
          </p>
       
        </div>
        <div className="w-full h-[40rem] bg-[#595959]/10 relative mt-12 ">
          <div className="absolute top-60 z-20 left-8 w-72 h-[22rem] shadow-xl bg-white flex justify-center items-center">
            <div className="bg-home-Services_three w-64 h-80 bg-cover bg-center" />
          </div>
          <div className="absolute top-20 right-10 w-[22rem] h-[22rem] shadow-xl bg-white flex justify-center items-center">
            <div className="bg-bannerbg w-80 h-80 bg-cover bg-center" />
          </div>
        </div>
      </div> */}

      <div className="flex md:flex-row flex-col md:px-56">
        <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-9">
          <h1 className="text-4xl font-bold md:text-start text-center md:pt-0 pt-10 capitalize text-[#595959]">
            What we <span className="text-[#002060]">Aimed </span>about?
          </h1>
          <p className="drop-shadow-lg font-semibold">
            <span className="text-lg text-[#002060] font-bold">Mechfusion</span>
            , your premier provider of Engineering services tailored to meet
            your design and manufacturing needs. With years of expertise in the
            industry, we pride ourselves on delivering innovative solutions that
            streamline your production processes and bring your ideas to life
            with precision and efficiency. Our dedicated team of skilled
            professionals utilizes cutting-edge technology and software to
            deliver high-quality designs, prototyping, and manufacturing
            services that exceed expectations. We are committed to provide
            personalized attention and customized solutions to help you achieve
            your goals. <br />
            <br />
            We deliver professional services including full range of Mechanical
            CAD/CAM services, Engineering documentation, Costing, etc.
          </p>
        </div>
        <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-9">
          <div className="md:w-96 h-[27rem] md:h-[30rem] bg-[#595959]/10 relative ">
            <div className="hover:scale-105 duration-500 cursor-pointer absolute md:top-48 top-36 z-20 md:left-12 left-8 w-48 h-64 shadow-xl bg-white flex justify-center items-center">
              <div className="bg-home-Services_three w-44 h-60 bg-cover bg-center" />
            </div>
            <div
              className="hover:scale-105 duration-500 cursor-pointer absolute top-8 right-8 md:right-16 w-[14rem] h-[17rem] 
            shadow-xl bg-white flex justify-center items-center"
            >
              <div className="bg-bannerbg w-52 h-64 bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:px-56">
        <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-9">
          <div className="md:w-96 h-[27rem] md:h-[30rem] bg-[#595959]/10 relative ">
            <div className="hover:scale-105 cursor-pointer duration-500 absolute md:top-48 top-36 z-20 md:left-12 left-8 w-48 h-64 shadow-xl bg-white flex justify-center items-center">
              <div className="bg-cam w-44 h-60 bg-cover bg-center" />
            </div>
            <div
              className="hover:scale-105 duration-500 cursor-pointer absolute top-8 right-8 md:right-16 w-[14rem] h-[17rem] 
            shadow-xl bg-white flex justify-center items-center"
            >
              <div className="bg-documentation w-52 h-64 bg-cover bg-center" />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex  flex-col justify-center gap-3  p-9">
          <h1
            className="text-4xl font-bold md:text-start text-center md:pt-0 pt-10 capitalize
           text-[#595959]"
          >
            About Our<span className="text-[#002060]"> Vision </span>
          </h1>
          <p className="drop-shadow-lg font-semibold">
            <span className="text-lg text-[#002060] font-bold">Mechfusion</span>
            , To be the leading multi discipline Engineering consulting service
            company providing Mechanical Engineering Services. <br />
            <br />
            <ul className="list-disc pl-5">
              <li>Building Healthy Client Loyalty</li>
              <li>Adopting Optimal Engineering Methodologies</li>
              <li>Empowering Effective Corporate Communication</li>
              <li>Endorsing Proactive Planning</li>
            </ul>
            <br />
          </p>
        </div>
      </div>

      {/* <MainMission /> */}
      {/* <MainAbout /> */}
    </Layout>
  );
}

export default About;