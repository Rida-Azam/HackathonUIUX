import React from 'react';
import Image from 'next/image';
import LastImage from '../components/maincomponent/lastimage';
import Sameheader from '../components/maincomponent/sameheader';

const OrderComplete = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Header Section */}
      <Sameheader start="Order Completed" middle="Home . Pages . " last="Order Completed" />

      {/* Main Content */}
      <div className="md:container md:px-[1.3rem] px-[0.8rem] mt-12 md:mt-16">
        <div className="w-full flex justify-center relative">
          {/* Left Image */}
          <div className="absolute lg:right-3/4 2xl:right-3/4 hidden lg:block">
            <div className="relative w-16 md:w-20 h-16 md:h-20">
              <Image
                src="/assets/images/order3.png"
                alt="Left Decorative Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Order Details */}
          <div className="text-center border-dotted border-l-2 border-b-2 lg:w-[720px] 2xl:w-[840px] p-6 md:p-10 relative">
            <div className="flex justify-center">
              <div className="relative w-[70px] md:w-24 h-[70px] md:h-24">
                <Image
                  src="/assets/images/order1.png"
                  alt="Order Completed"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h2 className="md:text-[36px] text-primary font-josefin font-bold md:my-6 my-2">
              Your Order Is Completed!
            </h2>
            <div className="w-full flex justify-center">
              <p className="md:w-[80%] text-[#8D92A7] text-xs mb-4 font-lato">
                Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.
              </p>
            </div>
            <button className="px-8 py-2 bg-pink1 text-white font-lato font-semibold rounded hover:bg-pink-600 transition">
              Continue Shopping
            </button>
          </div>

          {/* Right Image */}
          <div className="absolute -bottom-8 left-3/4 hidden lg:block">
            <div className="relative w-16 md:w-20 h-16 md:h-20">
              <Image
                src="/assets/images/order2.png"
                alt="Right Decorative Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 md:mt-20">
        <LastImage />
      </div>
    </div>
  );
};

export default OrderComplete;



