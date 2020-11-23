<template>
  <div class="column is-one-quarter">
    <div class="card">
      <button class="button" v-if="canBuy">Товар закончился</button>
      <img v-bind:src="image" class="card__img">
      <p>{{rating}}/5</p>
      <h3 class="card__title is-size-5"> {{ title | formatTitle }}</h3>
      <p class="card__price is-size-5 has-text-weight-bold has-text-danger"
         v-if='discount'>
        {{ price | formatPrice }} </p>
      <p class="card__price is-size-5 has-text-weight-bold"
         v-else>
        {{ price | formatPrice }} </p>
      <button class="button is-danger is-pulled-right">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card.vue',
  props: {
    image: String,
    rating: Number,
    title: String,
    discount: Boolean,
    price: Number,
    new_price: Number,
    available: Number,
  },
  computed: {
    canBuy() {
      return this.available === 0;
    },
  },
  filters: {
    formatTitle(title) {
      if (title.length > 28) {
        return `${title.slice(0, 28)}...`;
      }
      return title;
    },
    formatPrice(price) {
      if (price > 999) {
        const priceArray = String(price).split('').reverse();
        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse().join('')} ₽`;
      }
      return `${price} ₽`;
    },
  },
};
</script>

<style>
.card{
  padding: 1em;
  margin-bottom: 5em;
}
.card__title{
  font-weight: bold;
  margin: 1em 0;
}
.card__img{
  height: 200px;
}
</style>
