import React from "react";
import image1 from "../assets/single.png";
import image2 from "../assets/double.png";
import image3 from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="bg-white py-20 px-10 w-full ">
      <p className="text-green-500 text-3xl mx-auto mb-10 text-center font-mono">Card Designs</p>
        <div className="max-w-[1240px] grid mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="  flex flex-col px-5 py-8  bg-white justify-center shadow-xl rounded-md hover:scale-105 duration-300 mb-10">
        <img src={image1} alt="" className="w-20 mt-[-3rem] mx-auto" />
        <p className="text-center font-bold pt-4 text-2xl">Single User</p>
        <p className="text-center font-bold py-3 text-3xl"> $150</p>
        <div className="text-center">
          <p className=" border-b">500 GB Storage</p>
          <p className=" border-b">1 User Allowed</p>
          <p className=" border-b">Send up to 20 GB</p>
        </div>
        <button className="text-black mx-auto py-3 px-6 w-[200px] bg-gray-200 rounded-md mt-3 hover:bg-green-500 hover:text-black">
          Start Trial
        </button>
      </div>

      <div className="  flex flex-col px-5 py-8  bg-slate-300 justify-center shadow-xl rounded-md hover:scale-105 duration-300 mb-10">
        <img src={image2} alt="" className="w-20 mt-[-3rem] mx-auto" />
        <p className="text-center font-bold pt-4 text-2xl">Double User</p>
        <p className="text-center font-bold py-3 text-3xl"> $150</p>
        <div className="text-center">
          <p className=" border-b">1000 GB Storage</p>
          <p className=" border-b">2 User Allowed</p>
          <p className=" border-b">Send up to 50 GB</p>
        </div>
        <button className="text-black mx-auto py-3 px-6 w-[200px] bg-gray-400 rounded-md mt-3 hover:bg-green-500 hover:text-black">
          Start Trial
        </button>
      </div>

      <div className=" flex flex-col px-5 py-8  bg-white justify-center shadow-xl rounded-md hover:scale-105 duration-300 mb-10">
        <img src={image3} alt="" className="w-20 mt-[-3rem] mx-auto" />
        <p className="text-center font-bold pt-4 text-2xl">Triple User</p>
        <p className="text-center font-bold py-3 text-3xl"> $150</p>
        <div className="text-center">
          <p className=" border-b">1500 GB Storage</p>
          <p className=" border-b">3 User Allowed</p>
          <p className=" border-b">Send up to 100 GB</p>
        </div>
        <button className="text-black mx-auto py-3 px-6 w-[200px] bg-gray-200 rounded-md mt-3 hover:bg-green-500 hover:text-black">
          Start Trial
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cards;
