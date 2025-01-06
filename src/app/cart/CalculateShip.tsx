'use client';

const CalculateShip = () => {
  return (
    <>
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-center text-textcolor4 font-josefin mb-4">
        Calculate Shopping
      </h2>

      {/* Card Container */}
      <div className="bg-darksky_blue rounded shadow-md p-4 sm:p-6 mt-6 font-josefin">
        {/* Location Information */}
        <div className="flex flex-wrap justify-between text-sm sm:text-base mt-4 mb-4 border-b pb-2">
          <h3 className="text-shade font-semibold">Bangladesh</h3>
        </div>

        <div className="flex flex-wrap justify-between text-sm sm:text-base mt-4 mb-4 border-b pb-2">
          <h3 className="text-shade font-semibold">Mirpur Dhaka - 1200</h3>
        </div>

        <div className="flex flex-wrap justify-between text-sm sm:text-base mt-4 mb-4 border-b pb-2">
          <h3 className="text-shade font-semibold">Postal Code</h3>
        </div>

        {/* Calculate Button */}
        <button className="bg-pink1 text-white px-4 sm:px-6 py-2 rounded hover:bg-pink-600 w-full">
          Calculate Shipping
        </button>
      </div>
    </>
  );
};

export default CalculateShip;
