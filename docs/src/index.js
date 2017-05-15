import Vue from 'vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

const root = new Vue({
  name: 'root',
  render: h => h('test')
})

root.$mount('#app')
