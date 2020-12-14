<template>
    <div class="cart_item">
      <div class="cart_item__img" v-bind:style="{backgroundImage: `url(${image})`}">
      </div>
      <router-link :to="'/product/' + id">
        <h3 class="cart_item__title is-size-5"> {{ title }} </h3>
      </router-link>
      <div class="cart_item__price is-size-5"
         v-if="discount">
        <p class="has-text-danger has-text-weight-bold">
          {{ new_price | formatPrice }}
        </p>
      <p>
        <del class="has-text-grey">{{ price | formatPrice }}</del>
      </p>
      </div>
      <p class="cart_item__price is-size-5 has-text-weight-bold" v-else>
        {{ price | formatPrice }} </p>
      <p class="cart_item_available is-size-6"> В наличии {{ available }} </p>
      <button class="is-danger button"
              v-on:click="deleteItemFromCart(id)"
              v-if="available">
        Удалить
      </button>
      <button class="button" v-show="canBuy">Нет в наличии</button>
    </div>
</template>

<script>

export default {
  name: 'Card',
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    id: Number,
    image: {
      type: String,
      default: 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png',
    },
    title: String,
    description: String,
    discount: {
      type: Boolean,
      required: true,
      default: false,
    },
    price: Number,
    new_price: Number,
    available: Number,
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) {
        return '';
      }
      if (price > 999) {
        const priceArray = String(price)
          .split('')
          .reverse();
        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse()
          .join('')} ₽`;
      }
      return `${price} ₽`;
    },
  },
  methods: {
    deleteItemFromCart(id) {
      this.$store.commit('DELETE_ITEM', id);
    },
  },
  computed: {
    canBuy() {
      if (this.available === 0) {
        return true;
      }
      return false;
    },

  },

};
</script>

<style>
.cart_item {
  margin: 2em;
  padding: 10px 10px 30px 10px;
  display:grid;
  grid-template-columns: 30% 30% 20% 10% 10%;
  align-items: center;
  border-bottom: 2px solid black;
}

.cart_item__img {
  height: 150px;
  width: 400px;
  padding: 7px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.cart_item__title:hover {
  color: blue;
  cursor: pointer;
}
.cart_item__price{
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
