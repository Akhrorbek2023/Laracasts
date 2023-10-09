import React from "react";
import Card from "./Card";

const Creators = () => {
  return (
    <div className="bg-black  py-[50px]">
      <div className="container">
        <h1 className="text-blue-600 text-[32px] font-[600] text-center mb-4">Produced by Creators</h1>
        <p className="w-[700px] mx-auto text-center text-white mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum
          eos sit, asperiores praesentium aspernatur deleniti. Doloribus,
          aliquid quis? Incidunt!
        </p>
        <Card />
      </div>
    </div>
  );
};

export default Creators;
