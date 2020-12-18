import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Section from '@/views/Section.vue';
import Cart from '@/views/Cart.vue';
import Product from '@/views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/section/:product_name',
    name: 'Section',
    component: Section,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
