import mountTemplate from 'test/utils/mountTemplate'
import MdTabs from './MdTabs.vue'

test('should render the tabs', async () => {
  const template = '<md-tabs></md-tabs>'
  const wrapper = await mountTemplate(MdTabs, template)

  expect(wrapper.hasClass('md-tabs')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-tabs md-theme="alt"></md-tabs>'
  const wrapper = await mountTemplate(MdTabs, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
