/* Third Party */
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueMaterialComponents from 'vue-material/components'

/* App */
import App from './App'
import router from './routes.js'
import { i18n } from './config.js'
import './components'

Vue.use(VueMaterial)
Vue.use(VueMaterialComponents)
Vue.config.productionTip = false

const app = new Vue({
  name: 'root',
  router,
  i18n,
  render: mount => mount(App)
})

router.onReady(() => {
  app.$mount('#docs')
})
