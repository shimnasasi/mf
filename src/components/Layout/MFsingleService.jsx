import React from "react";
// import Slider from '../Pages/Slider'
import "swiper/css";
import "swiper/css/pagination";

function MFsingleService({ value, details, services, image3, image2, image1 }) {
  return (
    <>
      <div className="w-full h-64 bg-bannerbg md:px-32">
        <h1 className="text-white px-10 md:px-32 pt-24 text-4xl font-bold">
          Service
        </h1>
        <h2 className="text-white mx-32 pt-2 ">Home/Service</h2>
        <h2 className="text-white px-32 pt-2 text-xl"></h2>
      </div>
      <div className="w-full  bg-white">
        <div className=" flex md:px-64 justify-center items-center  gap-5 pt-10">
          <div className="w-2/3 flex flex-col gap-8">
            <h1 className=" text-3xl font-bold text-[#002060] ">{value}</h1>
            <p className=" text-justify md:pr-8 justify-center">{details}</p>
          </div>
          {/* <div className=""> */}
          {/* <div className="w-1/3 h-80 md:bg-design bg-cover bg-center md:flex  hidden "></div> */}
          <img
            src={image1}
            alt=""
            className="hidden md:flex shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 
             bg-home-Services_one bg-center bg-cover ml-10"
          />
          {/* </div> */}
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

              {/* <li>{list.service}</li> */}
            </div>
          ))}
        </div>
        {/* <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className="w-[60rem] h-20"
            >
                {
                    services.map((list, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-[18rem] h-20 border-t-4 border-[#898989] bg-white shadow hover:scale-105 duration-1000 '>
                                <h2 className='font-bold text-lg text-[#002060] mt-2 ml-2'>{list.service}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}

        {/* <Slider/> */}
        <div className="flex flex-col gap-8">
          {/* <div className='flex ml-72 mt-20'>

                    <img src={image3} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover' />

                    <img src={image2} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover ml-10' />

                    <img src={image1} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover ml-10' />
                </div> */}
          {/* <div className='flex ml-72 mt-3'>

                    <img src={image3} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover' />

                    <img src={image2} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover ml-10' />

                    <img src={image1} alt="" className='shadow-lg shadow-slate-400 hover:scale-105 duration-1000 w-72 h-72 bg-home-Services_one bg-center bg-cover ml-10' />
                </div> */}
        </div>
      </div>
    </>
  );
}

export default MFsingleService;