import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="px-32 flex shadow-md text-white w-full h-20 items-center justify-between  border-red-900  bg-[#002060] ">
      <div>
        <Link to={"/"}>
          <h1 className="cursor-pointer text-5xl font-bold ">
            Mech<span className="text-[#595959]">fusion</span>
          </h1>
          <h1 className="text-xs uppercase text-right  text-[#595959] pr-2">
            E n g i n e e r i n g S o l u t i o n s
          </h1>
        </Link>
      </div>
      <ul className="capitalize flex  font-semibold gap-12">
    

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
    </div>
  );
}

export default Header;
