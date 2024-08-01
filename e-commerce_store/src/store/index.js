import { createStore } from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import auth from './modules/auth'
import comparison from './modules/comparison'

export default createStore({
  modules: {
    products,
    cart,
    auth,
    comparison
  }
})