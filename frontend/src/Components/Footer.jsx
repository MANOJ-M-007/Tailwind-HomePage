import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-10 py-10 ">
      <div className="max-w-[1300px] mx-auto grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            React
          </h1>
        </div>
        <div className="text-footerText">
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300 text-lg">PRODUCT</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Prototyping tools</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">UI Design tools</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">UX Design tools</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Collaboration</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Design Systems</p>
        </div>
        <div className="text-footerText">
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300 text-lg">USE CASES</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Web design</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Mobile app design</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">VR & AR design</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Specifications</p>
        </div>
        <div className="text-footerText">
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300 text-lg">RESOURCES</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Login to account</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Download Justinmind</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Design templates</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Customer Stories</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Learn UX design</p>
        </div>
        <div className="text-footerText">
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300 text-lg">COMPANY</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Contact us</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">About us</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Brand Assets</p>
          <p className="hover:text-green-500 pb-2 hover:scale-105 transitin duration-300">Experts</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
