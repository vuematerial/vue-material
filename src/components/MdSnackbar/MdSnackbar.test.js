import mountTemplate from 'test/utils/mountTemplate'
import MdSnackbar from './MdSnackbar.vue'

test('should render the snackbar', async () => {
  const template = '<md-snackbar md-active></md-snackbar>'
  const wrapper = await mountTemplate(MdSnackbar, template)

  expect(wrapper.hasClass('md-snackbar')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-snackbar md-active md-theme="alt"></md-snackbar>'
  const wrapper = await mountTemplate(MdSnackbar, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
