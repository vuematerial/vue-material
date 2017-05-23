import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueMaterialComponents from 'components'
import App from './App'

Vue.use(VueMaterial)
Vue.use(VueMaterialComponents)
Vue.config.productionTip = false

const root = new Vue({
  name: 'root',
  render: mount => mount(App)
})

root.$mount('#docs')
