import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function MainMission() {
  return (
    <div className="w-full h-[100vh] flex flex-row-reverse px-32 ">
      <div className="w-full h-full flex  flex-col justify-center gap-3 text-justify p-9">
        <div className="w-[10.5rem] text-right">
          {/* <h1 className="cursor-pointer text-3xl text-[#002060] font-bold">
            Mech<span className="text-[#595959]">Fusion</span>
          </h1> */}
          {/* <h1 className="text-xs uppercase text-right mt-[-8px] text-[#595959]">
            Engineering Solutions
          </h1> */}
        </div>
        <h1 className="text-4xl font-bold capitalize text-[#595959]">
          About Our<span className="text-[#002060]">  Vision </span>
        </h1>
        <p className="drop-shadow-lg font-semibold pt-8">
          <span className="text-lg text-[#002060] font-bold">MechFusion</span>,
          To
          be the leading multi discipline Engineering consulting service
          company providing Mechanical Engineering Services. <br />
          <ul className="pt-8">
            <li>Building Healthy Client Loyalty</li>
            <li>Adopting Optimal Engineering Methodologies</li>
            <li>Empowering Effective Corporate Communication</li>
            <li>Endorsing Proactive Planning</li>
          </ul>
          <br />

        </p>
        {/* <button className="text-white flex justify-center items-center gap-2  h-14 w-48 font-semibold text-xl bg-[#002060] hover:bg-[#002050]">
          Learn More <FaArrowRightLong className="text-lg pt-0.5" />
        </button> */}
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

export default MainMission;
