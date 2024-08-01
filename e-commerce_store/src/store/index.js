// src/store/index.js
import { createStore } from 'vuex';
import { fetchProducts, fetchCategories, fetchProductDetail } from '@/api';

export default createStore({
  state: {
    products: [],
    categories: [],
    loading: false,
    error: null,
    activeCategory: 'all',
    activeSort: 'default',
    productDetail: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setActiveCategory(state, category) {
      state.activeCategory = category;
    },
    setActiveSort(state, sort) {
      state.activeSort = sort;
    },
    setProductDetail(state, product) {
      state.productDetail = product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const products = await fetchProducts();
        commit('setProducts', products);
      } catch (error) {
        commit('setError', 'Error fetching products');
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await fetchCategories();
        commit('setCategories', categories);
      } catch (error) {
        commit('setError', 'Error fetching categories');
      }
    },
    async fetchProductDetail({ commit }, productId) {
      commit('setLoading', true);
      try {
        const product = await fetchProductDetail(productId);
        commit('setProductDetail', product);
      } catch (error) {
        commit('setError', 'Error fetching product details');
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
    filteredAndSortedProducts: (state) => {
      let result = [...state.products];
      if (state.activeCategory && state.activeCategory !== 'all') {
        result = result.filter(product => product.category === state.activeCategory);
      }
      if (state.activeSort === 'lowest') {
        result.sort((a, b) => a.price - b.price);
      } else if (state.activeSort === 'highest') {
        result.sort((a, b) => b.price - a.price);
      }
      return result;
    },
  },
});
