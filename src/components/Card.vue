<template>
  <div class="column is-one-quarter">
    <div class="card">
      <button class="button" v-if="canBuy">Товар закончился</button>
      <img v-bind:src="image" class="card__img">
      <p>{{rating}}/5</p>
      <h3 class="card__title"> {{ title }}</h3>
      //TODO доделать форматирование файла
      <p class="card__price">{{ price }}</p>
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
};
</script>

<style>
.card{
  padding: 1em;
  margin-bottom: 5em;
}
.card__title{
  font-size: 20px;
  font-weight: bold;
  margin: 1em 0;
}
</style>
