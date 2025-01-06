import React from 'react';
import Image from 'next/image';

function LastImage() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-10 flex justify-center items-center">
      <Image 
        src={"/assets/images/lastimg.png"} 
        width={904} 
        height={93} 
        alt="images" 
        className="max-full h-auto object-contain"
      />
    </div>
  );
}

export default LastImage;