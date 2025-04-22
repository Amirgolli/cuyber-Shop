import Flash from '../images/IconRight.png'
import FilterSection from '../components/filterSection';
import './products.css'
import React, { useState } from 'react';
import "tailwindcss";
import { Link } from 'react-router';



import './filterMobile.css'


export default function FilterMobile() {

  const [price,setPrice]= useState({from:1298,to:1298});
    const handleRangeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPrice({ from: value, to: value });}

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
    ];

    const storages=[
      {
        stor:'16GB'
      },
      {
        stor:'32GB'
      },
      {
        stor:'64GB'
      },
      {
        stor:'128GB'
      },
      {
        stor:'256GB'
      },
      {
        stor:'512GB'
      },
    ]
  return (
    <>
    <div className='filterMobile'> 
        <div className='flex items-center gap-4' id='topPage'>
            <Link to={'/products'}>
            <img className='w-2 h-3.5' src={Flash} alt="" />
            </Link>
            <h1>Filters</h1>
        </div>

    <section className ='titlePage'>
        <FilterSection title={"price"}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col text-gray-500">
          <span className='text-base'>from</span>
            <input
              type="number"
              value={price.from}
              onChange={(e) => setPrice({ ...price, from: parseInt(e.target.value) })}
              className='border-gray-500 border-1 w-20 rounded-sm text-center'

            />
            </div>
            <div className="flex flex-col text-gray-500">
              <span className='text-base'>to</span>
              <input
              type="number"
              value={price.to}
              onChange={(e) => setPrice({ ...price, to: parseInt(e.target.value) })}
              className='border-gray-500 border-1 w-20 rounded-sm text-center'
              />
            </div>
        
      </div>

      <input
          type="range"
          min="1000"
          max="5000"
          step="1"
          value={price.from}
          onChange={handleRangeChange}
        />

        </FilterSection>
                <div >
                  <FilterSection
                    title={"Brand"}
                  >
                    <input type="text" name="search" id="searchBrand" placeholder='search' />
        
                    {
                      storages.map((st,index)=>
                      
                      <div className="">
                        <input type="checkbox" name="test1" id="txtBrand" />
                        <label key={index} htmlFor="10">{st.stor}</label>
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
    </section>

    </div>
    </>
    
  )
}
