/* Third Party */
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import * as VueMaterial from 'vue-material/components'

/* App */
import App from './App'
import router from './routes'
import { i18n } from './config'
import store from './store'
import './components'

for (let c in VueMaterial) {
  Vue.use(VueMaterial[c])
}
Vue.config.productionTip = false

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
