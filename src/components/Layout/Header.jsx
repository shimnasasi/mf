import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Header() {
  const [view, setView] = useState(false)
  return (
    <div className="relative px-2 md:px-32 flex shadow-md text-white w-full h-20 items-center justify-between 
      bg-[#002060] ">
      <div>
        <Link to={"/"}>
          <h1 className="cursor-pointer text-5xl font-bold ">
            Mech<span className="text-[#595959]">fusion</span>
          </h1>
          <h1 className="text-[.60rem] uppercase text-right  text-[#595959] pr-2">
            E n g i n e e r i n g S o l u t i o n s
          </h1>
        </Link>
      </div>
      <ul className="md:flex hidden capitalize   font-semibold  md:gap-9">
        <Link to={"/"}>
          <li className="cursor-pointer text-white hover:text-[#595959]">
            Home
          </li>
        </Link>

        <Link to={"/About"}>
          <li className="cursor-pointer text-white hover:text-[#595959]">
            About us
          </li>
        </Link>
        <Link to={"/Service"}>
          <li className="cursor-pointer text-white hover:text-[#595959]">
            Service
          </li>
        </Link>
        <Link to={"/Career"}>
          <li className="cursor-pointer text-white hover:text-[#595959]">
            Career
          </li>
        </Link>
        <Link to={"/Contact"}>
          <li className="cursor-pointer text-white hover:text-[#595959]">
            Contact
          </li>
        </Link>
      </ul>
      <h1 className="text-2xl md:hidden" onClick={() => { setView(!view) }}><FaBars /></h1>
      {
        view ? (<ul className="flex flex-col md:hidden  
        bg-[#002060] absolute z-50 left-0 right-0 text-center top-20 
       capitalize   font-semibold  gap-9 py-5">
          <Link to={"/"}>
            <li className="cursor-pointer text-white hover:text-[#595959]">
              Home
            </li>
          </Link>

          <Link to={"/About"}>
            <li className="cursor-pointer text-white hover:text-[#595959]">
              About us
            </li>
          </Link>
          <Link to={"/Service"}>
            <li className="cursor-pointer text-white hover:text-[#595959]">
              Service
            </li>
          </Link>
          <Link to={"/Career"}>
            <li className="cursor-pointer text-white hover:text-[#595959]">
              Career
            </li>
          </Link>
          <Link to={"/Contact"}>
            <li className="cursor-pointer text-white hover:text-[#595959]">
              Contact
            </li>
          </Link>
        </ul>) : null
      }
    </div>
  );
}

export default Header;