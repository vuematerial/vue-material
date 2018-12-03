import bootstrap from '@vuematerial/core/bootstrap'
import MdButton from '@vuematerial/button'
import MdIcon from '@vuematerial/icon'
import MdShape from '@vuematerial/shape'
import MdAppBar from '@vuematerial/app-bar'

export default (vue: any) => {
  bootstrap(vue)
  vue.use(MdButton)
  vue.use(MdIcon)
  vue.use(MdShape)
  vue.use(MdAppBar)
}
