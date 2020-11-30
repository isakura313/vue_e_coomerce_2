<template>
<div class="home">
  <section class="hero" :style="{backgroundImage:(`url(${image_back})`)}">
    <div class="hero-body">
      <div class="container">
        <h1 class="title  has-text-black is-size-2">
          E-commerce
        </h1>
        <h2 class="has-text-black is-size-3">
          Купи свою мечту
        </h2>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      image_back: 'https://images.unsplash.com/photo-1510506678113-ba866806e117?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    };
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}
</style>
