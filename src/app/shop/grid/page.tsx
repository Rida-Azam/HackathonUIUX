import EcommerceHeader from '@/app/components/maincomponent/EcommerceHeader'
import LastImage from '@/app/components/maincomponent/lastimage'
import Sameheader from '@/app/components/maincomponent/sameheader'
import React from 'react'
import { BsCart2, BsStarHalf } from 'react-icons/bs';
import { FaSearchPlus, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { LuHeart } from 'react-icons/lu';


function ShopList() {


  

  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list1.png",
    },
    {
      id: 2,
      name: "In nulla",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list2.png",
    },
    {
      id: 3,
      name: "Vel sem",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list3.png",
    },
    {
      id: 4,
      name: "Porttitor cum",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list4.png",
    },
    {
      id: 5,
      name: "Nunc in",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list5.png",
    },
    {
      id: 6,
      name: "Vitae facilisis",
      rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list6.png",
    },
    {
      id: 7,
      name: "Curabitur lectus",
     rating:4.0,
      price: "$26.00",
      oldPrice: "$52.00",
      img: "/assets/images/list3.png",
    },
    
    
  ];
  return (
    <div>
      <Sameheader start='Shop List' middle='Home . Pages ' last=' . Shop List'/>
      <EcommerceHeader/>
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
  {products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-sm mb-4 p-3 md:p-4 lg:p-5 transition-shadow hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="w-full md:w-1/3 lg:w-1/4 mb-3 md:mb-0">
        <Image
          src={product.img}
          alt={product.name}
          width={250}
          height={150}
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-2/3 lg:w-3/4 md:pl-4">
        {/* Title and Dots */}
        <div className="flex gap-2 items-center mb-2">
          <h2 className="text-lg font-josefin text-textcontact font-bold">
            {product.name}
          </h2>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 bg-[#DE9034] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#E60584] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#5E37FF] rounded-full"></div>
          </div>
        </div>

        {/* Price, Old Price, and Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-lato text-textcontact font-semibold text-blue-600">
              {product.price}
            </span>
            <span className="text-xs line-through font-lato text-pink1">
              {product.oldPrice}
            </span>
          </div>
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-[#FFC416] text-xs" />
            ))}
            <FaStar className="text-[#B2B2B2] text-xs" />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#9295AA] font-lato text-sm mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est<br/>
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons (Horizontal Layout) */}
        <div className="flex gap-3">
          <div className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105">
            <BsCart2 className="text-blue text-base" />
          </div>
          <div className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105">
            <LuHeart className="text-blue text-base" />
          </div>
          <div className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105">
            <FaSearchPlus className="text-blue text-base" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



      <LastImage/>
    </div>
  )
}

export default ShopList











// {/* Hover Icons */}
//               <div className="absolute left-4 bottom-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
//                   <BsCart2 className="text-blue text-lg" />
//                 </div>
//                 <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
//                   <LuHeart className="text-blue text-lg" />
//                 </div>
//                 <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
//                   <FaSearchPlus className="text-blue text-lg" />
//                 </div>
//               </div>
          