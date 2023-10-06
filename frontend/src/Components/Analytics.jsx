import React, { useState, useEffect } from "react";
import image from "../assets/laptop.jpg";
import "./style.css";

const Analytics = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById("animation-trigger");
      if (
        element &&
        scrollPosition > element.offsetTop - window.innerHeight / 2
      ) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-white md:py-16 px-4 sm:py-8">
      <div className="max-w-[2040px] grid md:grid-cols-2 mx-auto">
        <div
          id="animation-trigger"
          className={`md:max-w-[400px] lg:max-w-[600px] mx-auto ${
            isAnimated ? "slide-in-left" : ""
          }`}
        >
          <img src={image} alt="null" />
        </div>
        <div className="md:py-10 sm:py-2">
          <div className={` ${isAnimated ? "slide-in-right line1" : ""}`}>
            <p className="sm:text-6xl md:text-4xl sm:pb-1 md:pb-1 font-bold text-purple-500">
              Hiiii...
            </p>
          </div>
          <div className={`${isAnimated ? "slide-in-right line2" : ""}`}>
            <p className="sm:text-6xl md:text-5xl sm:pb-4 md:pb-5 font-bold text-green-700">
              Our Services..{" "}
            </p>
          </div>
          <div className={`${isAnimated ? "slide-in-right line3" : ""}`}>
            <p className="lg:text-3xl md:text-3xl sm:text-4xl text-green-500 font-sans font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
