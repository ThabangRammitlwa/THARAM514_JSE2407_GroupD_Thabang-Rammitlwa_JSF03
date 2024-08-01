<template>
    <header class="header">
        <div class="logo">
            <img src="" alt="">
        </div>
        <div class="search">
            <input type="text" placeholder="search products..." v-model="searchQuery" @keyup.enter="searchProducts">
        </div>
        <div class="cart">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ cartItemCount }}</span>
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

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: blue;
    border-bottom: 1px solid #e7e7e7;
}
.logo img{
    height: 400px;
}

.search input{
    width: 300px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.cart{
    display: flex;
    align-items: center;
}

.cart i{
    font-size: 28px;
    margin-right: 5px;
}

.span span{
    font-size: 16px;
}


</style>