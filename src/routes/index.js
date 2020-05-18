import Home from '../views/home';
import Product from '../views/products';
import ViewProduct from '../views/viewProduct';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/products',
    exact: true,
    component: Product,
  },
  {
    path: '/product/:id',
    exact: false,
    component: ViewProduct,
  },
];

export default routes;
