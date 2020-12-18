<template>
  <div class="column is-full-desktop is-full-mobile">

    <div class="card">
      <div class="card__img" v-bind:style="{backgroundImage: `url(${info.img})`}">
        <button class="button is-danger btn_discount" v-show="info.discount">
          {{
           `${Math.round((info.price - info.new_price) /
              (info.price / 100))}%`
          }}
        </button>
      </div>
      <StarRating
        increment="0.1"
        read-only="true"
        star-size="20"
        active-color="#ff8970"
        :show-rating="false"
        :rating="info.rating"
      />
      <h3 class="card__title is-size-5"> {{ info.title }} </h3>
      <p class="card__description is-size-5">{{info.description}}</p>
      <p class="card__price is-size-5"
         v-if="info.discount">
        <span class="has-text-danger has-text-weight-bold">{{ info.new_price | formatPrice }}
        </span>
        <del class="has-text-grey">{{ info.price | formatPrice }}</del>
      </p>
      <p class="card__price is-size-5 has-text-weight-bold" v-else>
        {{ info.price | formatPrice }} </p>
      <p class="card__available is-size-6"> В наличии {{ info.available }} </p>
      <button v-bind:class="addInfoColor"
              v-on:click.once="addProductToCart" v-if="info.available"> {{addInfo}}
      </button>
      <button class="button" v-show="canBuy">Нет в наличии</button>
    </div>

  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Product',
  components: {
    StarRating,
  },
  data() {
    return {
      info: '',
      addInfo: 'Добавить в корзину',
      addInfoColor: 'button is-link is-pulled-right',
    };
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
    addProductToCart() {
      this.addInfo = 'В корзине';
      this.addInfoColor = 'is-danger button is-link is-pulled-right';
      this.$emit('addToCart');
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
  async created() {
    const response = await fetch(`http://localhost:3000/all_products/${this.$route.params.id}`);
    this.info = await response.json();
    // this.info = [...this.info.video, ...this.info.books].filter((data) => data.id
    // === Number(this.$route.params.id));
  },
};
</script>

<style>

</style>
