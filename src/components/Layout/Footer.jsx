import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex w-full  h-80 text-white mt-10">
      <div className="pl-32 flex w-1/3 h-full flex-col justify-center  bg-[#002060]">
        <Link className="/">
          <h1 className="text-4xl font-bold cursor-pointer uppercase ">
            Mech <span className="text-[#595959]">fusion</span>
          </h1>
        </Link>
        <h1 className="text-2xl">Engineering Solutions</h1>
        <h1>
          Santhosh nagar <br />
          Attur layout <br />
          Yelahanka Newtown<br />
          Bangalore <br />
          Karnataka India – 560064
        </h1>
      </div>
      <div className="pr-32 flex justify-end items-center gap-20 w-2/3 h-full bg-[#494949]">
        <ul>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
        </ul>
        <ul>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
        </ul>
        <ul>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
        </ul>
        <ul>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
          <li>oneee</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
