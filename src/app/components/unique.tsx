import React from 'react';
import Image from 'next/image';

const Unique = () => {
  return (
    <div className="w-full bg-lightGray3  mt-16  flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-4 lg:gap-6 w-full max-w-6xl">
        {/* Left Side - Image */}
        <div className="relative w-full max-w-[350px] h-[300px] sm:max-w-[450px] sm:h-[400px] lg:max-w-[550px] lg:h-[500px] flex-shrink-0">
          <Image
            src="/assets/images/unique1.png" // Replace with your image path
            alt="B&B Italian Sofa"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Text and Features */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4 max-w-lg">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-textcontact font-josefin">
            Unique Features Of Latest & <br /> Trending Products
          </h2>

          {/* Features */}
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#F52B70]"></span>
              <p className="text-light_gray font-lato">
                All frames constructed with hardwood solids and laminates
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#2B2BF5]"></span>
              <p className="text-light_gray font-lato">
                Reinforced with double wood dowels, glue, screws, nails corner blocks
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#2BF5CC]"></span>
              <p className="text-light_gray font-lato">
                Arms, backs, and seats are structurally reinforced
              </p>
            </li>
          </ul>

          {/* Product and Price */}
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <button className="bg-pink1 text-white px-6 py-2 rounded-sm font-semibold hover:bg-pink-600 transition duration-300">
              Add To Cart
            </button>
            <div>
              <p className="font-josefin font-semibold text-textcontact">B&B Italian Sofa</p>
              <p className="text-textcontact font-semibold text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
