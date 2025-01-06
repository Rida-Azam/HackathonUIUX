'use client';

const Total = () => {
  return (
    <div className="bg-dark_sky_blue text-textcolor4 font-bold rounded shadow-md p-4 sm:p-6 max-w-md md:max-w-lg mx-auto">
      {/* Subtotal */}
      <div className="flex justify-between items-center text-sm sm:text-base mt-2 mb-4 border-b pb-2">
        <p>Subtotal:</p>
        <p>£219.00</p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-sm sm:text-base mb-4 border-b pb-2">
        <p>Total:</p>
        <p>£325.00</p>
      </div>

      {/* Shipping Info with Checkbox */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base mb-4">
        {/* Small Checkbox with Tick */}
        <div className="w-4 h-4 flex items-center justify-center bg-green-500  text-white text-xs sm:text-sm">
          ✓
        </div>
        <p className="font-lato text-grey1_light">
          Shipping & taxes calculated at checkout
        </p>
      </div>

      {/* Checkout Button */}
      <button className="bg-green-500 text-white px-4 sm:px-6 py-2 font-lato font-bold rounded hover:bg-green-600 w-full mt-4 text-sm sm:text-base">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Total;


