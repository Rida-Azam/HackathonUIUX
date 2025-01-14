import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative w-full h-auto lg:h-[650px] bg-light px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Hanging Lamp (Hidden on small screens) */}
      <div className="absolute top-0 left-0 lg:left-20 hidden md:block">
        <Image
          src="/assets/images/heroimg2.png"
          alt="Hanging Lamp"
          width={150}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="z-10 max-w-lg text-center lg:text-left lg:absolute lg:left-[280px]">
        <p className="text-pink1 font-medium text-sm">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-black font-bold leading-tight mt-2 text-3xl lg:text-5xl">
          <span className="block whitespace-nowrap">New Furniture Collection</span>
          <span className="block">Trends in 2020</span>
        </h1>
        <p className="text-lightgray text-sm lg:text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="mt-6 bg-pink1 font-josefin hover:bg-pink-600 text-white text-sm py-3 px-6 rounded-sm">
          Shop Now
        </button>
      </div>

      {/* Chair Image (Responsive Sizing) */}
      <div className="absolute top-20 right-0 lg:right-10">
        <Image
          src="/assets/images/heroimg1.png"
          alt="Furniture Chair"
          width={350} // Smaller width for small screens
          height={450}
          className="object-contain md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[600px]"
        />
      </div>

      {/* Background Circle */}
      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/images/herobg.png"
          alt="Background Circle"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;










