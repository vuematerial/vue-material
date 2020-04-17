/* Third Party */
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import ga from 'vue-ga'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'
import VueGitHubButtons from 'vue-github-buttons'
import VueToc from 'vue-toc'

Vue.component('vue-toc', VueToc)

import 'vue-github-buttons/dist/vue-github-buttons.css';

/* App */
import App from './App'
import { i18n, router } from './config'
import store from './store'
import './banner'
import './components'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueGitHubButtons)

ga(router, 'UA-85823257-1')
sync(store, router)

document.addEventListener('DOMContentLoaded', () => {
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
})
