import React from 'react'
import Filter from '../images/desktop/Filter.png'
import { Link } from 'react-router-dom';

export default function linkFilter() {
  return (
    <>

    <Link to={'/filter'}>
      <button className=" flex items-center justify-around w-40 h-12 rounded-sm  border border-gray-300 ">
          <h3>Filters</h3>
          <img className='imgBtn' src={Filter}></img>
      </button>
    </Link>

    </>
  )
}
