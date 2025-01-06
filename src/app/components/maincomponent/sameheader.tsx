

import React from 'react';

function Sameheader({ start, middle, last }: { start: string; middle: string; last: string }) {
  return (
    <div className="w-full h-[286px] bg-gray1 flex px-4 lg:px-8 justify-start items-center lg:pl-[220px]">
      <div className="flex flex-col items-start">
        <h1 className="font-bold font-josefin text-2xl sm:text-3xl md:text-4xl text-textcolor2">{start}</h1>
        <p className="font-lato font-medium text-black text-sm sm:text-base md:text-lg">
          {middle}
          <span className="text-pink1">{last}</span>
        </p>
      </div>
    </div>
  );
}

export default Sameheader;













// import React from 'react'

// function Sameheader({start,middle,last}:{start:string,middle:string,last:string}) {
//   return (
// <div className='w-full h-[286px] bg-gray1 flex  px-8 justify-start items-center lg:pl-[220px] '>

// <div className='flex flex-col items-start'>
// <h1 className='font-bold font-josefin text-4xl text-textcolor2'>{start}</h1>
// <p className='font-lato font-medium text-black'>{middle}<span className='text-pink'>{last}</span></p>
// </div>
// </div>  )
// }

// export default Sameheader