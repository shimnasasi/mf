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
          <h1 className="capitalize text-xl">for everyone</h1>
        </div>
        <p className="text-lg capitalize drop-shadow-xl  font-semibold ">
          Mechfusion, your premier provider of Engineering services tailored to
          meet your design and manufacturing needs. With years of expertise in
          the industry, we pride ourselves on delivering innovative solutions
          that streamline your production processes and bring your ideas to life
          with precision and efficiency. Our dedicated team of skilled
          professionals utilizes cutting-edge technology and software to deliver
          high-quality designs, prototyping, and manufacturing services that
          exceed expectations. We are committed to provide personalized
          attention and customized solutions to help you achieve your goals.
        </p>
        <button className="flex justify-center items-center gap-2  h-14 w-48 font-semibold text-xl bg-[#002060] hover:bg-[#002050]">
          Learn More <FaArrowRightLong className="text-lg pt-0.5" />
        </button>
      </div>
    </div>
  );
}

export default MainHome;
