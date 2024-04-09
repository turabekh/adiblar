import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home.vue";
import AdiblarHaqida from "../views/adiblar_haqida/AdiblarHaqida.vue";
import AdibDetail from '../views/adiblar_haqida/AdibDetail.vue';
import Hiyobon360 from '../views/hiyobon/Hiyobon360.vue';
import Targibot from '../views/targibot/Targibot.vue';
import Kitob from '../views/kitoblar/Kitob.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adiblar-haqida',
    name: 'Adiblar Haqida',
    component: AdiblarHaqida
  },
  {
    path: '/adiblar-haqida/:id',
    name: 'details',
    component: AdibDetail
  },
  {
    path: '/xiyobon360',
    name: 'Hiyobon360',
    component: Hiyobon360
  },
  {
    path: '/targibot',
    name: 'Targibot',
    component: Targibot
  },
  {
    path: '/kitoblar',
    name: 'Kitoblar',
    component: Kitob
  }
]

const router = new VueRouter({
  routes
})

export default router
