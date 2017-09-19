import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueMaterial from 'src/material'

Vue.use(VueMaterial)

Vue.component('transition', {
  render (createElement) {
    return createElement('div', this.$slots.default)
  }
})

process.on('unhandledRejection', () => {})
