import React from "react";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const EcommerceHeader = () => {
  return (
    <div className="bg-white py-32 px-8 md:px-16 lg:px-28"> {/* Increased padding */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Title Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-textcontact font-josefin font-bold text-xl lg:text-2xl">
            Ecommerce Accessories & Fashion Item
          </h1>
          <p className="text-lightgray font-lato text-sm mt-1">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Per Page Filter */}
          <div className="flex items-center">
            <label
              className="text-head_color text-sm mr-2"
              htmlFor="perPage"
            >
              Per Page:
            </label>
            <input
              type="number"
              id="perPage"
              className="w-16 border rounded-md text-light_gray text-sm px-2 py-1"
              defaultValue={10}
            />
          </div>

          {/* Sort By Filter */}
          <div className="flex items-center">
            <label
              className="text-head_color text-sm mr-2"
              htmlFor="sortBy"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="border rounded-md text-light_gray text-sm px-2 py-1"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* View Options */}
          <div className="flex items-center">
            <label className="text-head_color text-sm mr-2">View:</label>
            <div className="flex items-center gap-2">
              <button className="text-textcontact hover:text-gray-900">
                <IoGrid />
              </button>
              <button className="text-textcontact hover:text-gray-900">
                <FaList />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeader;

