import React from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineComment } from "react-icons/ai";

function Coment() {
  return (
    <div className="container mx-auto mt-16 px-4">
      {/* Form Section */}
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Name Input */}
          <div>
            <div className="relative text-[#8A8FB9] font-lato">
              <AiOutlineUser className="absolute top-2/4 left-4 transform -translate-y-2/4 text-lg" />
              <input
                type="text"
                id="name"
                placeholder="Your Name*"
                className="w-full border border-[#8A8FB9] pl-12 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none "
              />
            </div>
          </div>
          {/* Email Input */}
          <div>
            <div className="relative text-[#8A8FB9] font-lato">
              <AiOutlineMail className="absolute top-2/4 left-4 transform -translate-y-2/4 text-lg" />
              <input
                type="email"
                id="email"
                placeholder="Write Your Email*"
                className="w-full border border-[#8A8FB9] pl-12 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none "
              />
            </div>
          </div>
        </div>

        {/* Comment Text Area */}
        <div className="mb-4 font-lato">
          <div className="relative text-[#8A8FB9]">
            <AiOutlineComment className="absolute top-4 left-4 text-lg" />
            <textarea
              id="comment"
              placeholder="Write your comment*"
              rows={4}
              className="w-full border border-[#8A8FB9] pl-12 pt-3 py-8 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="save-info"
            className="w-4 h-4 text-pink-500 border-[#8A8FB9] rounded focus:ring-pink-500"
          />
          <label htmlFor="save-info" className="ml-2 font-lato text-[#8A8FB9] text-sm">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className=" flex items-center justify-center  font-josefin bg-pink1 text-white font-medium px-16 py-2 text-lg w-full max-w-lg mx-auto hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coment;
