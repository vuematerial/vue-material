import bootstrap from '@vuematerial/core/bootstrap'
import MdButton from '@vuematerial/button'

export default (vue: any) => {
  bootstrap(vue)
  vue.use(MdButton)
}
