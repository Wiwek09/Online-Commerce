"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Data } from '@/utils/api';

export default function ProductCard({product}:{product:Data}) {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-lg border p-4 cursor-pointer  hover:border-blue-600  transition duration-500 ease-in-out ">
    <Link href={`/product/${product.id}`}>
      <div className="h-40 w-full relative mb-2">
        <Image
          src={product.image}
          alt={product.title}
          layout='fill'
          loading="lazy"
          className="h-40 w-full object-contain hover:scale-110 transition duration-500 ease-in-out mb-2 rounded"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-xl font-bold ">${product.price}</p>
    </Link>
  </div>
  )
}
