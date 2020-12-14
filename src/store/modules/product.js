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
    initProducts: ({ commit }) => {
      axios.get('/json/full.json')
        .then((response) => {
          commit('SET_PRODUCT', response.data.books);
        });
    },
  },
};

export default moduleProducts;
