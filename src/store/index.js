import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import moduleCart from './modules/cart';
import moduleProducts from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleCart,
    moduleProducts,
  },
  plugins: [
    createPersistedState({
      paths: ['moduleCart.cart'],
    }),
  ],
});
