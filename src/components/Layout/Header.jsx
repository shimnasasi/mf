import React from "react";

function Header() {
  return (
    <div className="px-32 flex shadow-md text-[#002060] w-full h-16 items-center justify-between  border-red-900 ">
      <div>
        <h1 className="cursor-pointer text-3xl font-bold">
          Mech<span className="text-[#595959]">Fusion</span>
        </h1>
        <h1 className="text-xs uppercase text-right mt-[-8px] text-[#595959]">
          Engineering Solutions
        </h1>
      </div>
      <ul className="capitalize flex  font-semibold gap-12">
        <li className="cursor-pointer text-[#494949] hover:text-[#002060]">
          Home
        </li>
        <li className="cursor-pointer text-[#494949] hover:text-[#002060]">
          About us
        </li>
        <li className="cursor-pointer text-[#494949] hover:text-[#002060]">
          Service
        </li>
        <li className="cursor-pointer text-[#494949] hover:text-[#002060]">
          contact
        </li>
      </ul>
    </div>
  );
}

export default Header;
