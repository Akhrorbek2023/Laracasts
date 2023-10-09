import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center space-x-5">
      <div className="w-[320px] bg-blue-gray-800 px-2 py-4 rounded-[20px]">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <button className="border px-5 py-2 bg-blue-gray-800 text-blue-gray-600 rounded-[20px] hover:border-spacing-1 mr-4 hover:border-blue-600 hover:text-blue-700">
              Month
            </button>
            <button className="border px-5 py-2 bg-blue-gray-800 text-blue-gray-600 rounded-[20px] hover:border-spacing-1 mr-4 hover:border-blue-600 hover:text-blue-700">
              Year
            </button>
          </div>
          <div>
            <h1 className="text-[32px] text-blue-500">$15</h1>
          </div>
        </div>

       <div className="text-white text-center px-6">
       <h1 className="text-white text-[20px] font-[600]">Individual Plan</h1>

<img
  className="mx-auto"
  src="https://laracasts.com/images/plans/sub-monthly.svg?v=5"
  alt=""
/>

<p className="mb-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
  quis.
</p>

<button className="py-3 px-5 w-full font-[600] bg-blue-gray-700 rounded-[25px]">Select Plan</button>
       </div>
      </div>

      <div className="w-[320px] bg-blue-gray-800 px-2 py-4 rounded-[20px]">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <button className="border px-5 py-2 bg-blue-gray-800 text-blue-gray-600 rounded-[20px] hover:border-spacing-1 mr-4 hover:border-blue-600 hover:text-blue-700">
              Forever
            </button>
           
          </div>
          <div>
            <h1 className="text-[32px] text-blue-500">$319</h1>
          </div>
        </div>

       <div className="text-white text-center px-6">
       <h1 className="text-white text-[20px] font-[600]">Forever Plan</h1>

<img
  className="mx-auto"
  src="https://laracasts.com/images/plans/sub-lifetime.svg?v=5"
  alt=""
/>

<p className="mb-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
  quis.
</p>

<button className="py-3 px-5 w-full font-[600] bg-blue-gray-700 rounded-[25px]">Select Plan</button>
       </div>
      </div>

      <div className="w-[320px] bg-blue-gray-800 px-2 py-4 rounded-[20px]">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <button className="border px-5 py-2 bg-blue-gray-800 text-blue-gray-600 rounded-[20px] hover:border-spacing-1 mr-4 hover:border-blue-600 hover:text-blue-700">
              Month
            </button>
            <button className="border px-5 py-2 bg-blue-gray-800 text-blue-gray-600 rounded-[20px] hover:border-spacing-1 mr-4 hover:border-blue-600 hover:text-blue-700">
              Year
            </button>
          </div>
          <div>
            <h1 className="text-[32px] text-blue-500">$30</h1>
          </div>
        </div>

       <div className="text-white text-center px-6">
       <h1 className="text-white text-[20px] font-[600]">Individual Plan</h1>

<img
  className="mx-auto"
  src="https://laracasts.com/images/plans/sub-business.svg?v=5"
  alt=""
/>

<p className="mb-4 h-[70px]">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>

<button className="py-3 px-5 w-full font-[600] bg-blue-gray-700 rounded-[25px]">Select Plan</button>
       </div>
      </div>
    </div>
  );
};

export default Card;
