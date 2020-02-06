import mountTemplate from 'test/utils/mountTemplate'
import MdBottomBar from './MdBottomBar.vue'

test('should render the bottombar', async () => {
  const template = '<md-bottom-bar></md-bottom-bar>'
  const wrapper = await mountTemplate(MdBottomBar, template)

  expect(wrapper.classes('md-bottom-bar')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-bottom-bar md-theme="alt"></md-bottom-bar>'
  const wrapper = await mountTemplate(MdBottomBar, template)

  expect(wrapper.classes('md-theme-alt')).toBe(true)
})
