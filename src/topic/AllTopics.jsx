import React from 'react'

const AllTopics = () => {

    const cards = [
        {
            id:1,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:2,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:3,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:4,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:5,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:6,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:7,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:8,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:9,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:10,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:11,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
        {
            id:12,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },

        {
            id:13,
            image: "https://laracasts.com/images/topics/icons/alpine-logo.svg?v=2",
            series:23,
            videos:86
        },
    ]
  return (
    <div className='pb-[50px]'>
      <div className='container'>
 <div className='grid grid-cols-6 space-x-3 space-y-3'>
    {
        cards?.map((item)=>(
            <div className='flex items-center px-6 py-2 bg-[#261240] rounded-[20px]'>
            <div className='mr-4'>
                <img src={item.image} alt="" />
            </div>
            <div className='text-white'>
                <h1 className='text-[20px]'>AlpineJS</h1>
                <div className='flex text-[10px] space-x-4'>
                    <p>7 series</p>
                    <p>86 videos</p>
                </div>
            </div>
        </div>
        ))
    }
 </div>
      </div>
    </div>
  )
}

export default AllTopics