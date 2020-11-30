<template>
  <div id="app">
  <Header counter=0 />
    <router-view></router-view>
   <Footer />
  </div>
</template>

<script>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addProduct(item) {
      this.cart.push(item);
    },
  },
  computed: {
    countOfProducts() {
      return this.cart.length || 0;
    },
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
