import React from "react";

function SideList() {
  const products = [
    {
      id: 1,
      image: "/assets/images/demo1.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 2,
      image: "/assets/images/demo2.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 3,
      image: "/assets/images/demo3.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 4,
      image: "/assets/images/demo4.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 5,
      image: "/assets/images/demo5.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6 max-w-4xl mx-auto mt-24">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center border-b py-4 gap-4 last:border-b-0"
        >
          {/* Product Image */}
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-gray-800 font-semibold text-sm md:text-base">
              {product.name}
            </h3>
            <p className="text-[#E1E1E4] text-xs md:text-sm">
              Color: {product.color}
            </p>
            <p className="text-[#E1E1E4] text-xs md:text-sm">Size: {product.size}</p>
          </div>

          {/* Product Price */}
          <div>
            <p className="text-textcontact font-bold text-sm px-6 -mt-8 md:text-base">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideList;
