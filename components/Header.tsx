"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white text-center flex justify-between justify-items-center items-center py-4">
      <div className='ml-5' >
        <Image src={'/commerce.svg'} alt='' height={80} width={80}  />
      </div>
      <div>
      <Link href={`/`}>
         <h1 className="text-3xl font-bold">E-COMMERCE</h1>
      </Link>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
