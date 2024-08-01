
<template>
    <div class="product-card" @click="goToDetail">
      <img :src="product.image" :alt="product.title" />
      <h3>{{ product.title }}</h3>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: Object
    },
    methods: {
      goToDetail() {
        this.$router.push(`/product/${this.product.id}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 2px solid #ddd;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1em;
    margin-bottom: 10px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  