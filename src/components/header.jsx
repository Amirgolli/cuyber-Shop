import './header.css';
import React from 'react';
import burgurMenu from '../images/burgur menu.png';
import logo from '../images/Logo Vector.png';
// import search from './images/search.png';
import love from '../images/desktop/Vector love.png';
import buy from '../images/desktop/Vector buy.png';
import logIn from '../images/desktop/Vector log in.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {

    const[isVisible,setIsVisible] = useState(false);

    function BgMenu (){


        setIsVisible(true)

    }

    function backBgMenu(){
        setIsVisible(false)
    }

    return (

        

        <div>
            <div className="menu">
                <Link to={'/'}>
                    <h1><img id='logo' src={logo} alt="" /></h1>
                </Link>
                <img onClick={BgMenu} id='burgurMenu' src={burgurMenu} alt="burgur menu" />
            </div>

            <div className="menuDesktop  ">
                <div>
                    <h1><img id='logo' src={logo} alt="" /></h1>
                </div>
                <div>
                    <input id='searchBox' type="text" placeholder='search' />
                    {/* <img id='search' src={search} alt="searchIcon" /> */}
                </div>
                <ul className='flexListMenu'>
                    <Link to={'/'}>
                        <li className="listMenu">Home</li>
                    </Link>
                    <li className="listMenu">About</li>
                    <li className="listMenu">Contact</li>

                    <Link to={'/products'} onClick={backBgMenu} >
                    <span className="listMenu">Products</span>
                </Link>


                </ul>
                <div id='iconsMenu'>
                    <img className='iconM' src={love} alt="" />
                    <Link to={'/cart'}>
                        <img className='iconM' src={buy} alt="" />
                    </Link>
                    <img className='iconM' src={logIn} alt="" />
                </div>
            </div>

            <div

            
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div
            onClick={backBgMenu}
            className="h-8 w-8  flex items-center justify-center cursor-pointer mb-4"
          >
            X
          </div>
          <ul className="space-y-4">
            <li>
              <Link to={'/'} onClick={backBgMenu} className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
                <Link to={'/products'} onClick={backBgMenu} >
                    <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Products</span>
                </Link>
            </li>
            <li>
              <Link to={'./cart'}>
                <span onClick={backBgMenu} className="text-gray-700 hover:text-blue-500 cursor-pointer">cart</span>
              </Link>
            </li>
            <li>
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer">About</span>
            </li>
          </ul>
        </div>
      </div>

      {/* پس‌زمینه تیره (Backdrop) */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 bg-opacity-50 z-40"
          onClick={backBgMenu}
        ></div>
      )}
    </div>
    )
}
