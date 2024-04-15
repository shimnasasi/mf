import React from "react";

function MainAbout() {
  return (
    <div className="w-full md:h-[100vh]  md:flex md:px-32 ">
      <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify  p-9">
        <h1 className="text-4xl font-bold capitalize text-center md:text-justify text-[#595959]">
          What we <span className="text-[#002060]">Aimed </span>about?
        </h1>
        <p className="drop-shadow-lg font-semibold">
          <span className="text-lg text-[#002060] font-bold">Mechfusion</span>,
          your premier provider of Engineering services tailored to meet your
          design and manufacturing needs. With years of expertise in the
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
      </div>
      <div className="w-full h-[40rem] mt-10 bg-[#595959]/10 relative ">
        <div className="absolute top-60 z-20 left-8 w-72 h-[22rem] shadow-xl bg-white flex justify-center items-center">
          <div className="bg-home-Services_three w-64 h-80 bg-cover bg-center" />
        </div>
        <div className="absolute top-20 right-10 w-[22rem] h-[22rem] shadow-xl bg-white flex justify-center items-center">
          <div className="bg-bannerbg w-80 h-80 bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
}

export default MainAbout;