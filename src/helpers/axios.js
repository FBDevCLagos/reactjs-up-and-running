import Axios from 'axios';
import faker from 'faker';

import { range } from './utils';

const axios = Axios.create({
  baseURL: `https://rur-server.herokuapp.com/`
});

const makeOneProduct = () => ({
  name: faker.commerce.product(),
  id: faker.random.uuid(),
  price: faker.commerce.price(),
});
const makeProducts = () => range(30).map(makeOneProduct);
const mockResponses = {
  get: {
    '/products': makeProducts
  },
  post: {
  },
}

axios.interceptors.response.use(
  response => {
    const { config } = response;
    const mockFn = mockResponses[config.method][config.url];

    return mockFn ? mockFn() : response.data;
  },
)



export {
  axios,
};
