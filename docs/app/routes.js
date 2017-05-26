import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'splash',
    component: () => import('./pages/Splash.vue')
  },
  {
    path: '/',
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
