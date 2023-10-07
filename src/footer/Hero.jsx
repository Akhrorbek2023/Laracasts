import React from "react";
import { Link } from "react-router-dom";
import YouTube from "../assets/icons/youtubeIcon.svg"
import Twitter from "../assets/icons/twitterIcon.svg"
import GitHub from "../assets/icons/githubIcon.svg"

const Hero = () => {

    const learn = [
        {
            id:1,
            name:'Sign Up',
            href: ''
        },
        {
            id:2,
            name:'Sign In',
            href: ''
        },
        {
            id:3,
            name:'Pricing',
            href: ''
        },
        {
            id:4,
            name:'Series',
            href: ''
        },
        {
            id:5,
            name:'CreatorSeries',
            href: ''
        },
        {
            id:6,
            name:'Laravel Path',
            href: ''
        },
        {
            id:7,
            name:'Larabits',
            href: ''
        },
        {
            id:8,
            name:'Topics',
            href: ''
        },
        {
            id:9,
            name:'Teams',
            href: ''
        },
        {
            id:10,
            name:"Whats's news",
            href: ''
        },
        {
            id:11,
            name:'Cammersial',
            href: ''
        },
    ]

    const discuss = [
        {
            id:1,
            name:'Forum',
            href: ''
        },
        {
            id:2,
            name:'Podcast',
            href: ''
        },
        {
            id:3,
            name:'Blog',
            href: ''
        },
        {
            id:4,
            name:'SUpport',
            href: ''
        },
        {
            id:5,
            name:'Work with Us',
            href: ''
        },
    ]


    const extras = [
        {
            id:1,
            name:'Git sertificates',
            href: ''
        },
        {
            id:2,
            name:'FAQ',
            href: ''
        },
        {
            id:3,
            name:'Assets',
            href: ''
        },
        {
            id:4,
            name:'Get a job',
            href: ''
        },
        {
            id:5,
            name:'Provicy',
            href: ''
        },
        {
            id:6,
            name:'Terms',
            href: ''
        },
    ]
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex">

          <div className="w-[40%] mr-20">
            <Link to={"/"} className="">
              <img
                src="https://laracasts.com/images/logo/logo-white.svg"
                alt="Logo"
              />
            </Link>
            <h1 className="text-white font-[600] text-[18px] mt-6 mb-6">
              Nine out of ten doctors recomennded laracasts over competing
              brands. Come inside see for yourself , and massivily level up your
              development skills in the process.{" "}
            </h1>
            <div className="flex space-x-4">
                <div className="bg-gray-700 bg-opacity-60 rounded-[10px] px-3 py-3">
                    <Link>
                    <img className="w-[30px] fill-gray-400" src={YouTube} alt="" />
                    </Link>
                </div>
                <div className="bg-gray-700 bg-opacity-60 rounded-[10px] px-3 py-3">
                    <Link>
                    <img className="w-[30px] fill-gray-400" src={Twitter} alt="" />
                    </Link>
                </div>
                <div className="bg-gray-700 bg-opacity-60 rounded-[10px] px-3 py-3">
                    <Link>
                    <img className="w-[30px] fill-gray-400" src={GitHub} alt="" /></Link>
                </div>
            </div>
          </div>
          
          <div className="mr-20">
            <ul>
                <h1 className="text-white font-[500] text-[20px] mb-4">LEARN</h1>
               {
                learn?.map((item)=>(
                    <li>
                    <Link className="hover:text-white text-gray-500 font-[500]">{item.name}</Link>
                </li>
                ))
               }
            </ul>
          </div>

          <div className="mr-20">
            <ul>
                <h1 className="text-white font-[500] text-[20px] mb-4">DISCUSS</h1>
               {
                discuss?.map((item)=>(
                    <li>
                    <Link className="hover:text-white text-gray-500 font-[500]">{item.name}</Link>
                </li>
                ))
               }
            </ul>
          </div>

          <div className="mr-20">
            <ul className="">
                <h1 className="text-white font-[500] text-[20px] mb-4">EXTRAS</h1>
               {
                extras?.map((item)=>(
                    <li>
                    <Link className="hover:text-white text-gray-500 font-[500]">{item.name}</Link>
                </li>
                ))
               }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
