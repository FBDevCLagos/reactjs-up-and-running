import React, { useState, useEffect } from 'react';
import Item from '../components/item';
import { axios } from '../helpers/axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get('/products').then((products) => {
      setProducts(products);
      setFetching(false);
    });
  }, [setProducts]);

  if (fetching) return <p>fetching...</p>;

  return (
    <section>
      <article className='pt-10 pb-8'>
        <h1 className='text-5xl font-light'>Products</h1>
      </article>

      <section className='flex flex-wrap'>
        {products.map((product) => (
          <Item
            key={product.id}
            link={`product/${product.id}`}
            title={product.name}
            imageSrc={product.imageSrc}
            price={product.price}
          />
        ))}
      </section>
    </section>
  );
}

export default Products;
