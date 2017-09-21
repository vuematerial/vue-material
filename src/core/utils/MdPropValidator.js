import { util } from 'vue'

export default (name, options) => {
  return {
    validator: value => {
      if (options.includes(value)) {
        return true
      }

      util.warn(`The ${name} prop is invalid. Given value: ${value}. Available options: ${options.join(', ')}.`, this)

      return false
    }
  }
}
