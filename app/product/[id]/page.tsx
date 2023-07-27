"use client"
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import Image from 'next/image';
import { Footer } from '@/components/Footer';


const fetchProductById = async (productId:string) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  return data;
};

const ProductDetail = ({params:{id}}:{params:{id:string}}) => {

  const router = useRouter();
  const { data, isLoading, isError } = useQuery(['product', id], () =>
    fetchProductById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const { title, description, image, price } = data;

  return (
    <div className='flex flex-col  justify-center items-center ' style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <Image src={image} alt={title} loading="lazy" layout='intrinsic' height={300} width={300} className="flex justify-center items-center mb-4  " style={{ borderRadius: '8px' }} />
      <p className="text-gray-600 mb-4 font-bold text-2xl ">${price}</p>
      <p className='' style={{ lineHeight: '1.6' }}>{description}</p>
      <div className='mt-4' >
      <Footer/>
     </div>
     </div>
  );
};

export default ProductDetail;
