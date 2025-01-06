import Image from 'next/image';
import React from 'react';

const AboutCard = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-sm p-6 border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full h-[320px]">
      {/* Image Section */}
      <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 p-4 rounded-full shadow-md">
        <Image
          src={img}
          height={60}
          width={60}
          alt={title}
          className="rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 text-center">
        <h4 className="font-josefin text-xl font-semibold  text-textcontact mb-3">
          {title}
        </h4>
        <p className="font-lato text-sm text-blue_navy ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;












// import Image from 'next/image';
// import React from 'react';

// const AboutCard = ({ title, img }: { title: string; img: string }) => {
//   return (
//     <div className="flex w-[270px] h-[320px] flex-col items-center justify-center bg-white shadow-lg rounded-md p-6 border border-gray-300 hover:shadow-xl transition-shadow duration-300">
//       {/* Image Section */}
//       <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 p-4 rounded-full">
//         <Image
//           src={img}
//           height={60}
//           width={60}
//           alt={title}
//           className="rounded-full"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="mt-4 text-center">
//         <h4 className="font-josefin text-xl font-semibold text-blue_navy mb-2">
//           {title}
//         </h4>
//         <p className="font-lato text-sm text-gray-500">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
//           gravida.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutCard;
