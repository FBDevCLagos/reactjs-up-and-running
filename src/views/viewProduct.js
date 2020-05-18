import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../helpers/axios';

const DENOMINATION = '₦';
function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get('/products').then(async (products) => {
      const product = await products.find((product) => product.id === id);
      setProduct(product);
      setFetching(false);
    });
  }, [id, setProduct]);

  if (fetching) return <p>fetching...</p>;

  return (
    <section className='flex'>
      <section className='h-112 md:px-10 pb-8 w-full md:w-1/2 bg-light-200'>
        <figure className='flex justify-center items-center py-16'>
          <img
            className='w-64 md:w-3/5 max-w-lg max-h-96 m-0'
            src={product.imageSrc}
            alt={product.name}
          />
        </figure>
      </section>
      <section className='pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2'>
        <h1 className='text-5xl font-light'>{product.name}</h1>
        <h2 className='text-2xl tracking-tighter'>{`${DENOMINATION}${product.price}`}</h2>
        <p className='text-gray-600 text-sm'>{product.description}</p>

        <button className='px-6 py-2 text-white bg-black mt-10'>
          Add to Cart
        </button>
      </section>
    </section>
  );
}

export default ViewProduct;
