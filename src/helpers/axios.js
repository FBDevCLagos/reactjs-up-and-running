import Axios from 'axios'
import inventory from './inventory'

const axios = Axios.create({
  baseURL: `https://rur-server.herokuapp.com/`,
})

const getProducts = () => inventory

const mockResponses = {
  get: {
    '/products': getProducts,
    '/products?id': getProducts,
  },
  post: {},
}

axios.interceptors.response.use((response) => {
  const { config } = response
  const mockFn = mockResponses[config.method][config.url]

  return mockFn ? mockFn() : response.data
})

export { axios }
