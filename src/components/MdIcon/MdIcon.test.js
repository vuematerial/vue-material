import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import { mount } from 'avoriaz'
import MdIcon from './MdIcon.vue'

test('should accept icon as ligature', () => {
  const template = '<md-icon>menu</md-icon>'
  const wrapper = mountTemplate(MdIcon, template)

  expect(wrapper.text()).toBe('menu');
})

test('should accept a svg icon', () => {
  const wrapper = mount(MdIcon)
  const svgIcon = 'assets/test.svg'
  const prop = 'mdSrc'

  wrapper.setProps({
    [prop]: svgIcon
  })

  expect(wrapper.vm.$props[prop]).toBe(svgIcon);
})
