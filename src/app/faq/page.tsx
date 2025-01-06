import React from 'react';
import LastImage from '../components/maincomponent/lastimage';
import Sameheader from '../components/maincomponent/sameheader';

function Faq() {
  return (
    <div className="w-full">
      <Sameheader start="FAQs" middle="Home . Pages . " last="FAQ" />

      <div className="px-6 sm:px-12 md:px-20 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General Information Section */}
          <div className="w-full px-6 sm:px-12 md:px-20 mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-textcolor4 font-josefin">
              General Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-textcolor4 font-josefin">
                  Eu dictumst cum at sed euismod condimentum?
                </h3>
                <p className="text-gray3 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-textcolor4 font-josefin">
                  Magna bibendum est fermentum eros.
                </h3>
                <p className="text-gray3 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-textcolor4 font-josefin">
                  Odio muskana hak eris consequat skeleton?
                </h3>
                <p className="text-gray3 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-textcolor4 font-josefin">
                  Elit id blandit sabara boi velit qua mare?
                </h3>
                <p className="text-gray3 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            </div>
          </div>

          {/* Ask a Question Section */}
          <div className="bg-graybg p-6  sm:p-8 md:px-10 md:py-8 shadow-md border border-gray-200 mx-auto max-w-md mb-8">
            <h2 className="text-2xl font-josefin mt-8 font-extrabold mb-8 text-textcolor4">
              Ask a Question
            </h2>
            <form className="space-y-6 font-lato">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full mt-8 px-4 py-3 text-sm sm:text-base border border-darkbox focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full px-4 py-3 text-sm sm:text-base border border-darkbox focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Type Your Message*"
                className="w-full px-4 py-3 text-sm sm:text-base border border-darkbox focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={6} // Increased row count to make it taller
              ></textarea>
              <button className="bg-pink1 text-white px-6 py-3 text-sm sm:text-base border border-pink1 hover:bg-pink-600">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>

      <LastImage />
    </div>
  );
}

export default Faq;
