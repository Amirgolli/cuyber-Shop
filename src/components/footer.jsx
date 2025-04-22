import React from 'react'
import Twitter from '../images/Twitter.png';
import Facebook from '../images/Facebook.png';
import Tiktok from '../images/Tiktok.png';
import Instagram from '../images/Instagram.png';
import LogoFooter from '../images/Logo white.png';
import './footer.css'
export default function footer() {
    return (
        <div>
            <footer className="backFooter">
                <div className="footer">
                    <div className="about">
                        <img id='logoWhite' src={LogoFooter} alt="" />
                        <p id='pFooter'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                        <div className="socialMediaDK">
                            <img className='iconSocailMedia' src={Twitter} alt="" />
                            <img className='iconSocailMedia' src={Facebook} alt="" />
                            <img className='iconSocailMedia' src={Tiktok} alt="" />
                            <img className='iconSocailMedia' src={Instagram} alt="" />
                        </div>
                    </div>
                    <div id="lists">
                        <div className="listFooter">
                            <ul className='partList'>
                                <li className="titleFooter">Services</li>
                                <li className="liServises">Bonus program</li>
                                <li className="liServises">Gift cards</li>
                                <li className="liServises">Credit and payment</li>
                                <li className="liServises">Service contracts</li>
                                <li className="liServises">Non-cash account</li>
                                <li className="liServises">Payment</li>
                            </ul>
                        </div>
                        <div className="listFooter">
                            <ul className='partList'>
                                <li className="titleFooter">Assistance to the buyer</li>
                                <li className="liServises">Find an order</li>
                                <li className="liServises">Terms of delivery</li>
                                <li className="liServises">Exchange and return of goods</li>
                                <li className="liServises">Guarantee</li>
                                <li className="liServises">Frequently asked questions</li>
                                <li className="liServises">Terms of use of the site</li>
                            </ul>
                        </div>
                    </div>
                    <div className="socialMedia">
                        <img className='iconSocailMedia' src={Twitter} alt="" />
                        <img className='iconSocailMedia' src={Facebook} alt="" />
                        <img className='iconSocailMedia' src={Tiktok} alt="" />
                        <img className='iconSocailMedia' src={Instagram} alt="" />
                    </div>

                </div>

            </footer>
        </div>
    )
}
