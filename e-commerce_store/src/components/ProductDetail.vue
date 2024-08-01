<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="productDetail">
    <button @click="goBack">Back to Products</button>
    <div class="product-detail">
      <img :src="productDetail.image" :alt="productDetail.title" />
      <h3>{{ productDetail.title }}</h3>
      <p>Description: {{ productDetail.description }}</p>
      <p>Price: ${{ productDetail.price }}</p>
      <p>Category: {{ productDetail.category }}</p>
      <p>Rating: {{ productDetail.rating.rate }} ({{ productDetail.rating.count }} reviews)</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductDetails',
  props: ['id'],
  computed: {
    ...mapState(['loading', 'error', 'productDetail'])
  },
  methods: {
    ...mapActions(['fetchProductDetail']),
    goBack() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchProductDetail(this.id);
  }
};
</script>

<style scoped>
.product-detail {
  align-items: center;
  text-align: center;
}

img{
  height: 200px;
  max-width: 100%;
}

p{
  text-align: center;
  margin-bottom: 1rem;
  
}

button {
  margin-bottom: 20px;

  
}
</style>
