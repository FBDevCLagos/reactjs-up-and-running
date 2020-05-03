import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <section>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </section>
  )
}

export default Navbar
