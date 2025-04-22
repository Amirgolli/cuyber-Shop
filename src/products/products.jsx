import React from 'react'
import FilterSection from '../components/filterSection';
import Cardproductmb from '../components/cardProductMB';
import LinkFilter from '../components/linkFilter.jsx'


import Watch from '../images/watch 14 pro 1.png';
import WatchPro from '../images/watch 14 pro.png';
import Zfold from '../images/galaxy.png';
import Buds from '../images/buds.png';
import Ipad from '../images/Ipad.png';
import airpod from '../images/headphone 14 pro 1.png';

import Flash from '../images/desktop/Flash.png'
import './products.css';
import { Route } from 'react-router';
import FilterMobile from './filterMobile.jsx';
// import Rating from '../images/desktop/rating.png'

export default function Home() {
  const number = 85;
  const Brands=[
    {
      brandName:"Apple"
    },
    {
      brandName:"Samsung"
    },
    {
      brandName:"Xiomi"
    },
    {
      brandName:"Poco"
    },
    {
      brandName:"OPPO"
    },
    {
      brandName:"Honor"
    },
    {
      brandName:"Motorola"
    },
    {
      brandName:"Nokia"
    }
  ]

  return (
    <>
      {/* .....................addressDK............. */}
      <div className="address" id='borderAddress'>
        <h3 className='txtAddress'>Home</h3>
        <img src={Flash} alt="" className='FlashAddress' />
        <h3 className='txtAddress'>Catalog</h3>
        <img src={Flash} alt="" className='FlashAddress' />
        <h3 className='txtAddressB'>Smartphones</h3>
      </div>
      {/* .....................filterMB............. */}
      <div id="btnsFilters">
        <LinkFilter></LinkFilter>
        {/* <Route path='/filter' element={<LinkFilter/>}></Route> */}
        <select id='padd' className="flex items-center justify-around w-40 h-12 rounded-sm  border border-gray-300">
              <option value="">by rating</option>
              <option value="">by cheep</option>
              <option value="">by expensive</option>
            </select>
      </div>
      {/* .....................cardsDK............. */}

      <section id="cardsDK">
        <div className="filterPart">
          <FilterSection
            title={"Brand"}
          >
            <input type="text" name="search" id="searchBrand" placeholder='search' />

            {
              Brands.map((brand,index)=>
              
              <div className="">
                <input type="checkbox" name="test1" id="txtBrand" />
                <label key={index} htmlFor="10">{brand.brandName}</label>
              </div>

              )
            }

          </FilterSection>
          <FilterSection
            title={"Battery capacity"}
          >
            <input type="text" name="search" id="searchBrand" placeholder='search' />

            {
              Brands.map((brand,index)=>
              
              <div className="">
                <input type="checkbox" name="test1" id="txtBrand" />
                <label key={index} htmlFor="10">{brand.brandName}</label>
              </div>

              )
            }

          </FilterSection>
          <FilterSection
            title={"Screen type"}
          >
            <input type="text" name="search" id="searchBrand" placeholder='search' />

            {
              Brands.map((brand,index)=>
              
              <div className="">
                <input type="checkbox" name="test1" id="txtBrand" />
                <label key={index} htmlFor="10">{brand.brandName}</label>
              </div>

              )
            }

          </FilterSection>
          <FilterSection
            title={"Screen diagonal"}
          >
            <input type="text" name="search" id="searchBrand" placeholder='search' />

            {
              Brands.map((brand,index)=>
              
              <div className="">
                <input type="checkbox" name="test1" id="txtBrand" />
                <label key={index} htmlFor="10">{brand.brandName}</label>
              </div>

              )
            }

          </FilterSection>
          <FilterSection
            title={"Protection class"}
          >
            <input type="text" name="search" id="searchBrand" placeholder='search' />

            {
              Brands.map((brand,index)=>
              
              <div className="">
                <input type="checkbox" name="test1" id="txtBrand" />
                <label key={index} htmlFor="10">{brand.brandName}</label>
              </div>

              )
            }

          </FilterSection>
        </div>
        <div className=" cardsPart">
          <div id="topCards">
            <div className="selectedProduct">
              selectedProduct : {number}
            </div>
            <select className="FilterBtnDK">
              <option value="">by rating</option>
              <option value="">by cheep</option>
              <option value="">by expensive</option>
            </select>
          </div>
          <div id="cardsPart">
          <Cardproductmb image={Watch} info={'Apple Watch Series 9 GPS 41...'} price={'$399'}></Cardproductmb>
          <Cardproductmb image={airpod} info={'AirPods Max Silver...'} price={'$549'}></Cardproductmb>
          <Cardproductmb image={WatchPro} info={'Samsung Galaxy Watch6 Classic...'} price={'$369'}></Cardproductmb>
          <Cardproductmb image={Zfold} info={'Galaxy Z Fold5 Unlocked|256GB...'} price={'$1799'}></Cardproductmb>
          <Cardproductmb image={Buds} info={'Galaxy Buds FE Graphite'} price={'$99.99'}></Cardproductmb>
          <Cardproductmb image={Ipad} info={'Apple iPad 9 10.2" 64GB Wi-Fi Silv...'} price={'$398'}></Cardproductmb>

          </div>
        </div>
      </section>
    
            
    </>
  )
}
