import React from "react";

const Messege = () => {
  return (
    <div className="w-full grid md:grid-cols-2 text-white py-20 px-10 justify-center mx-auto">
      <div className="justify-center mx-auto mb-5">
        <p className="md:pl-5  font-bold text-2xl md:text-3xl lg:text-4xl">
          Want tips & tricks to optimize your flow?
        </p>
        <p className="md:pl-5 ">register to our newsletter...</p>
      </div>
      <div className="mx-auto ">
        <div className="pb-2 px-auto">
          <input
            type="text"
            style={{color:'black'}}
            placeholder="Enter your Email."
            className=" p-2 rounded-md mr-1 sm:px-5 sm:py-1 md:px-6 md:py-2 lg:px-5 lg:py-3"
          />
          <button className="p-2 md:text-1xl lg:text-1xl sm:px-5 sm:py-1 md:px-6 md:py-2 lg:px-10 lg:py-3 bg-green-300 rounded-lg text-black ml-2 font-bold">
            {" "}
            Notify me
          </button>
        </div>
        <div className="py-2">
          <p className="md:text-1xl lg:text-1xl">
            We carebout the protection of your data Read our{" "}
          </p>
          <p href='#'className="text-blue-500">Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Messege;
