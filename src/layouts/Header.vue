<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Домой
        </router-link>

        <router-link class="navbar-item" to="/books">
          Книги
        </router-link>
        <router-link class="navbar-item" to="/videocards">
          Видеокарты
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <router-link class="navbar-item" to="/cart">
            <img src="../assets/cart.svg" alt="" height="100px" width="50px">
            <span class="counter">{{ counter }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    counter: Number,
  },
};
</script>

<style scoped>

</style>
