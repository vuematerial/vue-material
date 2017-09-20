import mountTemplate from 'test/utils/mountTemplate'
import MdDatepicker from './MdDatepicker.vue'

test('should render the datepicker', async () => {
  const template = '<md-datepicker>Lorem ipsum</md-datepicker>'
  const wrapper = await mountTemplate(MdDatepicker, template)

  expect(wrapper.hasClass('md-datepicker')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-datepicker md-theme="alt">Lorem ipsum</md-datepicker>'
  const wrapper = await mountTemplate(MdDatepicker, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})