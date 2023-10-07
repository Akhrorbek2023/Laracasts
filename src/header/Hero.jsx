import React from "react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="">
      <div className="container relative">
        <div className="hero__banner h-[750px] flex items-center px-10">
          <h1 className="text-[70px] font-[900] w-[53%] text-white">
            Your Path to Laravel Mastery 
            <span className="text-blue-500"> Starts Here...</span>
          </h1>
          <div></div>
        </div>
        <div className='absolute right-0 top-[100px]'>
            <Navigation/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
