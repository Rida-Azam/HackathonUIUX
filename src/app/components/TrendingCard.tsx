import React from 'react';
import Image from 'next/image';

export default function TrendingCard({ product }) {
  return (
    <div className="bg-white p-2 rounded-sm shadow-lg w-[260px] h-[310px] flex items-center justify-center">
      {/* Inner Card */}
      <div className="relative group bg-shade4 overflow-hidden w-[250px] h-[300px]">
        {/* Product Image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={135}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white p-5">
          <h3 className="text-textcontact font-josefin font-bold text-md text-center">
            {product.name}
          </h3>
          <div className="text-center mt-2">
            <span className="text-textcontact font-josefin font-bold text-md mr-2">${product.price}</span>
            <span className="text-textcontact opacity line-through   text-opacity-30 font-josefin font-bold text-md mr-2">${product.oldPrice}</span>

          </div>
        </div>
      </div>
    </div>
  );
}





