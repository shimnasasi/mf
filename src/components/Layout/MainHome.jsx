import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainHome() {
  return (
    <div
      className="w-full h-80 md:h-[100vh]  relative px-0 md:px-32
     bg-home-Services_four bg-center bg-cover flex justify-center
      md:justify-start items-center "
    >
      <div
        className="shadow-2lg shadow-[#595959] absolute md:top-16  
       md:p-10 w-full h-80  md:h-[65%] md:w-[50%]
        flex flex-col justify-center md:items-start items-center
          gap-8 bg-[#595959]/50 text-white"
      >
        {/* <div className=" "> */}
        <h1
          className="text-4xl w-52 md:w-full  md:text-5xl    md:text-start   text-center 
         capitalize font-bold  drop-shadow-xl"
        >
          the Art of Engineering
          <br /> 
        </h1>
        {/* <button className="">more</button> */}

        {/* </div> */}
        <p
          className=" md:w-full hidden
           md:flex text-justify text-lg capitalize
            drop-shadow-xl  font-semibold "
        >
          Welcome to the world of artful engineering, where creativity meets
          precision, and innovation thrives on a foundation of technical
          excellence. At Mechfusion we believe that engineering is not just
          about solving problems, it's about crafting elegant solutions that
          seamlessly blend form and function. From conceptualization to
          realization, our team of dedicated engineers harnesses the power of
          imagination and expertise to turn ideas into reality.
          {/* With a
          commitment to pushing boundaries and a passion for perfection, we
          strive to elevate every project into a masterpiece of modern
          engineering. Join us in redefining what it means to create, design,
          and build with artistry and ingenuity. */}
        </p>
        <button className="flex justify-center items-center gap-2  h-14 w-48 font-semibold text-xl bg-[#002060] hover:bg-[#002050]">
          Show More <FaArrowRightLong className="text-lg pt-0.5" />
        </button>
        {/* <Link to={"/Service"}>
          <button
            className=" w-52 h-10 font-bold   text-white
                         border border-[#002060]"
          >
            Show more
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default MainHome;