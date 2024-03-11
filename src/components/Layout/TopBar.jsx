import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="w-full border-2 text-3xl items-center shadow-sm gap-5 font-bold py-1 px-32 text-[#002060]  bg-white flex justify-end ">
      <FaInstagram className="  hover:p-1 hover:scale-110 border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" />
      <FaFacebook className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem] rounded-full hover:text-[#002060]" />
      <FaWhatsapp  className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem] rounded-full hover:text-[#002060]" />
      <FaLinkedin className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem] rounded-full hover:text-[#002060]" />
    </div>
  );
}

export default TopBar;
