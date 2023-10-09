import React from 'react'
import Github from "../assets/icons/githubIcon.svg"
import Twitter from "../assets/icons/twitterIcon.svg"
 
const Card = () => {
  return (
    <div className='flex w-[390px] h-[320px] bg-blue-gray-900 relative pr-4 rounded-[10%] mb-[50px]'>
      <div>
      <div className='h-[130px]'>
            <div className='bg-red-500 w-[110px] h-[110px] rounded-[50%] absolute top-[-20px]'></div>
            <div className='w-[100px] bg-blue-500 h-[150px] rounded-[60px] absolute top-0 left-4 border-4'></div>
        </div>
        <div className='flex space-x-3 ml-4 py-10'>
            <img className='w-[30px] bg-blue-gray-500 rounded px-1 py-1' src={Twitter} alt="Twitter" />
            <img className='w-[30px] bg-blue-gray-500 rounded px-1 py-1' src={Github} alt="Github" />
        </div>
      </div>
        <div className='text-white w-[200px] ml-[50px]'>
            <h1 className='text-[24px] pt-4'>Teylar Otwel</h1>
            <p className='text-gray-400 text-[16px] mb-6'>Owner at Laravel</p>
            <p>I found and create  Laravel for the happiness of all santient being especially developers. Space pilgrim</p>
            <div className='flex mt-[45px] space-x-4'>
                <div className='w-[50px] h-[50px] bg-white rounded-[50%]'></div>
                <div className='w-[50px] h-[50px] bg-white rounded-[50%] '></div>
            </div>
        </div>
    </div>
  )
}

export default Card