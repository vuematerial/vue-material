import MdButton from './MdButton'

export const components = {
  MdButton
}

export const registerAll = (Vue) => {
  Object.values(components).forEach((component) => {
    Vue.use(component)
  })
}
