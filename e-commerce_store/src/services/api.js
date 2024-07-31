import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export default {
  getProducts() {
    return api.get('/products');
  },
  getProduct(id) {
    return api.get(`/products/${id}`);
  },
  getCategories() {
    return api.get('/products/categories');
  }
};