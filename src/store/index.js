import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: ['товар'],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {
    SET_CART(state, item) {
      state.cart.push(item);
    },
  },
});
