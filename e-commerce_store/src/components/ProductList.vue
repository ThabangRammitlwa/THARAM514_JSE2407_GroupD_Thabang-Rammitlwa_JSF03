<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title">
        <h2>{{ product.title }}</h2>
        <p>Price: R{{ product.price }}</p>
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
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
  width: 100%;
  padding: 20px;
  gap: 20px;
}


.product-card {
  
  background-color: #edf0f5;
  border: 1px solid #141313;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction:column;
 
}

img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;

}

h2 {
  font-size: 1.2em;
  margin-bottom: 10px;

}

p {
  margin: 5px 0;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>