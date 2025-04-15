import './header.css';
import React from 'react';
import burgurMenu from '../images/burgur menu.png';
import logo from '../images/Logo Vector.png';
// import search from './images/search.png';
import love from '../images/desktop/Vector love.png';
import buy from '../images/desktop/Vector buy.png';
import logIn from '../images/desktop/Vector log in.png';


export default function header() {
    return (
        <div>
            <div className="menu">
                <h1><img id='logo' src={logo} alt="" /></h1>
                <img id='burgurMenu' src={burgurMenu} alt="burgur menu" />
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
                    <li className="listMenu">Home</li>
                    <li className="listMenu">About</li>
                    <li className="listMenu">Contact</li>
                    <li className="listMenu">Blog</li>
                </ul>
                <div id='iconsMenu'>
                    <img className='iconM' src={love} alt="" />
                    <img className='iconM' src={buy} alt="" />
                    <img className='iconM' src={logIn} alt="" />
                </div>
            </div>
        </div>
    )
}
