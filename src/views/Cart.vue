<template>
  <div class="cart columns">
    <div class="column is-10 if-full-mobile">
      <CartItem
        v-for="item in cart"
        v-bind:key="item.id"
        v-bind:id="item.id"
        v-bind:image="item.image"
        v-bind:title="item.title"
        v-bind:discount="item.discount"
        v-bind:price="item.price"
        v-bind:new_price="item.new_price"
        v-bind:available="item.available"
        @addToCart = "addProduct(item)"
        />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '../components/CartItem.vue';

export default {
  name: 'cart',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>

<style scoped>

</style>
