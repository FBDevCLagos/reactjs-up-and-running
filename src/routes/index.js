import Home from '../views/homepage'
import ViewProduct from '../views/viewProduct'
import Products from '../views/products'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/products',
    exact: true,
    component: Products,
  },
  {
    path: '/products/view/:id',
    exact: false,
    component: ViewProduct,
  },
]

export default routes
