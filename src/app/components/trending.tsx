import React from 'react';
import Image from 'next/image';
import TrendingCard from './TrendingCard';

function Trending() {
  const products = [
    { name: 'Cantilever Chair', price: '26.00', oldPrice: 42.0, image: '/assets/images/trending1.png' },
    { name: 'Cantilever Chair', price: '26.00', oldPrice: 42.0, image: '/assets/images/trending2.png' },
    { name: 'Cantilever Chair', price: '26.00', oldPrice: 42.0, image: '/assets/images/trending3.png' },
    { name: 'Cantilever Chair', price: '26.00', oldPrice: 42.0, image: '/assets/images/trending4.png' },
  ];

  const executiveProducts = [
    { name: 'Executive Seat Chair', price: 58.0, image: '/assets/images/executive1.png' },
    { name: 'Executive Seat Chair', price: 58.0, image: '/assets/images/executive2.png' },
    { name: 'Executive Seat Chair', price: 58.0, image: '/assets/images/executive3.png' },
  ];
  return (

<div className="bg-white py-8">
<h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">Trending Products</h2>

      {/* First Section - Product Grid */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {products.map((product, index) => (
          <TrendingCard key={index} product={product} />
        ))}
      </div>

{/* Second Section - Advertisements */}
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-1 lg:ml-20 px-4 lg:px-0">
  {/* Promotions */}
  <div className="col-span-2 flex flex-col lg:flex-row gap-6 lg:gap-2"> {/* Adjusted for responsiveness */}
    {/* Clock Promotion */}
    <div className="flex-1 bg-shade1 p-6 relative max-w-full lg:max-w-[400px]">
      <h2 className="text-xl font-bold font-josefin text-textcontact mb-4 text-left">
        23% off in all products
      </h2>
      <a className="text-pink1 underline font-lato font-semibold hover:text-pink-600 transition block text-left">
        Shop Now
      </a>
      {/* Clock Image */}
      <div className="absolute top-10 right-2">
        <Image src={'/assets/images/clock.png'} width={180} height={100} alt="clock" />
      </div>
    </div>

    {/* Table Promotion */}
    <div className="flex-1 bg-g1 p-6 relative max-w-full lg:max-w-[400px]">
      <h2 className="text-xl font-bold font-josefin text-textcontact mb-4 text-left">
        23% off in all products
      </h2>
      <button className="text-pink1 underline font-lato font-semibold hover:text-pink-600 transition block text-left">
        View Collection
      </button>
      {/* Table Image */}
      <div className="absolute bottom-2 inset-0 flex items-center justify-center">
        <Image src={'/assets/images/table.png'} width={250} height={200} alt="table" />
      </div>
    </div>
  </div>

  {/* Vertical Product List */}
  <div className="max-w-full lg:max-w-[300px] mr-0 lg:mr-20">
    {executiveProducts.map((product, index) => (
      <div key={index} className="flex items-center mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={60}
          className="bg-shade4"
        />
        <div>
          <h4 className="font-josefin px-2 font-bold text-textcontact"> {product.name}</h4>
          <p className="font-josefin px-2 text-sm text-textcontact"> ${product.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>

  )
}

export default Trending;
