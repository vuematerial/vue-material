import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'

Vue.use(VueMaterial)
Vue.config.productionTip = false

const root = new Vue({
  name: 'root',
  render: mount => mount(App)
})

root.$mount('#app')
