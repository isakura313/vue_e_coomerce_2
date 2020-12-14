<template>
  <div class="cart">
    {{ cart }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'cart',
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>

<style scoped>

</style>
