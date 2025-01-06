import EcommerceHeader from '@/app/components/maincomponent/EcommerceHeader'
import Sameheader from '@/app/components/maincomponent/sameheader'
import React from 'react'
import { BsCart2 } from 'react-icons/bs';
import { FaSearchPlus, FaStar } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import Image from 'next/image';
import LastImage from '@/app/components/maincomponent/lastimage';
import { FiSearch } from 'react-icons/fi';

function Sidebar() {

    const products = [
        {
          id: 1,
          img: "/assets/images/left1.png",
          name: "Dictum morbi",
          price: "$26.00",
          oldPrice: "$52.00",
        },
        {
          id: 2,
          img: "/assets/images/left2.png",
          name: "Sodales sit",
          price: "$26.00",
          oldPrice: "$52.00",
        },
        {
          id: 3,
          img: "/assets/images/left3.png",
          name: "Nibh varius",
          price: "$26.00",
          oldPrice: "$52.00",
        },
         {
            id: 4,
            img: "/assets/images/left4.png",
            name: "Mauris quis",
            price: "$26.00",
            oldPrice: "$52.00",
          },
          {
            id: 5,
            img: "/assets/images/left5.png",
            name: "Morbi sagittis",
            price: "$26.00",
            oldPrice: "$52.00",
          },
          {
            id: 6,
            img: "/assets/images/left6.png",
            name: "Ultricies venenatis",
            price: "$26.00",
            oldPrice: "$52.00",
          }, {
            id: 7,
            img: "/assets/images/left7.png",
            name: "Scelerisque dignissim",
            price: "$26.00",
            oldPrice: "$52.00",
          },
       
      ];
      
  return (
    <div className='mb-20'>
    <Sameheader start='Shop Left Sidebar' middle='Home . Pages ' last=' . Shop Left Sidebar'/>
<EcommerceHeader/>


<div className="flex px-4 md:px-8 lg:px-12">
  {/* Sidebar Section */}
  <aside className="w-1/4 bg-white  p-4">
    <div className="mb-6">
      <h2 className="text-lg font-bold underline text-textcontact font-josefin mb-4">Product Brand</h2>
      <ul className="space-y-2">
  {[
    "Coaster Furniture",
    "Fusion Dot High Fashion",
    "Unique Furniture Restor",
    "Dream Furniture Flipping",
    "Young Repurposed",
    "Green DIY furniture",
  ].map((brand, index) => (
    <li key={index} className="text-sm text-[#7E81A2]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={`brand-${index}`}
          className="h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-[#E5E0FC] checked:ring-0 checked:text-[#603EFF] checked:bg-[#603EFF] accent-white"
        />
        <label htmlFor={`brand-${index}`}>{brand}</label>
      </div>
    </li>
  ))}
</ul>
</div>

    <div className="mb-6">
      <h2 className="text-lg font-bold font-josefin text-textcontact underline mb-4">Discount Offer</h2>
      <ul className="space-y-2 text-clip">
  {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((offer, index) => (
    <li key={index} className="text-sm text-[#7E81A2]">
      <input
        type="checkbox"
        id={`offer-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`offer-${index}`}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-5 h-5 flex justify-center items-center bg-pink-100 rounded-md peer-checked:bg-pink-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-transparent peer-checked:text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {offer}
      </label>
    </li>
  ))}
</ul>


    </div>

    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4 underline text-textcontact font-josefin">Rating Item</h2>
      <div className="flex items-center mb-2">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFC416] text-xs" />
                ))}
                <FaStar className="text-[#B2B2B2] text-xs" />
                <p className='px-2 font-josefin font-semibold text-black'>(2341)</p>
              </div>
    
              <div className="flex items-center mb-2">
                {[...Array(3)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFC416] text-xs" />
                ))}
                <FaStar className="text-[#B2B2B2] text-xs" />
                <FaStar className="text-[#B2B2B2] text-xs" />
                <p className='px-2 font-josefin font-semibold text-black'>(1726)</p>
              </div>
              <div className="flex items-center mb-2 ">
                {[...Array(2)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFC416] text-xs" />
                ))}
                <FaStar className="text-[#B2B2B2] text-xs " />
                <FaStar className="text-[#B2B2B2] text-xs" />
                <FaStar className="text-[#B2B2B2] text-xs" />
                <p className='px-2 font-josefin font-semibold text-black'>(258)</p>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(2)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFC416] text-xs" />
                ))}
                <FaStar className="text-[#B2B2B2] text-xs" />
                <FaStar className="text-[#B2B2B2] text-xs" />
                <FaStar className="text-[#B2B2B2] text-xs" />
                <p className='px-2 font-josefin font-semibold text-black'>(25)</p>
              </div>
    </div>


    <div className="mb-6">
      <h2 className="text-lg font-bold underline text-textcontact font-josefin mb-4">Categories</h2>
      <ul className="space-y-2">
  {[
    "Prestashop",
    "Magento",
    "Bigcommerce",
    "osCommerce",
    "3dcart",
    "Bags",
    "Accessories",
    "Jewellery",
    "Watches",
  ].map((brand, index) => (
    <li key={index} className="text-sm text-[#7E81A2]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={`brand-${index}`}
          className="h-4 w-4 rounded-sm border border-gray-300 bg-pink1 focus:ring-0 checked:bg-pink-500 checked:border-transparent"
        />
        <label htmlFor={`brand-${index}`} className="cursor-pointer">
          {brand}
        </label>
      </div>
    </li>
  ))}
</ul>
</div>


<div className="mb-6">
      <h2 className="text-lg font-bold underline text-textcontact font-josefin mb-4">Price Filter</h2>
      <ul className="space-y-2">
  {[
    "$0.00 - $150.00",
    "$150.00 - $350.00",
    "$150.00 - $504.00",
    "$450.00+",

   
  ].map((brand, index) => (
    <li key={index} className="text-sm text-[#7E81A2]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={`brand-${index}`}
          className="h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-[#E5E0FC] checked:ring-0 checked:text-[#603EFF] checked:bg-[#603EFF] accent-white"
        />
        <label htmlFor={`brand-${index}`}>{brand}</label>
      </div>
    </li>
  ))}
</ul>

<div className="flex items-center w-full max-w-sm mx-auto mt-4 border border-[#BCBDDB] rounded-md overflow-hidden shadow-sm">
      {/* Search Input */}
      <input
        type="text"
        placeholder="$10.00 - 20000$"
        className="w-full px-4 py-2 text-textcontact opacity-30 bg-white focus:outline-none "
      />

      {/* Search Icon Button */}
      <button
        type="submit"
        className="flex items-center justify-center px-4 hover:bg-blue-600 text-white"
      >
        <FiSearch className="w-5 h-5 text-[#BCBDDB]" />
      </button>
    </div>
</div>

    <div>
      <h2 className="text-lg font-bold mb-4 font-josefin underline text-textcontact">Filter By Color</h2>
      <div className="flex flex-wrap gap-4 mt-4">
  {/* Blue Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#5E37FF] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Blue</span>
  </div>

  {/* Orange Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#FF9437] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Orange</span>
  </div>

  {/* Brown Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#FFBF95] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Brown</span>
  </div>

  {/* Green Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#33D221] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Green</span>
  </div>

  {/* Purple Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#E248FF] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Purple</span>
  </div>

  {/* Sky Color */}
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 bg-[#26CBFF] rounded-full"></div>
    <span className="text-sm font-lato text-[#7E81A2]">Sky</span>
  </div>
</div>

    </div>
  </aside>

  {/* Product Section */}
  <div className="w-3/4 pl-4">
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
    



</div>


    </div>
    <LastImage/>

    </div>
  )
}

export default Sidebar