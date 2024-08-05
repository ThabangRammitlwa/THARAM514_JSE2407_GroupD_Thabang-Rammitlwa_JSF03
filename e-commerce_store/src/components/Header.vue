<template>
    <header class="header">
        <div class="header-content">
        <div class="logo">
            <img src="@/assets/logo2.png" alt="Logo" />
        </div>
        <div class="search">
            <input type="text" placeholder="search products..." v-model="searchQuery" @keyup.enter="searchProducts">
        </div>
        <div class="cart">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ cartItemCount }}</span>
        </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            searchQuery: '',
        };
    },
    computed: {
        cartItemCount() {

        }
    },

    methods: {
        searchProducts() {
            console.log(this.searchQuery);
        }

    }
};
</script>

<style scoped>

header{
    background-color: lightblue;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }


.logo img{
    height: 100%;
    width: 100px;
    image-resolution:inherit;
}

.search {
    flex-grow: 1;
    margin: 0 20px;
    display: flex;
  }

.search input{
    flex-grow: 1;
    padding: 10px 0;
    border: none;
    border-radius: 4px 0 0 4px;
}

.cart{
    display: flex;
    align-items: center;
}

.cart i{
    font-size: 28px;
    margin-right: 5px;
    color: rgb(11, 11, 63);
}

.span span{
    font-size: 16px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
  }

  .search input {
    width: 100%;
    margin: 10px 0;
  }

  .cart {
    margin-top: 10px;
  }
}


</style>