import React from 'react';
import Image from 'next/image';

// Define the type for the product prop
interface Product {
  image: string;
  name: string;
  price: string;
  oldPrice?: number; // Optional old price
}

interface TrendingCardProps {
  product: Product;
}

export default function TrendingCard({ product }: TrendingCardProps) {
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
            <span className="text-textcontact font-josefin font-bold text-md mr-2">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-textcontact opacity-50 line-through font-josefin font-bold text-md mr-2">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
