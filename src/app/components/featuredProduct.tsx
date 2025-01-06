import React from "react";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const FeaturedProduct = () => {
  const featuredProducts = [
    { id: 1, name: "Cantilever Chair", code: "Y523201", price: "42.00", image: "/assets/images/featured1.png", isNew: true },
    { id: 2, name: "Cantilever Chair", code: "Y523201", price: "42.00", image: "/assets/images/featured2.png" },
    { id: 3, name: "Cantilever Chair", code: "Y523201", price: "42.00", image: "/assets/images/featured3.png" },
    { id: 4, name: "Cantilever Chair", code: "Y523201", price: "42.00", image: "/assets/images/featured4.png" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl font-bold  text-textcontact text-center mb-8 mt-4">Featured Products</h2>  
      <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="relative border  text-textcontact rounded-lg shadow-lg text-center group overflow-hidden"
          >
            {/* Product Image */}
            <div className="w-full h-56 sm:h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover"
              />

              {/* Icons on Hover - Top Left */}
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiShoppingCart
                  className="text-linear font-bold hover:text-blue bg-g1 cursor-pointer p-2 rounded-full"
                  size={27}
                />
                <CiHeart
                  className="text-linear font-bold hover:text-blue bg-g1 cursor-pointer p-2 rounded-full"
                  size={27}
                />
                <FaSearchPlus
                  className="text-linear font-bold hover:text-blue bg-g1 cursor-pointer p-2 rounded-full"
                  size={27}
                />
              </div>

              {/* View Details Button */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-[#08D15F] font-lato text-white px-3 py-1 rounded-sm text-sm hover:scale-105 transition-transform"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Product Information */}
            <div className="p-4 hover:bg-blue">
              <h3 className="text-sm font-semibold mt-2 mb-1 font-lato text-pink1 hover:text-white">
                {product.name}
              </h3>

              {/* Colored Lines */}
              <div className="flex justify-center items-center gap-1 mt-2 mb-2">
                <div className="w-4 h-[3px] bg-[#00009D]"></div>
                <div className="w-4 h-[3px] bg-[#05E6B7]"></div>
                <div className="w-4 h-[3px] bg-[#F701A8]"></div>
              </div>
              <p className="text-xs mb-1 font-josefin font-semibold text-textcontact hover:text-white">
                Code - {product.code}
              </p>

              <p className="text-xs mb-1 font-lato text-textcontact hover:text-white">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 mt-8 mb-2">
        <div className="w-5 h-[4px] bg-pink1"></div>
        <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
        <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
        <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
      </div>
    </section>
  );
};

export default FeaturedProduct;









// import React from "react";
// import Image from "next/image";
// import {  FaSearchPlus } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// const FeaturedProduct = () => {
//   const featuredProducts = [
//     { id: 1, name: "Cantilever Chair", code:'Y523201', price: "42.00", image: "/assets/images/featured1.png", isNew: true },
//     { id: 2, name: "Cantilever Chair", code:'Y523201',  price: "42.00", image: "/assets/images/featured2.png" },
//     { id: 3, name: "Cantilever Chair", code:'Y523201', price: "42.00", image: "/assets/images/featured3.png" },
//     { id: 4, name: "Cantilever Chair", code:'Y523201',  price: "42.00", image: "/assets/images/featured4.png" },
//   ];

//   return (
//     <section className="py-8 px-10 ">
//       <h2 className="text-2xl font-bold text-textcontact text-center mb-8 mt-4">Featured Products</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="relative border rounded-lg shadow-lg text-center group overflow-hidden"
//           >
//             {/* Product Image */}
//             <div className="w-full h-64 bg-heximg relative flex items-center justify-center overflow-hidden">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="object-cover"
//               />

//               {/* Icons on Hover - Top Left */}
//               <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <FiShoppingCart className="text-linear  font-bold hover:text-blue bg-g1 cursor-pointer  p-2 rounded-full" size={27} />
//                 <CiHeart className="text-linear  font-bold hover:text-blue bg-g1 cursor-pointer  p-2 rounded-full" size={27} />
//                 <FaSearchPlus className="text-linear  font-bold hover:text-blue bg-g1 cursor-pointer  p-2 rounded-full" size={27} />
//               </div>

//               {/* View Details Button on Hover */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button
//                   className="bg-[#08D15F] font-lato text-white px-3 py-1 rounded-sm text-sm hover:scale-105 transition-transform"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>

//             {/* Product Information */}
//             <div className="p-4  hover:bg-blue ">
//               <h3 className="text-sm font-semibold mt-2 mb-1 font-lato text-pink1 hover:text-white">{product.name}</h3>

//               {/* Colored Lines */}
//               <div className="flex justify-center items-center gap-1 mt-2 mb-2">
//                 <div className="w-4 h-[3px] bg-[#00009D]"></div>
//                 <div className="w-4 h-[3px] bg-[#05E6B7]"></div>
//                 <div className="w-4 h-[3px] bg-[#F701A8]"></div>
//               </div>
//               <p className="text-xs mb-1 font-josefin font-semibold text-textcontact hover:text-white">Code - {product.code}</p>

//               <p className="text-xs mb-1 font-lato text-textcontact hover:text-white">${product.price}</p>
//             </div>
//           </div>

          
//         ))}
//       </div>

//       <div className="flex justify-center items-center gap-1 mt-8 mb-2">
               
//                 <div className="w-5 h-[4px] bg-pink1"></div>
//                 <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
//                 <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
//                 <div className="w-3 h-[4px] bg-[#FEBAD7]"></div>
//               </div>

//     </section>
//   );
// };

// export default FeaturedProduct;



















// import React from "react";
// import Image from "next/image";
// import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

// // FeaturedProduct Component
// const FeaturedProduct = () => {
//   const featuredProducts = [
//     { id: 1, name: "Cantilever Chair", price: "42.00", image: "/assets/images/featured1.png", isNew: true },
//     { id: 2, name: "Cantilever Chair", price: "42.00", image: "/assets/images/featured2.png" },
//     { id: 3, name: "Cantilever Chair", price: "42.00", image: "/assets/images/featured3.png" },
//     { id: 4, name: "Cantilever Chair", price: "42.00", image: "/assets/images/featured4.png" },
//   ];

//   return (
//     <section className="py-8 px-10">
//       <h2 className="text-2xl font-bold text-textcontact text-center mb-8 mt-4">Featured Products</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="relative border rounded-lg shadow-lg text-center group overflow-hidden"
//           >
//             {/* Product Image */}
//             <div className="w-full h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="object-cover"
//               />

//               {/* Icons on Hover */}
//               <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300">
//                 <div className="flex gap-3">
//                   <FaHeart className="text-black hover:text-red-500 cursor-pointer" size={20} />
//                   <FaEye className="text-white hover:text-blue-500 cursor-pointer" size={20} />
//                   <FaShoppingCart className="text-white hover:text-green-500 cursor-pointer" size={20} />
//                 </div>
//                 <button className="bg-white text-black text-sm px-4 py-2 rounded-sm hover:bg-gray-200 transition">
//                   View Details
//                 </button>
//               </div>
//             </div>

//             {/* Product Information */}
//             <div className="p-4 text-gray-800">
//               <h3 className="text-sm font-semibold mt-2 mb-1 font-lato text-pink1">{product.name}</h3>

//               {/* Colored Lines */}
//               <div className="flex justify-center items-center gap-1 mt-2 mb-2">
//                 <div className="w-4 h-[3px] bg-[#00009D]"></div>
//                 <div className="w-4 h-[3px] bg-[#05E6B7]"></div>
//                 <div className="w-4 h-[3px] bg-[#F701A8]"></div>
//               </div>

//               <p className="text-xs mb-1 font-lato">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProduct;


















// import React from "react";
// import Image from "next/image"; // Import next/image for optimized image handling
// import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

// // FeaturedProduct Component
// const FeaturedProduct = () => {
//   const featuredProducts = [
//     { id: 1, name: "Cantilever Chair", price: '42.00', image: "/assets/images/featured1.png", isNew: true },
//     { id: 2, name: "Cantilever Chair", price: '42.00', image: "/assets/images/featured2.png" },
//     { id: 3, name: "Cantilever Chair", price: '42.00', image: "/assets/images/featured3.png" },
//     { id: 4, name: "Cantilever Chair", price: '42.00', image: "/assets/images/featured4.png" },
//   ];

//   return (
//     <section className="py-8 px-10">
//       <h2 className="text-2xl font-bold text-textcontact text-center mb-8 mt-4">Featured Products</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-lg text-center relative group overflow-hidden"
//           >
//             {/* Hover Icons */}
//             <div className="absolute top-4 left-4 flex gap-2 ">
//               <FaHeart className="text-gray-500 " size={14} />
//               <FaEye className="text-gray-500 group-hover:text-blue-500 cursor-pointer" size={14} />
//               <FaShoppingCart className="text-gray-500 group-hover:text-green-500 cursor-pointer" size={14} />
//             </div>

//             {/* Product Image container with fixed height */}
//             <div className="w-full h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={200}  // You can set the width as per the image's natural size
//                 height={200} // Set height as per the image's natural size
//                 className="object-cover rounded-lg"
//               />
//               {/* View Button */}
//               <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className="bg-green-500 text-white px-4 py-2 rounded text-xs">View Details</button>
//               </div>
//             </div>

//             {/* Product Information */}
//             <div className="p-4 group-hover:text-white transition-colors duration-300">
//               <h3 className="text-sm font-semibold mt-2 mb-1 font-lato text-textcontact group-hover:text-white">
//                 {product.name}
//               </h3>
//               <div className="flex justify-center items-center gap-1 mt-4 mb-2">
//                 <div className="w-4 h-[3px] bg-[#00009D]"></div>
//                 <div className="w-4 h-[3px] bg-[#05E6B7]"></div>
//                 <div className="w-4 h-[3px] bg-[#F701A8]"></div>
//               </div>
//               <p className="text-xs mb-1 font-lato text-textcontact group-hover:text-white">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProduct;
