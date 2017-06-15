/* Third Party */
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

/* App */
import App from './App'
import router from './routes'
import { i18n } from './config'
import store from './store'
import './components'

Vue.use(VueMaterial)
Vue.config.productionTip = false

sync(store, router)

const app = new Vue({
  name: 'root',
  router,
  store,
  i18n,
  render: mount => mount(App)
})

router.onReady(() => {
  app.$mount('#docs')
})
