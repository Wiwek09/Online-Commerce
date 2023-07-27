import axios from 'axios';

export interface Data {
  id: number;
  key: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rate: number;
  count: number;
}

export const fetchProducts = async () : Promise<Array<Data>> => {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
  } catch (error:any) {
    throw new Error('Error fetching products:', error);
  }
};