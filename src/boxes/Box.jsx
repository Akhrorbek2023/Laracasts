import React from 'react'
import Card from './Card'

const Box = () => {
  return (
   <div>
    <div className='bg-black'>
    <div className='container'>
        <div className='text-white'>
            <h1 className='text-[32px] font-[600] text-center mb-4'>Moder. Current. Expert Teachers.</h1>
            <p className='w-[550px] mx-auto text-center text-[18px] '>In addition to our full-time instructors, we often reach out to
                <span className='text-blue-500'> top developers </span>in the programming space for their expertise.
            </p>
        </div>
        <div className='flex justify-between mt-[50px]'>
            <div className='mt-[50px]'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className='mt-[50px]'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Box