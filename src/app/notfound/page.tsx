import React from 'react';
import LastImage from '../components/maincomponent/lastimage';
import Sameheader from '../components/maincomponent/sameheader';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <div className='w-full'>
      <Sameheader start='404 Not Found' middle='Home . Pages . ' last='404 Not Found' />
      <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-10 sm:py-14 md:py-16 lg:py-20 h-full flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-y-4 sm:gap-y-5 md:gap-y-6'>
          <Image
            src="/assets/images/404.png"
            width={913}
            height={640}
            alt='notfound'
            className='w-full max-w-[913px] h-auto'
          />
          <p className='font-josefin font-bold text-textcolor text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            oops! The page you requested not found!
          </p>
        <Link href='/'>
        <button className='bg-pink1 rounded-sm font-josefin px-6 sm:px-8 py-2 sm:py-3 text-white text-base sm:text-lg md:text-xl'>
            Back to Home
          </button>
        </Link>
        </div>
      </div>
      <LastImage />
    </div>
  );
}

export default NotFound;
