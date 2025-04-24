import React from 'react'
import Flash from '../images/desktop/Flash.png';
import { Link } from 'react-router-dom';
import IphoneMB from '../images/Iphone 14 pro 1.png';
import Back from '../images/back.png';
import Front from '../images/front.png';
import Inside from '../images/inside.png';



export default function Detail() {

  const Storages=[
    {
      str:'128GB'
    },
    {
      str:'256GB'
    },
    {
      str:'512GB'
    },
    {
      str:'1TB'
    },
  ]
  return (
    <>
        <div className="md:flex items-center gap-2 pl-42 pt-11 pb-11 mt-4 border-t border-t-gray-300 " >
        <Link to={'/'}>
          <h3 className=' hidden md:block text-gray-400 font-medium'>Home</h3>
        </Link>
        <img src={Flash} alt="" className='hidden md:block w-1.5' />
        <h3 className='hidden md:block text-gray-400 font-medium'>Catalog</h3>
        <img src={Flash} alt="" className='hidden md:block w-1.5' />
        <h3 className='hidden md:block text-gray-400 font-medium'>Smartphones</h3>
        <img src={Flash} alt="" className='hidden md:block w-1.5' />
        <h3 className='hidden md:block text-gray-400 font-medium'>Apple</h3>
        <img src={Flash} alt="" className='hidden md:block w-1.5' />
        <h3 className='hidden md:block text-black font-medium '>iPhone 14 Pro Max</h3>
      </div>



      <div  className="flex flex-col m-4 gap-10">
        <div className="flex flex-col gap-10">
          <img src={IphoneMB} className='w-620' alt="" />
          <div className="flex items-center justify-between">
            <img src={IphoneMB} className='w-20' alt="main" />
            <img src={Front} className='w-20 opacity-50' alt="front" />
            <img src={Back}  className='w-20 opacity-50'alt="back" />
            <img src={Inside} className='w-20 opacity-50' alt="inside" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-left text-[45px]">Apple iPhone 14 Pro Max</h1>
          <div className="flex gap-4">
            <h2 className="font-medium text-[32px]">$1399</h2>
            <h2 className="font-light text-gray-400 text-[32px]">$1499</h2>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-6 items-center">Select color :</div>
            <div  className="h-8 w-8 bg-black rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#781DBC] rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#E10000] rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#E1B000] rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#E8E8E8] rounded-2xl"></div>
          </div>
          <div className="flex justify-between">
            {
              Storages.map((num,index)=>
              
                <div className="border border-gray-300 h-12 w-22 rounded-md flex justify-center items-center text-gray-600" key={index}>{num.str}</div>
              )
            }
          </div>
        </div>
      </div>
        
    </>
  )
}
