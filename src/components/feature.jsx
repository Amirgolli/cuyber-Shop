import React from 'react'

export default function feature({img, title, txt}) {
  return (
    <>

        <div className="flex items-center gap-3 h-16 w-45 pl-2 bg-[#F4F4F4] rounded-md mb-1.5 md:w-56">
            <img src={img} alt="icon" className='w-5 ' />
            <div className="flex flex-col items-start">
            <h1 className='text-[#C4C4C4] text-[14px]'>{title}</h1>
            <p className='text-gray-700 text-[14px]'>{txt}</p>
            </div>
        </div>
    
    </>
  )
}
