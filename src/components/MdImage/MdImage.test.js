import mountTemplate from 'test/utils/mountTemplate'
import MdImage from './MdImage.vue'

test('should render the content', async () => {
  const template = '<md-image>Lorem ipsum</md-image>'
  const wrapper = await mountTemplate(MdImage, template)

  expect(wrapper.hasClass('md-image')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-image md-theme="alt">Lorem ipsum</md-image>'
  const wrapper = await mountTemplate(MdImage, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
