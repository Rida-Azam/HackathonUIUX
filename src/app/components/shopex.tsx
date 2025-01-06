import React from 'react';
import AboutCard from './aboutcard';

function Shopex() {
  return (
    <div className="text-center px-5 lg:px-40">
      <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">What Shopex Offer!</h2>

      {/* Updated Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AboutCard title="Free Delivery" img="/assets/images/aboutmid1.png" />
        <AboutCard title="100% Cash Back" img="/assets/images/aboutmid2.png" />
        <AboutCard title="Quality Product" img="/assets/images/aboutmid3.png" />
        <AboutCard title="24/7 Support" img="/assets/images/aboutmid4.png" />
      </div>
    </div>
  );
}

export default Shopex;










