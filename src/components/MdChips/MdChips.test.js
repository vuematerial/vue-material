import mountTemplate from 'test/utils/mountTemplate'
import MdChips from './MdChips.vue'

test('should render the chips', async () => {
  const template = '<md-chips></md-chips>'
  const wrapper = await mountTemplate(MdChips, template)

  expect(wrapper.hasClass('md-chips')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-chips md-theme="alt"></md-chips>'
  const wrapper = await mountTemplate(MdChips, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
