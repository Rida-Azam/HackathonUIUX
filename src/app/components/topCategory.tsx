import React from "react";
import Image from "next/image";
import LastImage from "./maincomponent/lastimage";

const TopCategory = () => {
  const products = [
    { id: 1, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top1.png" },
    { id: 2, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top2.png" },
    { id: 3, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top3.png" },
    { id: 4, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top4.png" },
  ];

  return (
    <div className="bg-white py-12">
      <h2 className="text-textcontact font-josefin text-center font-bold text-2xl lg:text-3xl mb-8">
        Top Categories
      </h2>
      {/* Image */}
      <div className="flex flex-wrap justify-center gap-8">
  {products.map((product) => (
    <div
      key={product.id}
      className="relative flex flex-col items-center justify-center group"
    >
      {/* Fully Rounded Circle Container */}
      <div className="w-[269px] h-[269px] rounded-full p-8 bg-heximg flex items-center justify-center relative overflow-hidden">
        {/* Image */}
        <Image
          src={product.img}
          alt={product.name}
          width={150}
          height={150}
          className="object-contain z-10"
        />

        {/* Green 'View Shop' Button (visible on hover at the bottom of the image) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="#shop"
            className="bg-[#08D15F] text-white px-5 py-2  font-medium text-sm hover:bg-green-600 transition"
          >
            View Shop
          </a>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center mt-4">
        <p className="text-textcontact font-medium">{product.name}</p>
        <p className="text-textcontact text-sm">{product.price}</p>
      </div>
    </div>
  ))}
</div>



<div className="flex items-center justify-center mt-6">
  <Image
    src="/assets/images/doted.png"
    width={50}
    height={50}
    alt="Doted"
  />
</div>

<div className="relative mt-20">
  {/* Background Image */}
  <Image
    src="/assets/images/subscribe.png"
    width={1920}
    height={462}
    alt="Subscribe"
    className="w-full h-auto"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h2 className="text-textcontact font-josefin text-3xl font-bold mb-4">
      Get Latest Updates By Subscribing to <br /> Our Newsletter
    </h2>
    <a
      href="/subscribe"
      className="bg-pink1 text-white px-7 py-2 rounded-sm font-josefin font-medium hover:bg-pink-600 transition"
    >
      Shop Now
    </a>
  </div>
</div>


<div className="mt-8">
<LastImage />
</div>
    </div>
  );
};

export default TopCategory;









// import React from "react";
// import Image from "next/image";

// const TopCategories = () => {
//   const products = [
//     { id: 1, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top1.png" },
//     { id: 2, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top2.png" },
//     { id: 3, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top3.png" },
//     { id: 4, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top4.png" },
//   ];

//   return (
//     <div className="bg-white py-12">
//       <h2 className="text-textcontact font-josefin text-center font-bold text-2xl lg:text-3xl mb-8">
//         Top Categories
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative w-40 h-40 flex flex-col items-center justify-center group"
//           >
//             {/* Circle Container with hover effect */}
//             <div className="w-36 h-36 p-5 rounded-full flex items-center justify-center relative">
//               {/* Purple border on hover */}
//               <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#9877E7] transition-all duration-300"></div>
//               {/* Image */}
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="object-contain z-10"
//               />
//               {/* Button on hover */}
//               <button className="absolute bottom-2 hidden group-hover:block bg-[#28a745] text-white text-xs px-4 py-1 rounded-full">
//                 View Shop
//               </button>
//             </div>
//             {/* Text Content */}
//             <div className="text-center mt-4">
//               <p className="text-textcontact font-medium">{product.name}</p>
//               <p className="text-textcontac text-sm">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopCategories;













// import React from "react";
// import Image from "next/image";

// const TopCategories = () => {
//   const products = [
//     { id: 1, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top1.png" },
//     { id: 2, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top2.png" },
//     { id: 3, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top3.png" },
//     { id: 4, name: "Mini LCW Chair", price: "$56.00", img: "/assets/images/top4.png" },
//   ];

//   return (
//     <div className="bg-white py-12">
//       <h2 className="text-textcontact font-josefin text-center font-bold text-2xl lg:text-3xl mb-8">
//         Top Categories
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8 ">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative  w-40 h-40 flex flex-col items-center justify-center group"
//           >
//             {/* Circle Container with hover effect */}
//             <div className="w-50 h-50 p-5  bg-heximg rounded-full flex items-center justify-center group-hover:bg-[#9877E7] transition-all duration-300">
//               {/* Centered Image */}
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="object-contain"
//               />
//             </div>
//             {/* Text Content */}
//             <div className="text-center mt-4">
//               <p className="text-textcontact font-medium">{product.name}</p>
//               <p className="text-textcontac text-sm">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopCategories;












