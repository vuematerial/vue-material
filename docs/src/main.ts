import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import { registerServiceWorker } from './worker'
import './components'

Vue.config.productionTip = false
Vue.use(VueMaterial)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    i18n,
    render: (h: any) => h(App)
  })

  router.onReady(() => {
    app.$mount('#docs')
    registerServiceWorker()
  })
})
