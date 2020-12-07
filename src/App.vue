<template>
  <div id="app">
  <Header :counter=cart.length />
    <router-view></router-view>
   <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
