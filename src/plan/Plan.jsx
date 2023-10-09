import React from "react";
import Card from "./Card";

const Plan = () => {
  return (
    <div className="bg-black py-[50px]">
      <div className="container">
        <h1 className="text-center text-[32px] font-[600] mb-4 text-white">A plan for every personality type.</h1>
        <p className="text-white font-[600] mb-10 w-[700px] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quibusdam exercitationem architecto consequuntur, sapiente reiciendis
          quasi inventore modi ut est delectus, voluptates aspernatur a nobis
          pariatur sunt. Provident, iure at.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Plan;
