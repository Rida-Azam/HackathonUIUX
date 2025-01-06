import React from 'react'
import Image from 'next/image'

function Post() {
    const products = [
        {
          id: 1,
          img: "/assets/images/postlist1.png",
          name: "Sapien ac",
         date:"Jan 09 2020",
         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.'
          
        },
        {
          id: 2,
          img: "/assets/images/postlist2.png",
           date:"Jan 09 2020",
          name: "Augue conva",
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.'
        },
       
      ];
  return (
   <div className="max-w-5xl mx-auto px-4 md:px-4 lg:px-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center bg-white shadow-md mb-4  md:p-4 lg:p-5 transition-shadow hover:shadow-lg"
          >
            {/* Product Image */}
            <div className="w-full md:w-1/3 lg:w-1/4 mb-3 md:mb-0">
              <Image
                src={product.img}
                alt={product.name}
                width={150}
                height={100}
                className="object-cover"
              />
            </div>
      
            {/* Product Details */}
            <div className="w-full md:w-2/3 lg:w-3/4 ">
              {/* Title and Dots */}
              <div className="flex gap-3 items-center mb-2">
                <h2 className="text-lg font-josefin text-textcontact font-bold">
                  {product.name}
                </h2>
                <div className="flex text-[#9295AA] font-lato">
                {product.date}
              </div>
              </div>
            
              {/* Description */}
              <p className="text-[#9295AA] font-lato text-sm mb-3">
               {product.description}
              </p>
          </div>
          </div>
     
        ))}
      </div>
      
      
  
  )
}

export default Post