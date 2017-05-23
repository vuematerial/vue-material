import MdButton from './MdButton'
import MdRipple from './MdRipple'

export const components = {
  MdButton,
  MdRipple
}

export const install = (Vue) => {
  Object.values(components).forEach((component) => {
    Vue.use(component)
  })
}
