import React from "react";
import Sameheader from "../components/maincomponent/sameheader";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <Sameheader
        start="Contact Us"
        middle="Home . Pages ."
        last="Contact us"
      />
      <section className="bg-white mt-12 py-8 sm:py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Top Section: Information and Contact Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Information About Us */}
            <div>
              <h2 className="text-xl sm:text-2xl text-textcontact font-josefin font-bold text-blue-800 mb-4">
                Information About us
              </h2>
              <p className="text-lightgray text-sm sm:text-base mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor lobortis.
                Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="flex space-x-4">
                <Image
                  src={"/assets/images/i1.png"}
                  alt="inf01"
                  width={25}
                  height={25}
                />
                <Image
                  src={"/assets/images/i2.png"}
                  alt="inf02"
                  width={25}
                  height={25}
                />
                <Image
                  src={"/assets/images/i3.png"}
                  alt="inf03"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            {/* Contact Way */}
            <div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-textcontact font-josefin">
                  Contact Way
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8">
                  {/* Column 1 */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <Image
                        src={"/assets/images/i1.png"}
                        alt="Tel Icon"
                        width={45}
                        height={45}
                      />
                    </div>
                    <div className="text-sm sm:text-base text-lightgray">
                      <span className=" text-sm ">Tel:877-67-88-99</span>{" "}
                       <br />
                      <span className="text-sm">
                        E-Mail:shop@store.com
                      </span>
                     
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <Image
                        src={"/assets/images/cw.png"}
                        alt="Support Icon"
                        width={45}
                        height={45}
                      />
                    </div>
                    <div className="text-sm sm:text-base text-lightgray">
                      <span className="text-sm">
                        Support Forum <br/>For over 24hr
                      </span>{" "}
                     
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <Image
                        src={"/assets/images/contact4.png"}
                        alt="Address Icon"
                        width={45}
                        height={45}
                      />
                    </div>
                    <div className="text-sm sm:text-base text-lightgray">
                      <span className="text-sm ">
                        Address:  20 Margaret st, London <br />
                        Great britain, 3NM98-LK
                      </span>{" "}
                    
                    </div>
                  </div>

                  {/* Column 2 */}
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <Image
                        src={"/assets/images/cw4.png"}
                        alt="Shipping Icon"
                        width={45}
                        height={45}
                      />
                    </div>
                    <div className="text-sm sm:text-base text-lightgray">
                      <span className="text-sm" >
                        Free standard shipping <br/> on all orders
                      </span>{}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
  {/* Get In Touch */}
  <div className="max-w-lg mx-auto">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-textcontact font-josefin">
      Get In Touch
    </h2>
    <p className="text-lightgray text-sm sm:text-base mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      tristique amet erat eget dolor. Accumsan faucibus vitae lobortis quis bibendum quam.
    </p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your E-mail*"
          className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <input
        type="text"
        placeholder="Subject*"
        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Type Your Message*"
        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={6}
      ></textarea>
      <button className="px-8 py-2 bg-pink1 text-white text-sm sm:text-base rounded hover:bg-pink-600">
        Send Mail
      </button>
    </form>
  </div>

  {/* Illustration */}
  <div className="flex justify-center">
    <Image
      src={"/assets/images/contact.png"}
      width={725}
      height={695}
      alt="Contact"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    />
  </div>
</div>


        
        </div>
      </section>
    </div>
  );
}

export default Contact;
