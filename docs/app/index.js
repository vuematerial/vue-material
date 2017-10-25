/* Third Party */
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

/* App */
import App from './App'
import { i18n, router } from './config'
import store from './store'
import './components'

Vue.config.productionTip = false
Vue.use(VueMaterial)

sync(store, router)

const app = new Vue({
  name: 'Root',
  router,
  store,
  i18n,
  render: mount => mount(App)
})

router.onReady(() => {
  app.$mount('#docs')
})
