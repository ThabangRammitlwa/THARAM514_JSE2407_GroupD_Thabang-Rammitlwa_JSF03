<template>
    <header class="header">
       <!-- <h1>1 Stop-Store</h1>-->
        <div class="logo">
            <img src="@/assets/logo.png" alt="Logo" />
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
    background-color: lightblue;
    border-bottom: 1px solid #e7e7e7;
}
.logo img{
    height: 100px;
    width: 200px;
    image-resolution:initial;


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

h1{
   
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    font-weight: bolder;
}


</style>