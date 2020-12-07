<template>
  <div id="app">
    <h1 class="is-size-4 title"> Магазин e-commerce</h1>
    <div class="columns is-multiline cards_wrapper">
      {{ countOfProducts }}
      <Card
        v-for="videocard in videos"
        v-bind:key="videocard.id"
        v-bind:id="videocard.id"
        v-bind:image="videocard.image"
        v-bind:rating="videocard.rating"
        v-bind:title="videocard.title"
        v-bind:discount="videocard.discount"
        v-bind:price="videocard.price"
        v-bind:new_price="videocard.new_price"
        v-bind:available="videocard.available"
        @addToCart = "addProduct(videocard)"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import data from '../../public/json/full.json';

export default {
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
      videos: data.video,
      cart: [],
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
