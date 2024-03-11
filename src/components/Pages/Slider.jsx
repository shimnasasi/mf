import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { serviceData } from "../../Utils/config";

function Slider({services}) {
    // console.log(serviceData);
  return (
    <div className="flex items-center justify-center flex-col h-[12rem] bg-[#f5f5f6] ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 4,
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
        
        {/* <SwiperSlide className=" border border-t-4 border-[#898989] bg-white w-[20rem] font-bold text-[#002060] text-xl pl-2 pt-2">Mould Flow Analysis</SwiperSlide> */}
        {
                    services.map((list) => (
                        <div>
                            <div className='w-[12rem] h-16 border-t-4 border-[#898989] bg-white shadow hover:scale-105 duration-1000 '>
                                <h2 className='font-bold text-lg text-[#002060] mt-2 ml-2'>{list.service}</h2>
                            </div>
                        </div>
        // <SwiperSlide className=" border border-t-4 border-[#898989] bg-white w-[20rem] font-bold text-[#002060] text-xl pl-2 pt-2">{list.service}</SwiperSlide>


                    ))
                }
      </Swiper>
    </div>
  );
}

export default Slider;