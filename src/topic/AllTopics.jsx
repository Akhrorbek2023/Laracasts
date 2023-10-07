import React from 'react'

const AllTopics = () => {
  return (
    <div>
      <div className='container'>
      <div className='flex items-center px-8 py-3 bg-blue-gray-800 opacity-75'>
            <div className='mr-6'>
                <img src="https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2" alt="" />
            </div>
            <div className='text-white'>
                <h1 className='text-[20px]'>AlpineJS</h1>
                <div className='flex text-[14px] space-x-4'>
                    <p>7 series</p>
                    <p>86 videos</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllTopics