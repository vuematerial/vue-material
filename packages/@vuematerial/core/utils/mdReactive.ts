import Vue from 'vue'

function mdReactive (data: any, setter?: () => any) {
  const instance = {
    reactive: {}
  }

  Vue.util.defineReactive(instance, 'reactive', data, setter)

  return instance.reactive
}

export default mdReactive
