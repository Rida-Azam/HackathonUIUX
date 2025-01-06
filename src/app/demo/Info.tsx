import React from "react";

function Info() {
  return (
    <div>
    <div className="mb-10">
      <h3 className="font-bold text-[24px] text-textcontact font-josefin">Hekto Demo</h3>
      <p className=" text-textcontact font-josefin mt-4 mb-5">Cart/ Information/ Shipping/ Payment</p>
    </div>

    <div className="bg-dark_sky_blue md:p-8 p-2 pb-16">
      {/* Contact Information Section */}
      <div className="md:flex justify-between">
        <h3 className="text-textcontact  text-lg font-josefin font-semibold md:mt-9">Contact Information</h3>
        <div className="flex">
          <h6 className="text-[14px] text-textcontact font-lato opacity-30 mr-2">Already have an account?</h6>
          <h6 className="text-[14px] text-textcontact font-lato opacity-30 ">Log in</h6>
        </div>
      </div>

      <h6 className="text-[14px] text-textcontact font-lato opacity-30  mb-2 mt-6 md:mt-9">
        Email or mobile phone number
      </h6>
      <div className="border-[1px]"></div>

      {/* Checkbox Section */}
      <div className="flex items-center gap-2 mt-4 md:mt-8">
  <input
    className="w-[14px] h-[14px]  accent-lightGreen text-white focus:outline-none"
    type="checkbox"
    id="updates"
  />
  <h6 className="text-light_gray text-[12px]">
    Keep me up to date on news and exclusive offers
  </h6>
</div>

      {/* Shipping Address Section */}
      <div className="md:mt-28 mt-12">
        <h3 className="text-textcontact font-josefin font-semibold text-lg md:mb-12 mb-6">Shipping address</h3>

        <div>
          {/* First Name and Last Name */}
          <div className="md:flex justify-between">
            <div>
              <h6 className="text-textcontact font-lato opacity-30  mb-2">First name (optional)</h6>
              <div className="border-[1px] md:w-[336px]"></div>
            </div>
            <div className="mt-6 md:mt-0">
              <h6 className="w-[336px] text-textcontact font-lato opacity-30  mb-2">Last name</h6>
              <div className="border-[1px]"></div>
            </div>
          </div>

          {/* Address */}
          <div className="md:py-10 py-6">
            <h6 className="w-[336px] text-textcontact font-lato opacity-30  mb-2">Address</h6>
            <div className="border-[1px]"></div>
          </div>

          {/* Apartment/Suite */}
          <div>
            <h6 className="w-[336px] text-textcontact font-lato opacity-30  mb-2">Apartment, suite, etc. (optional)</h6>
            <div className="border-[1px]"></div>
          </div>

          {/* City */}
          <div className="md:mt-10 mt-6">
            <h6 className="w-[336px] text-textcontact font-lato opacity-30  mb-2">City</h6>
            <div className="border-[1px]"></div>
          </div>

          {/* Country and Postal Code */}
          <div className="md:flex justify-between">
            <div className="md:mt-10 mt-6">
              <h6 className="w-[336px] text-textcontact font-lato opacity-30  mb-2">Bangladesh</h6>
              <div className="border-[1px]"></div>
            </div>

            <div className="md:mt-10 mt-6">
              <h6 className="w-[336px] text-textcontact opacity-30  font-lato mb-2">Postal Code</h6>
              <div className="border-[1px]"></div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="md:mt-28 mt-12 bg-pink1 font-josefin text-white font-semibold py-2 px-4 rounded-sm hover:bg-pink-500 transition duration-300">
            Continue Shipping
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Info;
