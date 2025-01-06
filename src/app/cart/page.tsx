'use client';
import Image from "next/image";
import { useState } from "react";
import CartTotal from "./CartTotal"; // Adjust path based on your folder structure
import CalculateShipping from "./CalculateShip"; // Adjust path based on your folder structure
import Sameheader from "../components/maincomponent/sameheader";

function CartPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32, quantity: 1, img: "/assets/images/curt1.png" },
    { id: 2, name: "Vel faucibus posuere", color: "Brown", size: "XL", price: 32, quantity: 1, img: "/assets/images/curt2.png" },
    { id: 3, name: "Ac vitae vestibulum", color: "Brown", size: "XL", price: 32, quantity: 1, img: "/assets/images/curt3.png" },
    { id: 4, name: "Elit massa diam", color: "Brown", size: "XL", price: 32, quantity: 1, img: "/assets/images/curt4.png" },
    { id: 5, name: "Proin pharetra elementum", color: "Brown", size: "XL", price: 32, quantity: 1, img: "/assets/images/curt5.png" },
  ]);

  // Update quantity
  const updateQuantity = (id:number, type: "increase" | "decrease") => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                type === "increase"
                  ? product.quantity + 1
                  : product.quantity > 1
                  ? product.quantity - 1
                  : product.quantity,
            }
          : product
      )
    );
  };

  // Remove product
  const removeProduct = (id:number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
<div>
  <Sameheader start="Shopping Curt" middle="Home . Pages " last=" . Shopping Curt" />

  <div className="container mx-auto px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left Section: Product List */}
  <div className="col-span-2 bg-white rounded p-4">
    {/* Table Header */}
    <div className="grid grid-cols-4 text-sm font-bold text-textcolor4 font-josefin border-b pb-4">
      <h1 className="text-left pl-4">Product</h1>
      <h1 className="text-center">Price</h1>
      <h1 className="text-center">Quantity</h1>
      <h1 className="text-right pr-4">Total</h1>
    </div>
    {/* Products */}
    <div className="divide-y mt-4">
      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-4 items-center py-4">
          {/* Product Info */}
          <div className="relative flex items-center gap-4 pl-4">
            <div className="relative">
              <Image
                src={product.img}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              {/* Remove button */}
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute top-0 right-0 bg-black text-white w-5 h-5 rounded-full text-xs flex items-center justify-center hover:bg-red-600"
              >
                x
              </button>
            </div>
            <div>
              <h3 className="text-sm font-bold">{product.name}</h3>
              <p className="text-xs text-gray-600">Color: {product.color}</p>
              <p className="text-xs text-gray-600">Size: {product.size}</p>
            </div>
          </div>
          {/* Price */}
          <p className="text-center text-sm font-bold text-navyBlue">
            £{product.price.toFixed(2)}
          </p>
          {/* Quantity */}
          <div className="flex justify-center items-center">
            <button
              onClick={() => updateQuantity(product.id, "decrease")}
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
            >
              -
            </button>
            <p className="px-4">{product.quantity}</p>
            <button
              onClick={() => updateQuantity(product.id, "increase")}
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
          {/* Total */}
          <p className="text-right text-sm font-bold text-navyBlue pr-4">
            £{(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-6">
      <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
        Update Cart
      </button>
      <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
        Clear Cart
      </button>
    </div>
  </div>

  {/* Right Section: Cart Totals and Shipping */}
  <div className="space-y-6">
    <CartTotal products={products} />
    <CalculateShipping />
  </div>
</div>
</div>
  );
}

export default CartPage;






















