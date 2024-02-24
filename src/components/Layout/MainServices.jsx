import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

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
            <ul className="pl-5">
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>three</li>
              <li>four</li>
            </ul>
            <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
              <FaArrowRightLong className="text-[#002060]" />
            </button>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_two bg-cover bg-center ">
          <div className=" absolute w-full bg-[#595959]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              mechanical design
            </h1>
            <ul className="pl-5">
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>three</li>
              <li>four</li>
            </ul>
            <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
              <FaArrowRightLong className="text-[#595959]" />
            </button>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_three bg-cover bg-center ">
          <div className=" absolute w-full bg-[#002060]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              mechanical design
            </h1>
            <ul className="pl-5">
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>three</li>
              <li>four</li>
            </ul>
            <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
              <FaArrowRightLong className="text-[#002060]" />
            </button>
          </div>
        </div>
        <div className=" relative w-full bg-home-Services_four bg-cover bg-center ">
          <div className=" absolute w-full bg-[#595959]/60 flex gap-3 flex-col p-5 h-full  text-white">
            <h1 className="capitalize text-2xl font-bold ">
              mechanical design
            </h1>
            <ul className="pl-5">
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>three</li>
              <li>four</li>
            </ul>
            <button className="bg-white w-12 h-12 text-2xl flex justify-center items-center absolute bottom-2 right-2">
              <FaArrowRightLong className="text-[#595959]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
