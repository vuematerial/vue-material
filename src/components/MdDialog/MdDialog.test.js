import mountTemplate from 'test/utils/mountTemplate'
import MdDialog from './MdDialog.vue'

test('should render the dialog', async () => {
  const template = '<md-dialog md-active></md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)

  expect(wrapper.hasClass('md-dialog')).toBe(true)
})
