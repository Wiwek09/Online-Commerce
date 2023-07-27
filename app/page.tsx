"use client"
import React,{useState} from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../utils/api';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import FetchErrorCard from '../components/FetchErrorCard';
import { Data } from '../utils/api';
import { Footer } from '@/components/Footer';
import {FiSearch} from 'react-icons/fi'


const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data : allProducts, isLoading, isError } = useQuery<Array<Data>>(['products'], async () =>  fetchProducts());

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <FetchErrorCard />
  }

  const filteredProducts = allProducts
    ? allProducts?.filter((product:Data) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="px-4 sm:px-8">
      <Header />
      <div className='flex justify-between' >
       <h1 className="text-3xl font-bold mb-6 mt-4 ">Product List</h1>
       <div className='flex justify-between items-center space-x-6 ' >
        <div className='text-2xl' >
          <FiSearch/>
        </div> 
        <div className="">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded border border-gray-400"
          />
        </div>
      </div>
    </div>
    {isLoading ? (
          <Loader />
        ) : isError ? (
         <FetchErrorCard />
        ) : (
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product:Data) => (
            <ProductCard product={product} key={product.id} />     
                ))}
              </div>
            ) : (
              <div>No products found.</div>
            )}
          </div>
        )}
      <hr className= "mt-10 h-10 border-blue-500" />
      <Footer/>
    </div>
  );
};

export default ProductList;
