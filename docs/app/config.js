import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Vuei18n from 'vue-i18n'
import enUS from './i18n/en-US'
import { routes } from './routes'
import createRoute from './routes'

const debug = process.env.NODE_ENV !== 'production'

Vue.prototype.$http = Axios

Vue.use(VueRouter)
Vue.use(Vuei18n)

const mappedRoutes = routes.map(route => ({
  ...route,
  component: () => import(`./pages/${route.page}`)
}))

export const currentLang = enUS
export const i18n = new Vuei18n({
  locale: 'en-US',
  messages: {
    'en-US': enUS
  }
})

export const router = new VueRouter({
  mode: debug ? 'hash' : 'history',
  routes: mappedRoutes
})
