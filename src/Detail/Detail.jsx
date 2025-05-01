// import {  Link } from 'react-router-dom';
import Features from '../components/feature.jsx'
import Property from '../components/properties.jsx'
import DataMobile from '../components/dataMobile.jsx'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import Comments from '../components/comments.jsx'
import ViewMoreBtn from '../components/viewMore.jsx'
import Cardproductmb from '../components/cardProductMB';
import Watch from '../images/watch 14 pro 1.png';




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
import  Stars from '../images/4.8Stars.png'
import  Excellent from '../images/100.png'
import  Good from '../images/11.png'
import  Average from '../images/3.png'
import  Poor from '../images/8.png'
import  Below from '../images/1.png'
import Userone from'../images/FirstUser.png';
import Star4 from'../images/4Stars.png';
import Star5 from'../images/Stars5.png';
import UserTwo from'../images/User Two.png';
import UserThree from'../images/User Three.png';
import UserFour from'../images/User Four.png';
import GoldIphone from '../images/GoldIphone.png';
import WhiteIphone from '../images/WhiteIphone.png';
import airpod from '../images/headphone 14 pro 1.png';











export default function Detail() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  console.log('id from URL:', id); 
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );
  console.log('selectedProduct:', selectedProduct);


const ApiProduct=async()=>{
  setLoading(true);


  try{
    const response=await fetch('https://eshop-parsa.liara.run/products/');

    if(!response.ok){
      throw new Error('failed to get data from api');
    };
    const JsonApi= await response.json();
    setProducts(JsonApi);
    setError(null)
    loading(false);
    
    console.log("json api: JsonApi",JsonApi);


  }catch(err){
    setError(err.message);

  }finally{
    setLoading(false);
  }


  if(error){
    <p>error:{error}</p>
    
  }

};
useEffect(() => {
  ApiProduct();
}, []);


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
      text:selectedProduct ? selectedProduct.screen_size : '',

    },

    {
      icon:CPu,
      title:"CPU",
      text: selectedProduct ? selectedProduct.cpu: '',

    },

    {
      icon:Cores,
      title:"Number of Cores",
      text: selectedProduct ? selectedProduct.cores: '',

    },

    {
      icon:Camera,
      title:"Main camera",
      text:selectedProduct ? selectedProduct.main_camera: '',

    },

    {
      icon:FrontCamera,
      title:"Front-camera",
      text:selectedProduct ? selectedProduct.main_camera: '',

    },

    {
      icon:Battery,
      title:"Battery capacity",
      text:selectedProduct ? selectedProduct.battery_capacity: '',

    },
  ];


  const Prop=[
    {
      icon:Delivery,
      title:"FreeDelivery",
      fit:"1-2 days",
    },

    {
      icon:Home,
      title:"InStock",
      fit:"Today",
    },

    {
      icon:Guaranteed,
      title:"Guaranteed",
      fit:selectedProduct ? selectedProduct.warranty:'',
    },

  ];

  const StartsMb=[
    {
      img:Excellent,
      title:"Excellent",
      num:"100",
    },
    {
      img:Good,
      title:"Good",
      num:"11",
    },

    {
      img:Average,
      title:"Average",
      num:"3",
    },

    {
      img:Below,
      title:"Below ",
      num:"8",
    },

    {
      img:Poor,
      title:"poor",
      num:"1",
    },

  ];



  const ScreenData=[
    {
      tet:"Screen",
    },
    {
      sub:"Screen diagonal",
      data:selectedProduct ? selectedProduct.screen_size:'',
    },

    {
      sub:"The screen resolution",
      data:selectedProduct ? selectedProduct.screen_resolution:'',
    },

    {
      sub:"The screen refresh rate",
      data:selectedProduct ? selectedProduct.screen_refresh_rate : '',
    },


    {
      sub:"The pixel density",
      data:selectedProduct ? selectedProduct.pixel_density : '',
    },


    {
      sub:"Screen type",
      data:selectedProduct ? selectedProduct.screen_type:'',  
    },


    {
      sub:"Additional,hshly",
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
      data:selectedProduct ? selectedProduct.cpu:'',
    },

    {
      sub:"Number of cores",
      data:selectedProduct ? selectedProduct.cores:'',
    },

    // {
    //   sub:"Screen diagonal",
    //   data:"6.7",
    // },

  ]; 


  const CommentPerson=[
    {
      icon:Userone,
      name:"Grace Carey",
      stars:Star4,
      comnt:'I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤'
    },
    {
      icon:UserTwo,
      name:"Ronald Richards",
      stars:Star5,
      comnt:'This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.'
    },

    {
      icon:UserThree,
      name:"Darcy King",
      stars:Star4,
      comnt:'I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition and it is very nice phone '
    },

    {
      icon:UserFour,
      name:"John Malcolm",
      stars:Star4,
      comnt:'In Washington, it is already difficult to surprise with the opening of a new institution, but it is still possible. Especially if it is a True Cost project. Here you pay an entrance fee and get meals at cost price. '
    },

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
        <h3 className='hidden md:block text-gray-400 font-medium'>{selectedProduct? selectedProduct.category : ''}</h3>
        <img src={Flash} alt="" className='hidden md:block w-1.5' />
        <h3 className='hidden md:block text-gray-400 font-medium'>{selectedProduct ? selectedProduct.brand :''}</h3>
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
            <h2 className="font-medium text-[32px]">${selectedProduct? selectedProduct.discounted_price : '0'}</h2>
            <h2 className="font-light text-gray-400 text-[32px]">${selectedProduct ? selectedProduct.original_price : ''}</h2>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-6 items-center">Select color :</div>
            <div  className="h-8 w-8 bg-black rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#781DBC] rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#E10000] rounded-2xl"></div>
            <div  className="h-8 w-8 bg-[#E1B000] rounded-2xl"></div>
            <div   className="h-8 w-8  rounded-2xl"></div>
          </div>
          <div className="flex justify-around">
        {selectedProduct && selectedProduct.storages && selectedProduct.storages.length > 0 ? (
          selectedProduct.storages.map((num, index) => (
            <div
              className="border border-gray-300 h-12 w-22 rounded-md flex justify-center items-center text-gray-600 md:w-full"
              key={index}
            >
              {num}
            </div>
          ))
        ) : (
          <p>it has finished</p>
        )}
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

      <div className="bg-[#FAFAFA] pt-10 pb-10 pl-4 pr-4 h-340 md:h-300">
        
              <div className="flex flex-col justify-between bg-white rounded-sm items-baseline gap-8 pb-12 pt-12 pl-6 pr-6 md:mr-40 md:ml-40">
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

        <div className="flex flex-col gap-25 items-baseline ml-10 mr-10 pt-15">
          
          <h2 className="text-[24px]">Reviews</h2>
                  <div className="flex flex-col">
                  <div className=" w-[80vw] md:flex-row flex flex-col justify-between  rounded-sm  items-center gap-25 md:gap-0 ">
            <div className="flex flex-col bg-[#FAFAFA] h-50 justify-around rounded-2xl items-center md: w-60 md:justify-center ">
            <div className="flex flex-col items-center">
                  <h3 className='text-[56px] '>4.8</h3>
                  <h5 className='text-gray-400'>of 125 reviews</h5>
            </div>
            <img src={Stars} alt="" className='w-39' />
          </div>
          <div className="flex flex-col justify-between items-baseline gap-9 md:gap-5">
                  {
                    StartsMb.map((star,index)=>
                      <div key={index} className=' w-80 md:w-300 flex items-baseline justify-between'>
                    <span
                    >{star.title}</span>
                      <div className="flex items-baseline gap-5">
                      <img src={star.img} alt="" className="w-40 h-1 md:w-250 rounded-sm"/>
                      <p className='text-gray-400'>{star.num}</p>
                      </div>
                    
                      </div>

                    )
                  }

            </div>
                  
          </div>
          
                  </div>
                  <div className="flex items-center w-full md:w-fit flex-col gap-12 md:ml-40 mr-40 ">

                  <input type="text" className=' h-16 border border-gray-400 pl-5 text-gray-400 rounded-sm md:ml-40 md:mr-40' placeholder='Leave Comment' />

                    {
                      CommentPerson.map((cmn,index)=>
                          <Comments
                          name={cmn.name}
                          icon={cmn.icon}
                          stars={cmn.stars}
                          info={cmn.comnt}
                          key={index}
                        ></Comments>
                      
                      )
                    }
                  <ViewMoreBtn></ViewMoreBtn>

                </div>


                      <section >
                        <h3 className='mb-8 ml-[33px] text-left font-medium text-[24px] leading-8'>Related Products</h3>
                        <div className="flex flex-wrap gap-5 sm:gap-10 md:gap-20">
                          <Cardproductmb image={GoldIphone} info={'Apple iPhone 14 Pro 512GB Gold...'} price={'$1437'}></Cardproductmb>
                          <Cardproductmb image={airpod} info={'AirPods Max Silver...'} price={'$549'}></Cardproductmb>
                          <Cardproductmb image={Watch} info={'Apple Watch Series 9 GPS 41...'} price={'$399'}></Cardproductmb>
                          <Cardproductmb image={WhiteIphone} info={'Apple iPhone 14 Pro 1TB Gold (MQ2V3)'} price={'$1499'}></Cardproductmb>
                        </div>
                      </section>


    </div>      
    </>
  )
}
