import React from 'react'

export default function properties({img, title, text}) {
  return (
    <>

        <div className="flex flex-col items-center justify-evenly w-14 md:flex-row justify-around">
            <img src={img} alt="icon" />
            <div className="pb-.5">
                <h5 className='text-[#717171] text-[14px]'>{title}</h5>
                <p className=''>{text}</p>
            </div>
        </div>
    
    </>
  )
}
