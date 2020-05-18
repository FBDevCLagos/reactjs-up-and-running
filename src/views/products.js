import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import { axios } from '../helpers/axios'

function Products(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/products').then((products) => {
      setProducts(products)
    })
  }, [setProducts])

  return (
    <section className="">
      <div className="pt-10 pb-8">
        <h1 className="text-5xl font-light">Products</h1>
      </div>
      <section className="flex flex-wrap">
        {products.map((product, index) => (
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
  )
}

export default Products
