import React from 'react'

export default function dataMobile({title,info, data,dataA, dataB, dataC, dataD }) {
  return (
    <>

            <h4 className=' font-medium text-[30px] text-left'>{title}</h4>
                  <div className="flex justify-between  border-b border-gray-300 w-[80vw]  md:w-[77.5vw]  first:border-none">
                    <p className='first:border-none'>{info}</p>
                    <div className="flex flex-col items-end">
                        <span>{data}</span>
                        <span>{dataA}</span>
                        <span>{dataB}</span>
                        <span>{dataC}</span>
                        <span>{dataD}</span>

                    </div>

                  </div>
    
    
    </>
  )
}
