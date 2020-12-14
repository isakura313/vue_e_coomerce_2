<template>
    <div class="cart_item">
      <div class="cart_item__img" v-bind:style="{backgroundImage: `url(${image})`}">
      </div>
      <router-link :to="'/product/' + id">
        <h3 class="cart_item__title is-size-5"> {{ title }} </h3>
      </router-link>
      <p class="cart_item__price is-size-5"
         v-if="discount">
        <span class="has-text-danger has-text-weight-bold">{{ new_price | formatPrice }} </span>
        <del class="has-text-grey">{{ price | formatPrice }}</del>
      </p>
      <p class="cart_item__price is-size-5 has-text-weight-bold" v-else>
        {{ price | formatPrice }} </p>
      <p class="cart_item_available is-size-6"> В наличии {{ available }} </p>
      <button class="is-danger button"
              v-on:click="deleteItemFromCart" v-if="available"> {{addInfo}}
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
    rating: Number,
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
    deleteItemFromCart() {

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
.card {
  margin: 2em;
  padding: 10px 10px 30px 10px;
}

.card__img {
  height: 350px;
  width: auto;
  padding: 7px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.btn_discount {
  width: 45px;
  height: 45px;
}

.card__title:hover {
  color: blue;
  cursor: pointer;
}
</style>
