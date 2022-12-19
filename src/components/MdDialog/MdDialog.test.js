import mountTemplate from 'test/utils/mountTemplate'
import MdDialog from './MdDialog.vue'

test('should render the dialog', async () => {
  const template = '<md-dialog md-active></md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)

  expect(wrapper.hasClass('md-dialog')).toBe(true)
})

test('should not render dialog with display none when md-keep-alive is true and md-active is true', async () => {
  const template = '<md-dialog md-keep-alive><div>Lorem ipsum</div></md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)
  expect(wrapper.hasStyle('display', 'none')).toBe(true)
  expect(wrapper.html()).toContain('Lorem ipsum')
})

test('should render dialog and not have display none when md-keep-alive is true and md-active is active', async () => {
  const template = '<md-dialog md-keep-alive md-active><div>Lorem ipsum</div></md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)
  expect(wrapper.hasStyle('display', 'none')).toBe(false)
  expect(wrapper.html()).toContain('Lorem ipsum')
})

test('should not have the dialog in the dom when md-keep-alive is false and the dialog is not active', async () => {
  const template = '<md-dialog><div>Lorem ipsum</div></md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)
  expect(wrapper.html()).toBe(undefined)
})
