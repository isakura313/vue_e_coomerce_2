<template>
  <div id="app">
    <h1 class="is-size-4 title"> Магазин e-commerce</h1>
    <div class="columns is-multiline cards_wrapper">
      {{ countOfProducts }}
      <Card
        v-for="book in books"
        v-bind:key="book.id"
        v-bind:id="book.id"
        v-bind:image="book.image"
        v-bind:rating="book.rating"
        v-bind:title="book.title"
        v-bind:discount="book.discount"
        v-bind:price="book.price"
        v-bind:new_price="book.new_price"
        v-bind:available="book.available"
        @addToCart = "addProduct(book)"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import data from '../../public/json/full.json';

export default {
  name: 'Books',
  components: {
    Card,
  },
  data() {
    return {
      books: data.books,
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
