import React from 'react';
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
            <img src="/assets/images/order3.png" alt="Left Decorative Image" className="w-16 md:w-20" />
          </div>

          {/* Order Details */}
          <div className="text-center border-dotted border-l-2 border-b-2 lg:w-[720px] 2xl:w-[840px] p-6 md:p-10 relative">
            <div className="flex justify-center">
              <img className="w-[70px] md:w-max" src="/assets/images/order1.png" alt="Order Completed" />
            </div>
            <h2 className="md:text-[36px] text-primary font-josefin font-bold md:my-6 my-2">Your Order Is Completed!</h2>
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
            <img src="/assets/images/order2.png" alt="Right Decorative Image" className="w-16 md:w-20" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
<div className='mt-12 md:mt-20'>
<LastImage />

</div>
    </div>
  );
};

export default OrderComplete;




















// import React from 'react';
// import LastImage from '../components/maincomponent/lastimage';
// import Sameheader from '../components/maincomponent/sameheader';

// const OrderComplete = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <Sameheader start="Order Completed" middle="Home . Pages . " last="Order Completed" />

//       {/* Main Content */}
//       <div className="md:container md:px-[1.3rem] px-[0.8rem] md:mt-32 mt-12 md:mb-32 mb-12">
//         <div className="w-full flex justify-center relative">
//           {/* Left Image */}
//           <div className="absolute lg:right-3/4 2xl:right-3/4 hidden lg:block">
//             <img src="/assets/images/order3.png" alt="Left Decorative Image" className="w-16 md:w-20 " />
//           </div>

//           {/* Order Details */}
//           <div className="text-center border-dotted border-l-2 border-b-2 lg:w-[720px] 2xl:w-[840px] p-6 md:p-10 relative">
//             <div className="flex justify-center">
//               <img className="w-[70px] md:w-max" src="/assets/images/order1.png" alt="Order Completed" />
//             </div>
//             <h2 className="md:text-[36px] text-navy md:my-6 my-2">Your Order Is Completed!</h2>
//             <div className="w-full flex justify-center">
//               <p className="md:w-[80%] text-tertiary text-xs mb-4">
//                 Thank you for your order! Your order is being processed and will be completed within 3-6
//                 hours. You will receive an email confirmation when your order is completed.
//               </p>
//             </div>
//             <button className="px-8 py-2 bg-pink1 text-white rounded hover:bg-pink-600 transition">
//               Continue Shopping
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="absolute -bottom-8 left-3/4 hidden lg:block">
//             <img src="/assets/images/order2.png" alt="Right Decorative Image" className="w-16 md:w-20" />
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <LastImage />
//     </div>
//   );
// };

// export default OrderComplete;
