import React from 'react';
import '../index.css'
import CartCart from '../components/cartProduct';
import IphoneMB from '../images/Iphone 14 pro 1.png';
import airpod from '../images/headphone 14 pro 1.png';
import WatchPro from '../images/watch 14 pro 1.png';



export default function cart() {

    const cartData= [
        {
            name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
            code:25139526913984,
            num:1,
            price:1399,
            img: IphoneMB,
        },

        {
            name: "AirPods Max Silver for  gamers & designers",
            code:25139526913984,
            num:1,
            price:549,
            img: airpod,
        },

        {
            name: "Apple Watch Series 9 GPS 41mm Starlight 5 ",
            code:63632324,
            num:1,
            price:399,
            img: WatchPro,
        },
        
    ]
        
        const sum = cartData.reduce( (acc,item) => acc + item.price,0 )

        
    

  return (
    <>

<h1  className=" text-left font-bold text-[24px] border-t border-gray-400 m-5  md:pl-12 pt-12 mt-2.5">Shopping Cart</h1>


        <div  className="flex flex-col md:flex-row gap-5 m-4 md:ml-15 ">

        <div  className=" flex flex-col items-center">
                {
                    cartData.map((cart, index)=>
                    <CartCart
                    name={cart.name}
                    code={cart.code}
                    price={cart.price}
                    img={cart.img}
                    key={index}
                    >
                    </CartCart>
                    )

                }
            </div>

            <form  className='md:w-200 '>
                <section className="flex flex-col gap-10 border border-gray-200 m-4 p-10 ">
                    <h2 className='text-left text-[20px] font-medium'>Order Summary</h2>
                    <div className="flex flex-col  gap-10 ">
                        <div className="flex flex-col gap-1 ">
                            <label  className='text-left  text-gray-500' htmlFor="">Discount code / Promo code</label>
                            <input  className='h-10  border-gray-300 border rounded-sm pl-5' type="text" placeholder='Code'/>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label  className='text-left  text-gray-500 ml-4' htmlFor="">Your bonus card number</label>
                            <input  className='h-10  border-gray-300 border rounded-sm pl-5' type="text" placeholder='Enter Card Number'/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="">Subtotal</h4>
                        <span className="">${sum}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <h4 className="text-gray-500">Estimated Tax</h4>
                        <span className="">$50</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <h4 className="text-gray-500">Estimated shipping & Handling</h4>
                        <span className="">$29</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <h4 className="">Total</h4>
                        <span className="">$2426</span>
                    </div>

                    <button type="submit"  className="bg-black text-white rounded-sm h-14">Checkout</button>
                </section>

            </form>

        </div>

    </>
  )
}
