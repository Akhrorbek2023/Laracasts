import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menu = [
    {
      id: 1,
      def: "deep dives",
      nameOf: "browse",
      name: "Series",
      href: "",
    },
    {
      id: 2,
      def: "pick a category",
      nameOf: "find",
      name: "Topics",
      href: "",
    },
    {
      id: 3,
      def: "learn this next",
      nameOf: "follow",
      name: "Path",
      href: "",
    },
    {
      id: 4,
      def: "engage the comunity",
      nameOf: "discuss",
      name: "Forum",
      href: "",
    },
    {
      id: 5,
      def: "watch our ad",
      nameOf: "play",
      name: "Commercial",
      href: "",
    },
    {
      id: 6,
      def: "you know what to do",
      nameOf: "join",
      name: "Sign Up",
      href: "",
    },
  ];

  const stats = [
    {
        id: 1,
        def: "multi-episode training",
        nameOf: "series",
        name: "193",
        href: "",
      },
      {
        id: 2,
        def: "new ones every week",
        nameOf: "lessons",
        name: "T2697",
        href: "",
      },
      {
        id: 3,
        def: "hours and hours of content",
        nameOf: "hours",
        name: "456",
        href: "",
      },
  ]
  const [hovers, setHover] = useState(false)

  const handleHover = ()=>{

  }
  return (
    <div>
      <div className="w-[320px] bg-black text-white pr-10 pl-2 py-10 rounded-[20px]">
        <ul>
            <h1 className="text-red-400 text-[20px] font-[600] mb-4">"menu"<span className="text-white">=>[</span></h1>
          {menu?.map((item) => (
            <li onMouseOver={()=>handleHover()} className="flex mb-2">
                <div className="space-y-1">
                    <div className={hovers ? "h-7 w-1 blue-500" : "h-7 w-1 bg-gray-500"}></div>
                    <div className={hovers ? "h-7 w-1 blue-500" : "h-7 w-1 bg-gray-500"}></div>
                </div>
              <Link className="hover:bg-blue-500 ml-2 w-full">
                <p className="text-[16px] text-gray-500   pl-4 mb-1">
                  //{item.def}
                </p>
                <h1 className="text-[20px] font-[600]   pl-4">
                  "{item.nameOf}" =>{" "}
                  <span className={hovers ? "text-white" :  "text-blue-500" }>
                    "{item.name}"
                  </span>
                  ,
                </h1>
              </Link>
            </li>
          ))}
          <h1 className="white text-[20px] font-[600] mb-4">],</h1>

          <h1 className="text-red-400 text-[20px] font-[600] mb-4">"stats"<span className="text-white">=>[</span></h1>
          {stats?.map((item) => (
            <li onMouseOver={()=>handleHover()} className="flex mb-2">
                <div className="space-y-1">
                    <div className={hovers ? "h-7 w-1 blue-500" : "h-7 w-1 bg-gray-500"}></div>
                    <div className={hovers ? "h-7 w-1 blue-500" : "h-7 w-1 bg-gray-500"}></div>
                </div>
              <Link className="hover:bg-blue-500 ml-2 w-full">
                <p className="text-[16px] text-gray-500   pl-4 mb-1">
                  //{item.def}
                </p>
                <h1 className="text-[20px] font-[600]   pl-4">
                  "{item.nameOf}" =>{" "}
                  <span className={hovers ? "text-white" :  "text-blue-500" }>
                    "{item.name}"
                  </span>
                  ,
                </h1>
              </Link>
            </li>
          ))}
          <h1 className="white text-[20px] font-[600] mb-4">],</h1>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
