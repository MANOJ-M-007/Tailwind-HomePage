import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">HOME</li>
        <li className="p-4">COMPANY</li>
        <li className="p-4">RESOURSES</li>
        <li className="p-4">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React</h1>
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600">COMPANY</li>
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">RESOURSES</li>
          <li className="p-4 border-b border-gray-600">ABOUT</li>
          <li className="p-4 ">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
