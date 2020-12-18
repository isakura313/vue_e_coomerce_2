import axios from 'axios';

const moduleProducts = {
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products;
    },
  },
  actions: {
    initProducts: ({ commit }, payload) => {
      axios.get(
        `http://localhost:3000/${payload.product}/?_sort=price&_order=${payload.sort}`,
      )
        .then((response) => {
          commit('SET_PRODUCT', response.data);
        });
    },
  },
};

export default moduleProducts;
