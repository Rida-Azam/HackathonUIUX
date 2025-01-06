import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import {
 
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4 text-textcontact font-josefin">Search  </h2>
      {/* Search Bar */}
      <div className="relative mb-6 font-lato font-bold">
        <input
          type="text"
          placeholder="Search For Posts"
          className="w-full px-3 py-2 border border-gray-250 rounded focus:outline-none focus:border-pink-500"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4 text-textcontact font-josefin">Categories</h2>
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
          <div>
            <a
              href="#"
              className="bg-pink1 text-white px-3 py-1 rounded  font-lato font-bold text-sm hover:bg-pink-600"
            >
              Hobbies (14)
            </a>
          </div>
          <div className="font-lato font-bold">
            <a href="#" className="hover:text-pink-500  ">
              Women (21)
            </a>
          </div>
          <div className="font-lato font-bold">
            <a href="#" className="hover:text-pink-500">
              Women (21)
            </a>
          </div>
          <div className="font-lato font-bold">
            <a href="#" className="hover:text-pink-500">
              Women (21)
            </a>
          </div>
          <div className="font-lato font-bold">
            <a href="#" className="hover:text-pink-500">
              Women (21)
            </a>
          </div>
          <div className="font-lato font-bold">
            <a href="#" className="hover:text-pink-500">
              Women (21)
            </a>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-6 mt-4">
          <h2 className="text-lg font-bold mb-2 text-post_color font-josefin">Recent Posts</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/recentpost1.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700  hover:text-pink-500">
                It is a long established fact <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/recentpost2.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                It is a long established fact <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/recentpost3.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                It is a long established fact <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/recentpost4.png"
                alt="Post 2"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                It is a long established fact <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Sale Product  */}
        <div className="mb-6 mt-4">
          <h2 className="text-lg font-bold mb-2 text-textcontact font-josefin">Sale Product</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/saleproduct1.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                Elit ornare in enim mauris.
                <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/saleproduct2.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                Viverra pulvinar et enim. <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/assets/images/saleproduct3.png"
                alt="Post 1"
                className="w-14 h-12 rounded"
              />
              <a href="#" className="text-gray-700 hover:text-pink-500">
                Mattis varius donec fdsfd
                <br />
                <span>Aug 09 2020</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Offer Product */}
        <h2 className="text-lg font-bold mb-4 text-textcontact font-josefin">Offer Product</h2>
<div className="grid grid-cols-2 gap-x-1 gap-y-1 text-gray-700 items-center">
  <div className="flex flex-col items-center">
    <Image
      src={"/assets/images/offerpro1.png"}
      alt="product"
      width={120}
      height={80}
    />
    <a href="#" className="text-center text-xs hover:text-pink-500">
      Duis lectus est.
      <br />
      <span className="text-xs">$12.00 - $15.00</span>
    </a>
  </div>
  <div className="flex flex-col items-center">
    <Image
      src={"/assets/images/offerpro2.png"}
      alt="product"
      width={120}
      height={80}
    />
    <a href="#" className="text-center text-xs hover:text-pink-500">
      Set placerat.
      <br />
      <span className="text-xs">$12.00 - $15.00</span>
    </a>
  </div>
  <div className="flex flex-col items-center">
    <Image
      src={"/assets/images/offerpro3.png"}
      alt="product"
      width={120}
      height={80}
    />
    <a href="#" className="text-center text-xs hover:text-pink-500">
      Netus proin.
      <br />
      <span className="text-xs">$12.00 - $15.00</span>
    </a>
  </div>
  <div className="flex flex-col items-center">
    <Image
      src={"/assets/images/offerpro4.png"}
      alt="product"
      width={120}
      height={80}
    />
    <a href="#" className="text-center text-xs hover:text-pink-500">
      Platea in.
      <br />
      <span className="text-xs">$12.00 - $15.00</span>
    </a>
  </div>
</div>





        {/* Follow */}
        <h2 className="text-lg font-bold mb-2 text-textcontact font-josefin">Follow</h2>
        <div className="flex gap-4 bg-white">
          {/* Facebook Icon */}
          <div className="w-8 h-8 bg-light_purple1 rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <FaFacebookF className="text-white text-xl" />
          </div>

          {/* Instagram Icon */}
          <div className="w-8 h-8 bg-pink1 rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <FaInstagram className="text-white text-xl" />
          </div>

          {/* Twitter Icon */}
          <div className="w-8 h-8 bg-dark_cyan rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <FaTwitter className="text-white text-xl" />
          </div>
        </div>

        {/* Tags */}
        <div>
  <h3 className="text-lg font-bold mb-2 text-textcontact font-josefin">Tags</h3>
  <div className="flex flex-wrap gap-3">
    {/* General */}
    <span className="px-2 py-1 border-bd text-textcolor text-sm rounded underline">
      General
    </span>
    {/* Atsanil */}
    <span className="px-2 py-1 text-pink-500 underline text-sm">
      Atsanil
    </span>
    {/* Insas */}
    <span className="px-2 py-1 text-textcolor underline text-sm">
      Insas.
    </span>
    {/* Next line for Bibsaas and Nulla */}
    <div className="w-full flex gap-3">
      <span className="px-2 py-1 text-textcolor underline text-sm">
        Bibsaas
      </span>
      <span className="px-2 py-1 text-textcolor underline text-sm">
        Nulla.
      </span>
    </div>
  </div>
</div>





        </div>
      </div>
  );
}

export default Sidebar;
