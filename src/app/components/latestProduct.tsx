'use client'
import React, { useState } from "react";
import LatestCard from "./LatestCard";
// LatestProduct Component
const LatestProduct = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  const products = [
    {
      id: 1,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest1.png', // Replace with real paths
      price: '42.00',
      oldPrice: '66.00',
    },
    {
      id: 2,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest2.png',
      price: '42.00',
      oldPrice: '66.00',
    },
    {
      id: 3,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest3.png',
      price: '42.00',
      oldPrice: '66.00',
    },
    {
      id: 4,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest4.png',
      price: '42.00',
      oldPrice: '66.00',
    },
    {
      id: 5,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest5.png',
      price: '42.00',
      oldPrice: '66.00',
    },
    {
      id: 6,
      name: 'Comfort Handy Craft',
      image: '/assets/images/latest6.png',
      price: '42.00',
      oldPrice: '66.00',
    },
  ];


  return (
<section className="w-full max-w-screen-xl mx-auto pl-10  px-4 py-8">
  {/* Tab Navigation */}

  <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">Leatest Products</h2>
     <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`mx-2 text-sm font-semibold py-2 px-4 border-b-2  duration-300 ${
              activeTab === tab ? " text-pink1 border-pink1" : "text-textcontact border-transparent hover:text-pink1"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>




  {/* Grid of Products */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <LatestCard key={product.id} product={product} />
    ))}
  </div>
</section>

  );
};

export default LatestProduct;











