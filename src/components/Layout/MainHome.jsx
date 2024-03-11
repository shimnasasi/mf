import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function MainHome() {
  return (
    <div className="w-full h-[100vh] relative px-32 bg-home-Services_four bg-center bg-cover ">
      <div className="shadow-2lg shadow-[#595959] absolute top-16 p-10 w-3/6  flex flex-col  gap-4 bg-[#595959]/70 text-white">
        <div className=" ">
          <h1 className="text-5xl capitalize font-bold  drop-shadow-xl">
            the Art of Engineering<br />
          </h1>
          {/* <h1 className="capitalize text-xl">for everyone</h1> */}
        </div>
        <p className="text-lg capitalize drop-shadow-xl  font-semibold ">
        Welcome to the world of artful engineering, where creativity meets precision, and innovation thrives on a foundation of technical excellence. At Mechfusion we believe that engineering is not just about solving problems, it's about crafting elegant solutions that seamlessly blend form and function. From conceptualization to realization, our team of dedicated engineers harnesses the power of imagination and expertise to turn ideas into reality. With a commitment to pushing boundaries and a passion for perfection, we strive to elevate every project into a masterpiece of modern engineering. Join us in redefining what it means to create, design, and build with artistry and ingenuity.

        </p>
        {/* <button className="flex justify-center items-center gap-2  h-14 w-48 font-semibold text-xl bg-[#002060] hover:bg-[#002050]">
          Learn More <FaArrowRightLong className="text-lg pt-0.5" />
        </button> */}
      </div>
    </div>
  );
}

export default MainHome;
