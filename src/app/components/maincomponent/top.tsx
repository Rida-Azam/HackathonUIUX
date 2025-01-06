'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart, CiMail } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { PiPhoneCallThin } from 'react-icons/pi';
import { GiHamburgerMenu } from 'react-icons/gi';

function Top() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row h-auto  sm:h-[44px] bg-purple max-w-[1920px] bg-violet py-2 px-4 sm:px-8 text-white text-sm items-center justify-between top-0 left-0 right-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-6 lg:pl-[225px]">
        <div className="flex gap-1 items-center">
          <CiMail className="text-lg" />
          <span>mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <PiPhoneCallThin className="text-lg" />
          <span>(12345)67890</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <button
          className="sm:hidden text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Collapsible Menu */}
      <div
        className={`flex-col sm:flex-row items-center lg:pr-[160px] space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 ${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex`}
      >
        <select className="bg-violet text-white border-none focus:outline-none text-xs md:text-sm">
          <option>English</option>
          <option>Spanish</option>
        </select>
        <select className="bg-violet text-white border-none focus:outline-none text-xs md:text-sm">
          <option>USD</option>
          <option>EUR</option>
        </select>

        {/* Login */}
        <div className="flex items-center space-x-1">
          <Link href="/login" className="hover:underline text-xs md:text-sm">Login</Link>
          <FaUser className="text-lg" />
        </div>

        {/* Wishlist */}
        <div className="flex items-center space-x-1">
          <Link href="/" className="hover:underline text-xs md:text-sm">Wishlist</Link>
          <CiHeart className="text-lg" />
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 pl-0 md:pl-5">
          <Link href="/cart">
            <LiaShoppingCartSolid className="text-lg cursor-pointer" title="Cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top;



