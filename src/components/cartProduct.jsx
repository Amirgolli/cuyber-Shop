import React from 'react';
import { useState } from 'react';

export default function CartProduct({name, code, price, img}) {
  
  const[count,setCount]=useState(1);

  function Add(){
    setCount(count+1);
  }
  function Subtracting(){
    setCount(count-1);
  }


  return (
    <div className='flex justify-between items-center border-b border-gray-400'>

        <img className='w-30 pb-14.5 pt-10 ' src={img} alt="" />
        <div className=" flex flex-col md:flex-row md:gap-10 justify-between items-baseline ">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-medium text-left">{name}</h2>
            <p className='font-normal text-left'>#{code}</p>
          </div>
            <div className="flex justify-between items-center  w-50  ">
                <div className=" flex items-center gap-2 ">
                    <p className='cursor-pointer' onClick={Subtracting}> - </p>
                    <p>{count}</p>
                    <p className='cursor-pointer' onClick={Add}>+</p>
                </div>
                <h4>${price}</h4>
                <span>x</span>
            </div>
        </div>

    </div>
  )
}
