import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import Layout from '../Layout/Layout'
// import MainAbout from '../Layout/MainAbout'
import { FaArrowRightLong, FaMaskFace } from "react-icons/fa6";
import MainMission from '../Layout/MainMission';

function About() {
  return (
    <Layout>
      <div className='w-full h-64 bg-bannerbg px-32'>
        <h1 className="text-white mx-32 pt-24 text-5xl font-bold">About us</h1>
        <h2 className='text-white mx-32 pt-2 '>Home/About us</h2>
        {/* <MainAbout/> */}
      </div>
      <div className="w-full h-[100vh] flex px-32 ">
        <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-9">
          <div className="w-[10.5rem] text-right">
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
            <span className="text-lg text-[#002060] font-bold">MechFusion</span>,
            your premier provider of Engineering services tailored to meet your
            7          design and manufacturing needs. With years of expertise in the
            industry, we pride ourselves on delivering innovative solutions that
            streamline your production processes and bring your ideas to life with
            precision and efficiency. Our dedicated team of skilled professionals
            utilizes cutting-edge technology and software to deliver high-quality
            designs, prototyping, and manufacturing services that exceed
            expectations. We are committed to provide personalized attention and
            customized solutions to help you achieve your goals. <br />
            <br />
            We deliver professional services including full range of Mechanical
            CAD/CAM services, Engineering documentation, Costing, etc.
          </p>
          {/* <button className="text-white flex justify-center items-center gap-2  h-14 w-48 font-semibold text-xl bg-[#002060] hover:bg-[#002050]">
          Learn More <FaArrowRightLong className="text-lg pt-0.5" />
        </button> */}
        </div>
        <div className="w-full h-[40rem] bg-[#595959]/10 relative mt-12 ">
          <div className="absolute top-60 z-20 left-8 w-72 h-[22rem] shadow-xl bg-white flex justify-center items-center">
            <div className="bg-home-Services_three w-64 h-80 bg-cover bg-center" />
          </div>
          <div className="absolute top-20 right-10 w-[22rem] h-[22rem] shadow-xl bg-white flex justify-center items-center">
            <div className="bg-bannerbg w-80 h-80 bg-cover bg-center" />
          </div>
        </div>
      </div>

      <MainMission />
      {/* npm i react-awesome-slider */}

      {/* <div className="relative flex w-full justify-center h-[90vh] px-32">
        <div className="h-[80vh] w-[80vw] bg-blue-400">
        <AwesomeSlider className='bg-yellow-500  h-96 w-full'>
            <video src=""></video>
            <div className='bg-green-400'>2</div>
            <div className='bg-red-400'>3</div>
            <div className='bg-green-400'>4</div>
          </AwesomeSlider>
        </div> */}
        {/* <div className="w-[80vw] h-96 bg-red-500">
          <AwesomeSlider className='bg-yellow-500  w-[100vw]'>
            <div className=' w-full bg-red-400'>1</div>
            <div className='bg-green-400'>2</div>
            <div className='bg-red-400'>3</div>
            <div className='bg-green-400'>4</div>
          </AwesomeSlider>

        </div> */}
      {/* </div> */}

    </Layout>

  )
}

export default About