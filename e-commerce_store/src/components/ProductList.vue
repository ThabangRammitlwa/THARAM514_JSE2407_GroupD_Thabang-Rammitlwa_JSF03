<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" :alt="product.title" style="width: 100px;">
        <p>Price: ${{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

export default {
  name: 'ProductList',
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async () => {
      try {
        const response = await api.getProducts();
        products.value = response.data;
        loading.value = false;
      } catch (err) {
        error.value = 'An error occurred while fetching products.';
        loading.value = false;
      }
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
      error
    };
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>