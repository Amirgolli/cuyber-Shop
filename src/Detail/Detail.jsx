import React from 'react'
import {  Link } from 'react-router-dom';
import Features from '../components/feature.jsx'
import Property from '../components/properties.jsx'
import DataMobile from '../components/dataMobile.jsx'



import Flash from '../images/desktop/Flash.png';
import IphoneMB from '../images/Iphone 14 pro 1.png';
import Back from '../images/back.png';
import Front from '../images/front.png';
import Inside from '../images/inside.png';
import  Screen from '../images/screen.png'
import  Battery from '../images/battery.png'
import  Camera from '../images/camera.png'
import  Cores from '../images/cores.png'
import  FrontCamera from '../images/frontCamera.png'
import  CPu from '../images/CPU.png'
import  Delivery from '../images/Delivery.png'
import  Home from '../images/Home.png'
import  Guaranteed from '../images/Guaranteed.png'








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
  ];


  const FeaturesData=[
    {
      icon:Screen,
      title:"Screen size",
      text:"6.7"

    },

    {
      icon:CPu,
      title:"CPU",
      text:"Apple A16 Bionic"

    },

    {
      icon:Cores,
      title:"Number of Cores",
      text:"6"

    },

    {
      icon:Camera,
      title:"Main camera",
      text:"48-12 -12 MP"

    },

    {
      icon:FrontCamera,
      title:"Front-camera",
      text:"12 MP"

    },

    {
      icon:Battery,
      title:"Battery capacity",
      text:"4323 mAh"

    },
  ];


  const Prop=[
    {
      icon:Delivery,
      title:"FreeDelivery",
      fit:"1-2 day",
    },

    {
      icon:Home,
      title:"InStock",
      fit:"Today",
    },

    {
      icon:Guaranteed,
      title:"Guaranteed",
      fit:"1 year",
    },

  ];




  const ScreenData=[
    {
      tet:"Screen",
    },
    {
      sub:"Screen diagonal",
      data:"6.7",
    },

    {
      sub:"The screen resolution",
      data:"2796x1290",
    },

    {
      sub:"The screen refresh rate",
      data:"120 Hz",
    },


    {
      sub:"The pixel density",
      data:"460 ppi",
    },


    {
      sub:"Screen type",
      data:"OLED",
    },


    {
      sub:"Additionally",
      data:"Dynamic Island",
      data1:"Always-On display",
      data2:"HDR display",
      data3:"True ToneWide", 
      data4:"color (P3)"
    },

    {
      tet:"CPU",
    },
    {
      sub:"CPU",
      data:"A16 Bionic",
    },

    {
      sub:"Number of cores",
      data:"6",
    },

    // {
    //   sub:"Screen diagonal",
    //   data:"6.7",
    // },

  ];

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



      <div  className="flex flex-col items-center  m-4 gap-10 md:flex-row md:mb-35 md:mt-10 md:ml-50 md:mr-50">
          <img src={IphoneMB} className='h-150' alt="" />
          <div className="flex items-center justify-between md:flex-col gap-15">

            <img src={IphoneMB} className='w-13 md:w-50' alt="main" />
            <img src={Front} className='w-15 md:w-50 opacity-50' alt="front" />
            <img src={Back}  className='w-15 md:w-50 opacity-50'alt="back" />
            <img src={Inside} className='w-15 md:w-50 opacity-50' alt="inside" />

          </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-left text-[50px]">Apple iPhone 14 Pro Max</h1>
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
          <div className="flex justify-around">
            {
              Storages.map((num,index)=>
              
                <div className="border border-gray-300 h-12 w-22 rounded-md flex justify-center items-center text-gray-600 md:w-42" key={index}>{num.str}</div>
              )
            }

          </div>

            <div className="flex flex-wrap gap-1 justify-between">
              {
                FeaturesData.map((feature, index)=>

                  <Features
                  img={feature.icon}
                  title={feature.title}
                  txt={feature.text}
                  key={index}
                  ></Features>
                
                )
              }
            </div>

            <p className='text-left'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>

            <button type=" submit" className="bg-none border rounded-md h-15">Add to Wishlist</button>
            <button type=" submit" className="bg-black text-white border rounded-md h-15 ">Add to Wishlist</button>

            <div className="flex justify-between md:justify-center md:gap-52">
              {
                Prop.map((data, index)=>

                  <Property
                  img={data.icon}
                  title={data.title}
                  text={data.fit}
                  key={index}
                  ></Property>


                )
              }
            </div>

        </div>
      </div>

      <div className="bg-[#FAFAFA] pt-10 pb-10 pl-4 pr-4 h-400">
        
              <div className="flex flex-col justify-between bg-white rounded-sm items-baseline gap-8 pb-12 pt-12 pl-6 pr-6">
                <h3 className='text-[35px]'>Details</h3>
                <p className='text-left text-[#9D9D9D] '>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                <div className="flex flex-col gap-4">
                  {
                    ScreenData.map((dt,index)=>

                      <DataMobile
                      title={dt.tet}
                      info={dt.sub}
                      data={dt.data}
                      dataA={dt.data1}
                      dataB={dt.data2}
                      dataC={dt.data3}
                      dataD={dt.data4}

                      key={index}
  
                      ></DataMobile>
                    )
                  }

                </div>


              </div>

        </div>       
    </>
  )
}
