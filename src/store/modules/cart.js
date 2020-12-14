const moduleCart = {
  state: {
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {
    SET_CART(state, item) {
      state.cart.push(item);
    },
    DELETE_ITEM(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
};

export default moduleCart;
