import React from "react";

function MFsingleService({ value, details, services, image3, image2, image1 }) {
  return (
    <>
      <div className="w-full h-64 bg-bannerbg md:px-32">
        <h1 className="text-white px-10 md:px-32 pt-24 text-5xl font-bold">
          Service
        </h1>
        <h2 className="text-white mx-32 pt-2 ">Home/Service</h2>
        {/* <h2 className="text-white px-32 pt-2 text-xl"></h2> */}
      </div>
      <div className="w-full  bg-white">
        <div className=" flex md:px-64 justify-center items-center  gap-5 pt-10">
          <div className="w-2/3 flex flex-col gap-8">
            <h1 className=" text-3xl font-bold text-[#002060] ">{value}</h1>
            <p className=" text-justify md:pr-8 justify-center">{details}</p>
          </div>
          <img
            src={image1}
            alt=""
            className="hidden md:flex shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 
             bg-home-Services_one bg-center bg-cover ml-10"
          />
        </div>
        <h1 className="text-3xl font-bold px-40 md:px-64 mt-10 text-[#002060]">
          {" "}
          Services
        </h1>

        <div className="flex flex-wrap gap-8 w-full px-[12rem] pt-14 justify-center ">
          {services.map((list, index) => (
            <div key={index}>
              <div
                className="w-[14.2rem] h-16  border-[#898989] flex justify-center 
                items-center  bg-white mb-5
               shadow-xl shadow-[#595959] hover:scale-105 duration-1000  "
              >
                <h2 className="font-bold text-sm text-[#002060]">
                  {list.service}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MFsingleService;