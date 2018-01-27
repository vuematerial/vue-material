import mountTemplate from 'test/utils/mountTemplate'
import MdSlider from './MdSlider.vue'

test('should render the slider', async () => {
  const template = '<md-slider>Lorem ipsum</md-slider>'
  const wrapper = await mountTemplate(MdSlider, template)

  expect(wrapper.hasClass('md-slider')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-slider md-theme="alt">Lorem ipsum</md-slider>'
  const wrapper = await mountTemplate(MdSlider, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})