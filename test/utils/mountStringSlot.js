import Vue from 'vue'
import deepmerge from 'deepmerge'
import { mount } from 'avoriaz'

export default async (component, template, options = {}) => {
  const wrapper = mount(component, deepmerge(options, {
    slots: {
      default: [template]
    }
  }))

  await Vue.nextTick()

  return Promise.resolve(wrapper)
}
