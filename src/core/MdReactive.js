import Vue from 'vue'

export default function (data) {
  const Instance = {}

  Vue.util.defineReactive(Instance, 'reactive', data)

  return Instance.reactive
}
