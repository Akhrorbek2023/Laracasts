import React from 'react'
import { Link } from 'react-router-dom'
import Exit from "../assets/icons/exitIcon.svg"

const SignIn = ({setShowModalSignIn}) => {
  return (
    <div className='w-[500px] bg-gray-900 bg-opacity-90 rounded-[30px] py-[20px] mt-[100px] fixed'>
        <div>
            <img className='ml-4 w-10 cursor-pointer' onClick={()=>setShowModalSignIn(false)} src={Exit} alt="" />
            <h1 className='text-center text-white text-[24px] font-[600] mb-[40px]'>Log In</h1>
            <form className='w-[300px] mx-auto'>
               <div className='mb-8'>
               <label className='block text-white text-[14px] ml-4' htmlFor="email">Email</label>
                <input className='text-white w-[100%] bg-transparent outline-none px-4 py-3 ring-0 border-b-2 text-[14px]' type="email" name="email" id="email" placeholder='Enter Email' />
               </div>
               <div className='mb-8'>
               <label className='block text-white text-[14px] ml-4' htmlFor="password">Password</label>
                <input className='text-white w-[100%] bg-transparent outline-none px-4 py-3 ring-0 border-b-2 text-[14px]' type="password" name="password" id="password" placeholder='Enter Password' />
               </div>
               <button className='bg-blue-500 text-white w-[100%] rounded-[20px] py-2 mb-8'>Log In</button>
            </form>
            <Link>
            <h1 className='text-center text-white mb-6'>Forget your password?</h1>
            </Link>
            <Link>
            <h1 className='text-center text-white mb-6'>Sign Up</h1>
            </Link>
        </div>
    </div>
  )
}

export default SignIn