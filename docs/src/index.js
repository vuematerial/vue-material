import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueMaterialComponents from 'components'
import App from './App'

Vue.use(VueMaterial)
Vue.use(VueMaterialComponents)
Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  name: 'root',
  el: '#docs',
  render: mount => mount(App)
})
