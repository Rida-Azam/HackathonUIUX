import Image from 'next/image';
import { TiTick } from 'react-icons/ti';

function Discount() {
  return (
    <div>
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">
        Discount Item
      </h2>

      {/* Navigation Section */}
      <nav className="flex justify-center items-center space-x-6 text-textcontact font-medium">
        <a
          href="#"
          className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
        >
          Wood Chair
        </a>
        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
        <a
          href="#"
          className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
        >
          Plastic Chair
        </a>
        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
        <a
          href="#"
          className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
        >
          Sofa Collection
        </a>
      </nav>

      <div className="bg-white p-6 max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-textcontact font-bold text-2xl lg:text-3xl">
            20% Discount Of All Products
          </h2>
          <p className="text-pink-600 font-semibold text-lg mt-2">Eams Sofa Compact</p>
          <p className="text-[#B8B8DC] text-sm lg:text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4 mt-6 text-[#B8B8DC]">
            <p className="flex items-center">
              <TiTick className="text-[#7569B2] text-xl mr-2" />
              Material expose like metals
            </p>
            <p className="flex items-center">
              <TiTick className="text-[#7569B2] text-xl mr-2" />
              Clear lines and geometric figures
            </p>
            <p className="flex items-center">
              <TiTick className="text-[#7569B2] text-xl mr-2" />
              Simple neutral colours
            </p>
            <p className="flex items-center">
              <TiTick className="text-[#7569B2] text-xl mr-2" />
              Material expose like metals
            </p>
          </div>
          <button className="mt-6 bg-pink1 text-white py-2 px-6 font-semibold hover:bg-pink-700">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="absolute inset-0 w-80 h-80 bg-[#FCECF1] rounded-full mx-auto"></div>
          <Image
            src="/assets/images/detail.png"
            alt="Chair"
            width={400}
            height={400}
            className="relative bottom-8 z-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Discount;
