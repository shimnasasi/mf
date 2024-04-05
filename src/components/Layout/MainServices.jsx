import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainServices() {
  return (
    <div className="flex w-full h-[30rem] ">
      <div className="w-2/6  bg-bannerbg bg-center bg-cover" />
      <div className="w-4/6 flex  ">
        <div className=" relative w-full bg-home-Services_one bg-cover bg-center ">
          <div className=" absolute w-full bg-[#002060]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              mechanical design
            </h1>
            <ul className="pl-5 flex flex-col gap-4">
              <li>Jigs and Fixtures</li>
              <li>Moulds</li>
              <li>Product Design</li>
              <li>Gauges</li>
              <li>Electrode Design</li>
              <li>Sheet metal</li>
            </ul>
            <Link to={"/Service/1"}>
              <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
                <FaArrowRightLong className="text-[#002060]" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_two bg-cover bg-center ">
          <div className=" absolute w-full bg-[#595959]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              CNC Programming
            </h1>
            <ul className="pl-5 flex flex-col gap-4">
              <li>Milling</li>
              <li>Turning</li>
              <li>CAM Sheet Generation</li>
              <li>Prototype Support</li>
              <li>CNC Process Planning</li>
              <li>CNC Programming Optimization</li>
            </ul>
            <Link to={"/Service/2"}>
              <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
                <FaArrowRightLong className="text-[#595959]" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_three bg-cover bg-center ">
          <div className=" absolute w-full bg-[#002060]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              Engineering Documentation
            </h1>
            <ul className="pl-5 flex flex-col gap-4">
              <li>Work Instruction (WI)</li>
              <li>Standard Operation Procedure (SOP)</li>
              <li>Control Plan</li>
              <li>Setup Approval Sheet</li>
              <li>CAM Sheet</li>
              <li>Inspection Plan / Inspection Report</li>
            </ul>
            <Link to={"/Service/3"}>
              <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
                <FaArrowRightLong className="text-[#002060]" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_four bg-cover bg-center ">
          <div className=" absolute w-full bg-[#595959]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              Other Services
            </h1>
            <ul className="pl-5 flex flex-col gap-4">
              <li>Mould Flow Analysis</li>
              <li>Part Costing</li>
              <li>Fixture Costing</li>
              <li>Prototype Manufacturing Support</li>
              <li>IT Training</li>
              
            </ul>
            <Link to={"/Service/4"}>
              <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
                <FaArrowRightLong className="text-[#595959]" />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
