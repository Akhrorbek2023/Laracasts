import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../assets/icons/serachIcon.svg'


const Navbar = ({showModalSearch, setShowModalSearch ,showModalSignIn, setShowModalSignIn}) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleSearch = () => {
        setShowModalSearch(true)
    }
  return (
    <div className='relative'>
        <div className='flex justify-between items-center py-6 px-3'>
            <div>
            <Link>
            <img src="https://laracasts.com/images/logo/logo-white.svg" alt="image" />
            </Link>
            </div>
            <div>
                <form className='space-x-8' onSubmit={handleSubmit}>
                    <button className='px-2 py-2 bg-blue-gray-700 rounded-xl' onClick={()=>handleSearch()}>
                    <img className='fill-white text-white w-6' src={Search} alt="" />
                    </button>
                    <button onClick={()=>setShowModalSignIn(true)} className='text-white text-[18px]'>Sign In</button>
                    <button className='bg-blue-500 px-2 py-2 rounded-xl text-white font-bold'>Get Started for Free</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar