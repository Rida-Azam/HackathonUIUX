import React from 'react';
import Info from './Info';
import SideList from './SideList';
import Total from './total';

function Demo() {
  return (
    <div className="flex flex-col md:flex-row px-6 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 gap-4 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
      {/* Left Section: Info */}
      <div className="flex-1">
        <Info />
      </div>

      {/* Right Section: SideList + Total */}
      <div className="flex flex-col w-full md:w-1/3 space-y-6 sm:space-y-8 lg:space-y-10">
        <SideList />
        <Total />
      </div>
    </div>
  );
}

export default Demo;
