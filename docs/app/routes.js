import Vue from 'vue'
import VueRouter from 'vue-router'

const Splash = r => require.ensure([], () => r(require('./pages/Splash.vue')), 'splash')
const Components = r => require.ensure([], () => r(require('./pages/Components.vue')), 'components')
const ErrorPage = r => require.ensure([], () => r(require('./pages/Error.vue')), 'error')

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'splash',
    component: Splash
  },
  {
    path: '/',
    name: 'components',
    component: Components
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
