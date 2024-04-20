import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <div className="flex  w-full  h-80 bg-[#002060] text-white mt-5 md:mt-10">
      <div className=" pl-0 md:pl-32 flex w-full md:w-1/3 h-full 
      flex-col justify-center items-center md:items-start ">
        <Link className="/">
          <div className="flex">
            <h1 className="text-5xl font-bold cursor-pointer  ">Mech</h1>
            <h1 className="text-5xl font-bold cursor-pointer text-[#595959]">
              fusion
            </h1>
          </div>
        </Link>
        <div className="flex">
          <h1 className="text-[.60rem] uppercase text-[#595959] pl-24 pr-2">
            E n g i n e e r i n g
          </h1>
          <h1 className="text-[.60rem] uppercase text-[#595959]">
            S o l u t i o n s
          </h1>
        </div>
        <h1>
          Yelahanka Newtown<br />
          Bangalore <br />
          Karnataka India – 560064
        </h1>
      </div>
      <div className="hidden md:flex justify-center items-center 
       pr-32   gap-20 w-2/3 h-full bg-[#494949]">
        <ul className="flex flex-col gap-4">
          <li className="text-bold text-2xl">Quick Links</li>
          <Link to={"/"}>
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link to={"/About"}>
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link to={"/Service"}>
            {" "}
            <li>Services</li>{" "}
          </Link>
          <Link to={"/Contact"}>
            {" "}
            <li>Contact Us</li>{" "}
          </Link>
        </ul>
        
        <ul className="flex flex-col gap-4">
          <li className="text-bold text-2xl">Services</li>
          <Link to={"/Service/1"}>
            <li>Mechanical Design</li>
          </Link>
          <Link to={"/Service/2"}>
            {" "}
            <li>CNC Programming</li>
          </Link>
          <Link to={"/Service/3"}>
            {" "}
            <li>Engineering Documentation</li>
          </Link>
          <Link to={"/Service/4"}>
            <li>Other services</li>
          </Link>
        </ul>
        <div>
          <h1 className="flex text-xl pl-8 ">FOLLOW US</h1>
          <ul className="flex text-bold text-3xl gap-5 pt-5">
            
            <li>
              <a href="https://www.facebook.com/MechfusionEngineeringSolutions">
                <FaFacebook className="hover:scale-110  border-[#002060] cursor-pointer  hover:text-[#002060]" />
              </a>
            </li>
            
            <li>
              <a href="https://wa.me/+918138923143/?text=">
                <IoLogoWhatsapp className="hover:scale-110  border-[#002060] cursor-pointer  hover:text-[#002060]" />
              </a>
            </li>
            
            <li>
              <a href="https://www.linkedin.com/company/mechfusion/">
                <FaLinkedin className="hover:scale-110  border-[#002060] cursor-pointer  hover:text-[#002060]" />
              </a>
            </li>
           
            <li>
              <a href="https://www.instagram.com/mechfusion_/">
                <PiInstagramLogoFill className="hover:scale-110  border-[#002060] cursor-pointer  hover:text-[#002060]" />
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;