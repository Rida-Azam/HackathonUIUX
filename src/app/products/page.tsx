"use client";
import Image from "next/image";
import {
  FaStar,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";
import Sameheader from "../components/maincomponent/sameheader";
import { FaRegHeart } from "react-icons/fa6";
import LastImage from "../components/maincomponent/lastimage";

function ProductDetailPage() {
  const products = [
    {
      id: 1,
      name: "Mens Fashion Wear",
      price: "$45.00",
      image: "/assets/images/related1.png", // Replace with your image path
      rating: 4,
    },
    {
      id: 2,
      name: "Women's Fashion",
      price: "$67.00",
      image: "/assets/images/related2.png", // Replace with your image path
      rating: 5,
    },
    {
      id: 3,
      name: "Wok Dummy Fashion",
      price: "$50.00",
      image: "/assets/images/related3.png", // Replace with your image path
      rating: 4,
    },
    {
      id: 4,
      name: "Top Wall Digital Clock",
      price: "$150.00",
      image: "/assets/images/related4.png", // Replace with your image path
      rating: 3,
    },
  ];

  return (
    <div>
      <Sameheader
        start="Product Details"
        middle="Home . Pages "
        last=" . Product Details"
      />
      <div className="px-16 lg:px-16 py-16">
        {/* Product Detail Section */}
        <div className="bg-white shadow-md rounded-md p-6 lg:p-8 mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Product Images */}
            <div className="flex gap-2">
              <div className="grid grid-cols-1 gap-1">
                <Image
                  src="/assets/images/product2.png"
                  alt="Product Image"
                  width={100}
                  height={250}
                  className="rounded-sm"
                />
                <Image
                  src="/assets/images/product3.png"
                  alt="Product Image"
                  width={100}
                  height={250}
                  className="rounded-sm"
                />
                <Image
                  src="/assets/images/product1.png"
                  alt="Product Image"
                  width={100}
                  height={250}
                  className="rounded-sm"
                />
              </div>
              <Image
                src="/assets/images/product4.png"
                alt="Product Image"
                width={250}
                height={100}
                className="rounded-sm"
              />
            </div>

            {/* Product Information */}
            <div>
              <h1 className="text-2xl font-bold mb-2 text-[#0D134E]">
                Playwood Arm Chair
              </h1>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFC416] text-xs" />
                ))}
                <p className="px-1 font-semibold text-textcontact">(26)</p>
              </div>

              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold text-textcontact">
                  $32.00
                </span>
                <span className="text-sm line-through font-semibold text-pink1">
                  $32.00
                </span>
              </div>

              <p className="text-[#0D134E] font-semibold mb-2">Color</p>
              <p className="text-[#A9ACC6] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.{" "}
              </p>

              <div className="flex items-center gap-2 px-8">
                <h1 className="  text-textcontact text-lg font-bold ">
                  Add to Cart
                </h1>
                <FaRegHeart className="text-[#535399] text-lg" />
              </div>
              <h1 className="text-textcontact font-semibold mb-2">
                Categories :
              </h1>
              <h1 className="text-textcontact font-semibold mb-2">Tags</h1>

              <div className="flex gap-2">
                <h1 className="text-textcontact font-semibold mb-2">Share</h1>
                <div className="w-5 h-5 flex items-center justify-center bg-textcontact rounded-full text-white">
                  <FaFacebookF />
                </div>
                <div className="w-5 h-5 flex items-center justify-center bg-pink1 rounded-full text-white">
                  <FaInstagram />
                </div>
                <div className="w-5 h-5 flex items-center justify-center bg-textcontact rounded-full text-white">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F8FE] w-full min-h-screen flex items-center justify-end">
        {/* Wrapper with more padding on both sides */}
        <div className="w-full max-w-7xl bg-[#F9F8FE] px-12 lg:px-16">
          <div className="py-12 lg:py-16">
            {/* Tabs Section with more margin */}
            <div className="flex gap-8 mb-8">
              <h1 className="text-textcontact font-bold font-josefin text-lg hover:border-b-2 border-textcontact cursor-pointer">
                Description
              </h1>
              <h1 className="text-textcontact font-bold font-josefin text-lg hover:border-b-2 border-textcontact cursor-pointer">
                Additional Info
              </h1>
              <h1 className="text-textcontact font-bold font-josefin text-lg hover:border-b-2 border-textcontact cursor-pointer">
                Reviews
              </h1>
              <h1 className="text-textcontact font-bold font-josefin text-lg hover:border-b-2 border-textcontact cursor-pointer">
                Video
              </h1>
            </div>

            {/* Content Section with increased margins and padding */}
            <div className="mb-8">
              <h2 className="mb-6 text-textcontact font-bold font-josefin text-lg ">
                Varius tempor.
              </h2>
              <p className="text-[#A9ACC6] text-md mb-8">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum.
                <br /> Scelerisque a, risus ac ante. Velit consectetur neque,
                elit, aliquet. Non varius proin sed urna, egestas consequat
                laoreet diam tincidunt. Magna eget faucibus
                <br /> cras justo, tortor sed donec tempus. Imperdiet consequat,
                quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>

            {/* More Detail Section with more margin */}
            <h2 className=" mb-6 text-textcontact font-bold font-josefin text-lg ">
              More Detail
            </h2>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex items-start gap-2 mb-6">
                  <FaArrowRight className="text-textcontact hover:text-blue" />
                  <p className="text-[#A9ACC6] text-md">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-white px-6 lg:px-16 py-10 mt-8">
        <h2 className="text-3xl font-bold mb-8 text-[#101750] font-josefin text-start">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-sm flex flex-col items-center"
            >
              {/* Ensure Image has padding and centered alignment */}
              <div className="rounded-md overflow-hidden p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={150}
                  className="object-cover"
                />
              </div>
              {/* Product Name and Stars on the Same Line */}
              <div className="flex justify-between items-center w-full px-4 mt-2">
                <h3 className="text-sm font-semibold font-josefin text-textcontact truncate">
                  {product.name}
                </h3>
                <div className="flex gap-1">
                  {Array(product.rating)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-yellow1">
                        ★
                      </span>
                    ))}
                  {Array(5 - product.rating)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-gray-300">
                        ★
                      </span>
                    ))}
                </div>
              </div>
              {/* Price on Next Line */}
              <p className="text-textcontact font-josefin font-bold mt-1 px-4 w-full text-left">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      <LastImage />
    </div>
  );
}

export default ProductDetailPage;
