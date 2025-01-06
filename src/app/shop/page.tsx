import React from "react";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import Sameheader from "../components/maincomponent/sameheader";
import EcommerceHeader from "../components/maincomponent/EcommerceHeader";
import LastImage from "../components/maincomponent/lastimage";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Vel elit euismod",
      price: "$26.00",
      old: "$42.00",
      img: "/assets/images/gs1.png",
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      price: "$32.00",
      old: "$42.00",
      img: "/assets/images/gs2.png",
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      price: "$18.00",
      old: "$42.00",
      img: "/assets/images/gs3.png",
    },
    {
      id: 4,
      name: "Sed at fermentum",
      price: "$22.00",
      old: "$42.00",
      img: "/assets/images/gs4.png",
    },
    {
      id: 5,
      name: "Fusce pellentesque at",
      price: "$15.00",
      old: "$42.00",
      img: "/assets/images/gs5.png",
    },
    {
      id: 6,
      name: "Vestibulum magna laoreet",
      price: "$25.00",
      old: "$42.00",
      img: "/assets/images/gs6.png",
    },
    {
      id: 7,
      name: "Sollicitudin amet orci",
      price: "$28.00",
      old: "$42.00",
      img: "/assets/images/gs7.png",
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      price: "$30.00",
      old: "$42.00",
      img: "/assets/images/gs8.png",
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      price: "$20.00",
      old: "$42.00",
      img: "/assets/images/gs9.png",
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      price: "$40.00",
      old: "$42.00",
      img: "/assets/images/gs10.png",
    },
    {
      id: 11,
      name: "Lectus valputate faucibus",
      price: "$35.00",
      old: "$42.00",
      img: "/assets/images/gs11.png",
    },
    {
      id: 12,
      name: "Purus risus, ut",
      price: "$24.00",
      old: "$42.00",
      img: "/assets/images/gs12.png",
    },
  ];

  return (
    <div>
      <Sameheader
        start="Shop Grid Default"
        middle="Home . Pages"
        last=" . Shop Grid Default"
      />
      <EcommerceHeader />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 lg:px-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative group w-full h-64 flex items-center justify-center bg-heximg hover:bg-bglight rounded-t-md">
              <Image
                src={product.img}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />

              {/* Hover Icons */}
              <div className="absolute left-4 bottom-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <p className="font-medium font-josefin text-textcontact">
                {product.name}
              </p>
              {/* Color Options */}
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
                <div className="w-3 h-3 bg-[#EC42A2] rounded-full"></div>
                <div className="w-3 h-3 bg-[#8568FF] rounded-full"></div>
              </div>
              {/* Prices */}
              <div className="flex justify-center items-center gap-2 mt-2">
                <p className="text-textcontact font-lato font-bold">
                  {product.price}
                </p>
                <p className="text-pink1 font-lato line-through text-sm">
                  {product.old}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <LastImage />
    </div>
  );
};

export default Shop;
