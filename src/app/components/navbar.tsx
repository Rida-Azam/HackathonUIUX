'use client';
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const pagesDropdownRef = useRef(null);
  const homeDropdownRef = useRef(null);

  // Close dropdowns on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pagesDropdownRef.current &&
        !pagesDropdownRef.current.contains(event.target)
      ) {
        setIsPagesDropdownOpen(false);
      }
      if (
        homeDropdownRef.current &&
        !homeDropdownRef.current.contains(event.target)
      ) {
        setIsHomeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto lg:pl-[180px] flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 lg:w-[1177px]">
        {/* Logo */}
        <div className="text-[34px] font-bold font-josefin text-textcolor">
          Hekto
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm font-lato text-textcolor">
            {/* Home Dropdown */}
            <li className="relative" ref={homeDropdownRef}>
             <Link href="/">
             <button
               
               className="flex items-center hover:text-[#FB2E86] transition-colors"
               onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
             >
               Home <IoIosArrowDown className="ml-1" />
             </button>
             </Link>
              {isHomeDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md text-black text-sm z-10">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/page">Pages</Link>
                  </li>
                 
                </ul>
              )}
            </li>

            {/* Pages Dropdown */}
            <li className="relative" ref={pagesDropdownRef}>
              <button
                className="flex items-center hover:text-[#FB2E86] transition-colors"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              >
                Pages
              </button>
              {isPagesDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md text-black text-sm z-10">
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/shop">Shop Grid Default</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/shop/grid">ShopList</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/shop/sidebar">Shop Left Sidebar</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 text-xm">
                    <Link href="/products">Product Detail</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/ordercomplete">Order Completed</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/demo">Hekto</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 text-xm">
                    <Link href="/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/singleblog">Single Blog</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100  text-xm">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/notfound">Notfound</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <Link
                className="hover:text-[#FB2E86] transition-colors"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#FB2E86] transition-colors"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#FB2E86] transition-colors"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#FB2E86] transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex items-center mt-4 lg:mt-0 lg:pr-[22px]">
          <div className="relative w-full lg:w-80 h-10 bg-skyBlue border-gray-200 border">
            <input
              type="text"
              className="w-full h-full px-4 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300"
              placeholder="Search products..."
            />
            <button className="absolute right-0 top-0 w-12 h-10 bg-pink1 flex justify-center items-center">
              <FaSearch size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;










// 'use client'
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md w-full">
//       <div className="container mx-auto lg:pl-[180px] flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 lg:w-[1177px]">
//         {/* Logo */}
//         <div className="text-[34px] font-bold font-josefin text-textcolor">Hekto</div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation menu"
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <div
//           className={`$ {
//             menuOpen ? "block" : "hidden"
//           } w-full md:flex md:w-auto md:items-center`}
//         >
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm font-lato text-textcolor">
//             <li>
//               <Link href="/" className="flex items-center text-pink1 font-medium hover:text-pink-500">
//                 Home <IoIosArrowDown className="ml-1" />
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-pink1">Pages</Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-pink1">Products</Link>
//             </li>
//             <li>
//               <Link href="/blog" className="hover:text-pink1">Blog</Link>
//             </li>
//             <li>
//               <Link href="/shop" className="hover:text-pink1">Shop</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-pink1">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Search Box */}
//         <div className="hidden lg:flex items-center mt-4 lg:mt-0 lg:pr-[22px]">
//           <div className="relative w-full lg:w-80 h-10 bg-skyBlue border-gray-200 border">
//             <input
//               type="text"
//               className="w-full h-full px-4 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300"
//               placeholder="Search products..."
//             />
//             <button className="absolute right-0 top-0 w-12 h-10 bg-pink1 flex justify-center items-center">
//               <FaSearch size={20} color="white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


























































// import Link from "next/link";
// import React from "react";
// import { FaSearch} from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";

// // import { BsSearch } from 'react-icons/bs';

// function Navbar() {
//   return (   
//       <nav className=" h-10 px-6 py-4 w-full items-center justify-center">
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:w-[1177px] h-10">
//         {/* Logo */}
//         <div className="text-[34px] font-bold font-josefin text-textcolor">Hekto</div>

//         {/* Navigation Links  */}
       

//         <ul className="hidden md:flex space-x-6 text-sm font-lato text-textcolor">
//           <li>
//             <Link href="/" className=" text-pink font-medium">
//               Home <IoIosArrowDown />
//             </Link>
//           </li>
//           <li><Link href="#" className="hover:text-pink-500">Pages</Link></li>
//           <li><Link href="#" className="hover:text-pink-500">Products</Link></li>
//           <li><Link href="#" className="hover:text-pink-500">Blog</Link></li>
//           <li><Link href="#" className="hover:text-pink-500">Shop</Link></li>
//           <li><Link href="#" className="hover:text-pink-500">Contact</Link></li>
//         </ul>

//         {/* Search Box */}
//         <div className="col-span-2 flex justify-end items-center mt-4 lg:mt-0">
//           <div className="w-full lg:w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center">
//             <input
//               type="text"
//               className="p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5"
            
//             />
//             <button className="bg-pink w-full h-full flex justify-center items-center">
//               <FaSearch size={20} color="white" />
//             </button>
//           </div>
       


    


// </div>
     

//       </div>
//     </nav>




//   )
// }

// export default Navbar