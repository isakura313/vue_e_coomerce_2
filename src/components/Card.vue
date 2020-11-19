<template>
  <div class="column is-one-quarter">
    <div class="card">
      <img v-bind:src="image" class="card__img">
      <h3 class="card__title"> {{ title }}</h3>
      <p class="card__price">{{ price }}</p>
      <button class="button is-danger is-pulled-right">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card.vue',
  data() {
    return {
      image: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6014496977.jpg',
      title: 'Заголовок товара',
      price: 1000,
      discount: false,
    };
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
