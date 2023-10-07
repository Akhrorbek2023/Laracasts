import React from 'react'
import Search from "../assets/icons/serachIcon.svg"

const SearchModal = ({showMOdalSearch, setShowModalSearch}) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }


    const handleSearchExit = () =>{
        setShowModalSearch(false)
    }
  return (
    <div className=''>
        <div className=''>
            <div className=' w-[500px] float-right bg-black h-[100vh]'>
                <form onSubmit={handleSubmit} className=''>
                    <button onClick={()=>handleSearchExit()} className='bg-red-400 text-white px-4 py-2'>X</button>
                    <div className='flex items-center bg-blue-gray-900 w-[400px] mx-auto px-5 py-2 rounded-[20px] mt-[100px]'>
                    <label className='mr-5' htmlFor="search"><img src={Search} alt=""  /></label>
                    <input className='bg-transparent outline-none ring-0 text-white' type="search" name="search" id="search" placeholder='Larevel From Scratch' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchModal