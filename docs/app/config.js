import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Vuei18n from 'vue-i18n'
import i18nLocales from './i18n'
import { routes } from './routes'

Vue.prototype.$http = Axios

Vue.use(VueRouter)
Vue.use(Vuei18n)

const mappedRoutes = routes.map(route => ({
  ...route,
  component: () => import(`./pages/${route.page}`)
}))

export const currentLang = i18nLocales.enUS
export const i18n = new Vuei18n({
  locale: 'enUS',
  messages: i18nLocales
})

export const router = new VueRouter({
  mode: 'history',
  routes: mappedRoutes
})
