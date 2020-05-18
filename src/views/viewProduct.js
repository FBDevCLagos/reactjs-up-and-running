import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axios } from '../helpers/axios'

const DENOMINATION = '₦'

function ViewProduct(props) {
  const { id } = useParams()
  const [fetching, setFetching] = useState(true)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    imageSrc: '',
    description: '',
    currentInventory: 0,
  })

  useEffect(() => {
    // NOT FOR PROD
    axios.get('/products').then(async (products) => {
      const product = await products.find((product) => product.id === id)
      setProduct(product)
      setFetching(false)
    })
  }, [id, setProduct])

  if (fetching) return <p>fetching...</p>

  return (
    <section>
      <section>image appears here</section>
      <section className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
        <h1 className="text-5xl font-light">{product.name}</h1>
        <h2 className="text-2xl tracking-tighter">{`${DENOMINATION} ${product.price}`}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <button className="" onClick={() => {}}>
          Add to Cart
        </button>
      </section>
    </section>
  )
}

export default ViewProduct
