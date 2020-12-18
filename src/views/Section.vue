<template>
  <div id="app">
    <h1 class="is-size-4 title"> {{ this.$route.params.product_name }} </h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select">
          <select v-model="sortBy" @change="sortProduct">
            <option value="asc" selected> От дешевого к дорогому</option>
            <option value="desc" > От дорого к дешевому</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns is-multiline cards_wrapper">
      <Card
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:id="product.id"
        v-bind:image="product.img"
        v-bind:rating="product.rating"
        v-bind:title="product.title"
        v-bind:discount="product.discount"
        v-bind:price="product.price"
        v-bind:new_price="product.new_price"
        v-bind:available="product.available"
        @addToCart = "addProduct(product)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../components/Card.vue';

export default {
  name: 'Section',
  components: {
    Card,
  },
  data() {
    return {
      sortBy: 'desc',
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
    sortProduct() {
      return this.$store.dispatch('initProducts',
        {
          product: this.$route.params.product_name,
          sort: this.sortBy,
        });
    },
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('initProducts',
      { product: to.params.product_name });
    next();
  },
  async created() {
    return this.$store.dispatch('initProducts',
      {
        product: this.$route.params.product_name,
        sort: this.sortBy,
      });
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
