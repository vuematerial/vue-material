import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueMaterial from 'src/material'

Vue.use(VueMaterial)

process.on('unhandledRejection', () => {})
