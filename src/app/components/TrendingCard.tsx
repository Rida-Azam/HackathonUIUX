import React from 'react';
import Image from 'next/image';

export default function TrendingCard({ product }: any) {
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
            <span className="text-textcontact font-josefin font-bold text-md mr-2">${product.price}</span>
            <span className="text-textcontact opacity line-through   text-opacity-30 font-josefin font-bold text-md mr-2">${product.oldPrice}</span>

          </div>
        </div>
      </div>
    </div>
  );
}





// import React from 'react';
// import Image from 'next/image';

// export default function TrendingCard({ product }: any) {
//   return (
//     <div className="relative group bg-white rounded-sm  shadow-lg overflow-hidden w-[300px] h-[350px]">
//       {/* Product Image */}
//       <div className="w-full h-[250px]  bg-shade4 flex items-center justify-center relative">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={200}
//           height={150}
//           className="transition-transform  duration-300 group-hover:scale-110"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="bg-white p-4">
//         <h3 className="text-textcontact font-josefin font-bold text-lg text-center">
//           {product.name}
//         </h3>
//         <div className="text-center mt-2">
//           <span className="text-textcontact font-josefin font-bold text-lg mr-2">${product.price}</span>
//           <span className="text-pink1 font-josefin line-through text-sm">${product.oldPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React from 'react'
// import Image from 'next/image'


// function TrendingCard({ product }: any) {

//   return (
// <div className="relative group bg-g1  rounded-sm shadow-md overflow-hidden w-[300px] h-[300px]">
//         {/* Product Image */}
//         <div className="w-full h-[250px] flex items-center justify-center relative">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={200}
//             height={150}
//             className="transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>
  
   
  
//         {/* Product Info */}
//         <div className="bg-white p-4">
//           <div className="flex justify-center items-center">
//             <h3 className="text-textcontact font-josefin font-medium text-sm">{product.name}</h3>
//             <div className="text-sm">
//               <span className="text-textcontact font-josefin font-bold mr-2">${product.price}</span>
//               <span className="text-pink1 font-josefin line-through">${product.oldPrice}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//   )
// }

// export default TrendingCard