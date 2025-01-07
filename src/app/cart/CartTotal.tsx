type Product = {
  price: number;
  quantity: number;
};

type CartTotalProps = {
  products: Product[];
};

const CartTotal: React.FC<CartTotalProps> = ({ products }) => {
  const subTotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      {/* Heading outside the main card */}
      <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-center text-textcolor4 font-josefin mb-4">
        Cart Totals
      </h2>

      <div className="bg-dark_sky_blue text-textcolor4 font-bold rounded shadow-md p-4 md:p-6">
        {/* Subtotal */}
        <div className="flex flex-wrap justify-between text-sm md:text-base mt-2 mb-4 border-b pb-2">
          <p>Subtotal:</p>
          <p>£{subTotal.toFixed(2)}</p>
        </div>

        {/* Total */}
        <div className="flex flex-wrap justify-between text-sm md:text-base mb-4 border-b pb-2">
          <p>Total:</p>
          <p>£{(subTotal + 50).toFixed(2)}</p>
        </div>

        {/* Shipping Info with Checkbox */}
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-4">
          {/* Small Checkbox with Tick */}
          <div className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center bg-green-500 rounded text-white">
            ✓
          </div>
          <p className="font-lato text-grey1_light">
            Shipping & taxes calculated at checkout
          </p>
        </div>

        {/* Checkout Button */}
        <button className="bg-green-500 text-white px-4 sm:px-6 py-2 font-lato font-bold rounded hover:bg-green-600 w-full mt-4 text-sm md:text-base">
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default CartTotal;
