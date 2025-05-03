import React from 'react'
import { Link } from 'react-router'

export default function LogIn() {
  return (
    <>

        <div className="flex flex-col gap-3 ml-5 mr-5 mt-30 md:ml-[35%] md:mr-[35%] mb-30 ">
            <input type="tel" name="" className=' h-14 rounded-md bg-[#F5F5F5]  pl-4' placeholder='Phone Number' />
            <input type="password" name="" className=' h-14 rounded-md bg-[#F5F5F5]  pl-4' placeholder='password' />
            <button className='bg-black text-white h-14 rounded-md' type="submit">Login</button>
            <Link to={'../signup'}>
              <h2 className="text-left cursor-pointer">Create account</h2>
            </Link>
        </div>
    
    </>
  )
}
