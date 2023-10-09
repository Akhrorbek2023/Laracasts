import React from "react";
import Book from "../assets/icons/bookIcon.svg"
import Clock from "../assets/icons/clockIcon.svg"
import ThreeLine from "../assets/icons/threelineIcon.svg"

const Card = () => {
  return (
    <>
    <div className="w-[1100px] bg-blue-gray-800 mx-auto overflow-hidden flex justify-between text-white rounded-[20px] mb-10">
      <div
        className=" bg-no-repeat bg-cover"
        style={{
          width: `350px`,
          height: `350px`,
          marginLeft: `-150px`,
          backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/build-shopify-apps-with-laravel.svg")`,
        }}
      ></div>
      <div className="w-[45%]">
        <h1 className="text-[14px] mb-4">
          CREATOR <span className="text-blue-600">SERIES</span>
        </h1>
        <h1 className="text-[32px] font-[600] mb-4">Build Advanced components for Filament</h1>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ipsa exercitationem laboriosam dolorem distinctio nihil explicabo in
          adipisci, ut necessitatibus nisi ipsum sequi alias quasi assumenda
          magnam quaerat, qui dicta.
        </p>
        <div className="flex items-center space-x-4">
            <h1 className="flex items-center "><img src={Book} alt="" /> 17 Lessons</h1>
            <h1 className="flex items-center "><img src={Clock} alt="" /> 2h 32m</h1>
            <h1 className="flex items-center "><img className="text-white" src={ThreeLine} alt="" /> Advanced</h1>
        </div>
        <div>
            <button className="bg-gray-500 w-[170px] py-2 mr-4 rounded-[15px] hover:text-blue-600 hover:bg-gray-400">PlaySeries</button>
            <button className="bg-gray-500 w-[170px] py-2 rounded-[15px] hover:text-blue-600 hover:bg-gray-400">Add to WatchList</button>
        </div>
      </div>
      <div className="w-[25%] px-4 py-4">
        <div className="bg-center bg-cover w-full h-full rounded-[10px]"
        style={{backgroundImage: `url(https://ik.imagekit.io/laracasts/instructors/167366.jpeg?tr=w-630)`}}>

        </div>
      </div>
    </div>

    <div className="w-[1100px] bg-blue-gray-800 mx-auto overflow-hidden flex justify-between text-white rounded-[20px]">
      <div
        className=" bg-no-repeat bg-cover"
        style={{
          width: `350px`,
          height: `350px`,
          marginLeft: `-150px`,
          backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232")`,
        }}
      ></div>
      <div className="w-[45%]">
        <h1 className="text-[14px] mb-4">
          CREATOR <span className="text-blue-600">SERIES</span>
        </h1>
        <h1 className="text-[32px] font-[600] mb-4">Avtomade Laravel Upgrades</h1>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ipsa exercitationem laboriosam dolorem distinctio nihil explicabo in
          adipisci, ut necessitatibus nisi ipsum sequi alias quasi assumenda
          magnam quaerat, qui dicta.
        </p>
        <div className="flex items-center space-x-4">
            <h1 className="flex items-center "><img src={Book} alt="" /> 17 Lessons</h1>
            <h1 className="flex items-center "><img src={Clock} alt="" /> 2h 32m</h1>
            <h1 className="flex items-center "><img className="text-white" src={ThreeLine} alt="" /> Advanced</h1>
        </div>
        <div>
            <button className="bg-gray-500 w-[170px] py-2 mr-4 rounded-[15px] hover:text-blue-600 hover:bg-gray-400">PlaySeries</button>
            <button className="bg-gray-500 w-[170px] py-2 rounded-[15px] hover:text-blue-600 hover:bg-gray-400">Add to WatchList</button>
        </div>
      </div>
      <div className="w-[25%] px-4 py-4">
        <div className="w-full h-full bg-center bg-cover rounded-[10px]"
        style={{backgroundImage: `url(https://ik.imagekit.io/laracasts/instructors/34923.jpeg?tr=w-630)`}}>

        </div>
      </div>
    </div>
    
    </>
  );
};

export default Card;
