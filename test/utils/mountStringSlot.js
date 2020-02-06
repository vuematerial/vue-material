import Vue from 'vue'
import deepmerge from 'deepmerge'
import { mount } from '@vue/test-utils'

export default async (component, template, options = { propsData: {} }) => {
  const wrapper = mount(component, deepmerge(options, {
    slots: {
      default: [template]
    }
  }))

  await Vue.nextTick()

  return Promise.resolve(wrapper)
}
