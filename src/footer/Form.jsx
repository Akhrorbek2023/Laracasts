import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center '>
        <form className='space-x-4'>
            <input className='py-3 px-6 rounded-[20px]' type="email" name="email" id="email" placeholder='Enter your email address' />
            <button className='px-4 py-3 bg-light-blue-800 text-white rounded-[20px]'>Subscribe</button>
        </form>
    </div>
  )
}

export default Form