import mountTemplate from 'test/utils/mountTemplate'
import MdRadio from './MdRadio.vue'

test('should render the radio', async () => {
  const template = '<md-radio></md-radio>'
  const wrapper = await mountTemplate(MdRadio, template)

  expect(wrapper.hasClass('md-radio')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-radio md-theme="alt"></md-radio>'
  const wrapper = await mountTemplate(MdRadio, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
