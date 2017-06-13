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
    path: '/components/button',
    name: 'components/button',
    component: () => import('./pages/Components/Button/Button.vue')
  },
  {
    path: '/components/icon',
    name: 'components/icon',
    component: () => import('./pages/Components/Icon/Icon.vue')
  },
  {
    path: '/ui-elements',
    name: 'ui-elements',
    component: () => import('./pages/UiElements.vue')
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import('./pages/Temp.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('./pages/Error.vue')
  }
]

const debug = process.env.NODE_ENV !== 'production'

export default new VueRouter({
  mode: debug ? 'hash' : 'history',
  routes
})
