// import Image from 'next/image';

// const ProductDetailCard = ({ product }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="relative">
//           <Image
//             src={product.image}
//             alt={product.name}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-lg md:rounded-none md:rounded-l-lg"
//           />
//           {/* Thumbnail grid (optional) */}
//           <div className="absolute bottom-2 left-2 grid grid-cols-3 gap-2">
//             {product.thumbnails.map((thumbnail, index) => (
//               <Image
//                 key={index}
//                 src={thumbnail}
//                 alt={product.name}
//                 width={30}
//                 height={30}
//                 className="rounded-full border border-gray-200"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="p-4">
//           <h2 className="text-lg font-semibold">{product.name}</h2>
//           <div className="flex items-center mt-2">
//             <span className="text-gray-500 mr-2">
//               {product.rating} stars
//             </span>
//             <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
//           </div>
//           <p className="text-gray-600 mt-2">
//             {product.description}
//           </p>
//           <div className="flex items-center mt-4">
//             <span className="text-red-500 font-semibold">
//               ${product.price}
//             </span>
//             <span className="text-gray-400 ml-2">
//               <s>${product.originalPrice}</s>
//             </span>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailCard;