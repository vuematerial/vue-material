import Vue from 'vue'
import VueMaterial from './index'
import mountTemplate from 'test/utils/mountTemplate'

Vue.use(VueMaterial)

const app = new Vue({
  el: '#app',
  name: 'Root',
  render: mount => mount('div')
})

test('should create vue material instance', async () => {
  expect(Boolean(Vue.material)).toBe(true)
  expect(Boolean(app.$material)).toBe(true)
  expect(Boolean(app.$material.theming)).toBe(true)
  expect(Boolean(app.$material.locale)).toBe(true)
  expect(app.$material.ripple).toBe(true)
})

test('should have a default theme', async () => {
  expect(app.$material.theming.theme).toBe('default')
})

test('should enable theme by default', async () => {
  expect(app.$material.theming.enabled).toBe(true)
})

test('should not render meta colors by default', async () => {
  expect(app.$material.theming.metaColors).toBe(false)
})
