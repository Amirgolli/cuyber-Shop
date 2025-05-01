import React from 'react'

export default function comments({icon, name, stars, info}) {
  return (
    <>


            <div className="flex gap-4    bg-[#FAFAFA] rounded-sm p-2 ">
                <img src={icon} alt="person" className='w-16 h-15 rounded-full'/>
                <div className="flex flex-col items-baseline gap-3 ">
                    <h3 className="font-bold">{name}</h3>
                    <img src={stars} alt="stars" className='w-30' />
                    <p className='text-gray-400 tex-{15px} text-left'>{info}</p>
                </div>
            </div>

    </>
  )
}
