import mountTemplate from 'test/utils/mountTemplate'
import MdProgressBar from './MdProgressBar.vue'

test('should render the progress', async () => {
  const template = '<md-progress-bar md-mode="indeterminate"></md-progress-bar>'
  const wrapper = await mountTemplate(MdProgressBar, template)

  expect(wrapper.hasClass('md-progress-bar')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-progress-bar md-theme="alt"></md-progress-bar>'
  const wrapper = await mountTemplate(MdProgressBar, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
