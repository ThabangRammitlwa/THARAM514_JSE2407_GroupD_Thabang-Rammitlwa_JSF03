<template>
    <div>
      <p v-if="loading">Loading product details...</p>
      <div v-else-if="product" class="product-detail">
        <router-link to="/">Back to Products</router-link>
        <h2>{{ product.title }}</h2>
        <img :src="product.image" :alt="product.title" />
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price.toFixed(2) }}</p>
        <p>Category: {{ product.category }}</p>
        <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>
      <p v-else>Product not found</p>
    </div>
  </template>
  
  <script>
  /**
   * @file ProductDetail.vue
   * @description A component that displays detailed information about a single product.
   */
  
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ProductDetail',
    setup() {
      const route = useRoute();
      const id = route.params.id;
  
      /**
       * @type {import('vue').Ref<{
       *   id: number,
       *   title: string,
       *   description: string,
       *   price: number,
       *   category: string,
       *   image: string,
       *   rating: {
       *     rate: number,
       *     count: number
       *   }
       * } | null>}
       */
      const product = ref(null);
  
      /** @type {import('vue').Ref<boolean>} */
      const loading = ref(true);
  
      /**
       * Fetches the product data from the API.
       * @async
       * @function fetchProduct
       * @throws {Error} If there's an error fetching the product data
       */
      async function fetchProduct() {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product data');
          }
          product.value = await response.json();
        } catch (error) {
          console.error('Error fetching product:', error);
          product.value = null;
        } finally {
          loading.value = false;
        }
      }
  
      /**
       * Lifecycle hook that runs when the component is mounted.
       * It calls the fetchProduct function to load the product data.
       */
      onMounted(fetchProduct);
  
      return {
        product,
        loading
      };
    }
  };
  </script>
  
  <style scoped>
  .product-detail {
    max-width: 600px;
    margin: 0 auto;
  }
  img {
    max-width: 100%;
    height: 300px;
    object-fit: contain;
  }
  p {
    margin-bottom: 1rem;
    text-align: center;
  }
  </style>