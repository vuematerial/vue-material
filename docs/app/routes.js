import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home/Home.vue')
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import('./pages/GettingStarted.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('./pages/Components.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('./pages/Error.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
