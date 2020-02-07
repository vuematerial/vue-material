import mountTemplate from 'test/utils/mountTemplate'
import MdTooltip from './MdTooltip.vue'

test('should render the tooltip', async () => {
  const template = '<md-tooltip>Lorem ipsum</md-tooltip>'
  const wrapper = await mountTemplate(MdTooltip, template)

  // expect(wrapper.classes('md-tooltip')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-tooltip md-theme="alt">Lorem ipsum</md-tooltip>'
  const wrapper = await mountTemplate(MdTooltip, template)

  //expect(wrapper.classes('md-theme-alt')).toBe(true)
})
