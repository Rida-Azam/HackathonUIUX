import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

function LatestCard({ product}:any) {
    return (
      <div className="relative group bg-g1 rounded-sm shadow-md overflow-hidden w-[300px] h-[300px]">
        {/* Product Image */}
        <div className="w-full h-[250px] flex items-center justify-center relative">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={150}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
  
        {/* Sale Badge */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Image
            src={'/assets/images/sale1.png'}
            alt="Sale"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
  
        {/* Hover Icons in Vertical Column */}
        <div className="absolute bottom-20 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
            <BsCart2 className="text-blue text-lg" />
          </div>
          <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
            <LuHeart className="text-blue text-lg" />
          </div>
          <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-110">
            <FaSearchPlus className="text-blue text-lg" />
          </div>
        </div>
  
        {/* Product Info */}
        <div className="bg-white p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-textcontact font-josefin font-medium text-sm">{product.name}</h3>
            <div className="text-sm">
              <span className="text-textcontact font-josefin font-bold mr-2">${product.price}</span>
              <span className="text-pink1 font-josefin line-through">${product.oldPrice}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
      
export default LatestCard  







