import bootstrap from '@vuematerial/core/bootstrap'
import MdButton from '@vuematerial/button'
import MdIcon from '@vuematerial/icon'

export default (vue: any) => {
  bootstrap(vue)
  vue.use(MdButton)
  vue.use(MdIcon)
}
