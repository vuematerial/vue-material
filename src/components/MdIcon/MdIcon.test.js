import mountTemplate from 'test/utils/mountTemplate'
import mockRequest from 'test/utils/mockRequest'
import { mount } from 'avoriaz'
import { fakeServer, useFakeTimers } from 'sinon'
import MdIcon from './MdIcon.vue'

test('should accept icon as ligature', () => {
  const template = '<md-icon>menu</md-icon>'
  const wrapper = mountTemplate(MdIcon, template)

  expect(wrapper.text()).toBe('menu')
})

test('should render a svg icon from a XMLHttpRequest', async () => {
  const svgUrl = 'test.svg'
  const svgContent = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'
  const prop = 'mdSrc'
  let wrapper = null

  const mock = await mockRequest({
    url: svgUrl,
    content: svgContent,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper = mount(MdIcon, {
    propsData: {
      [prop]: svgUrl
    }
  })

  await mock()

  expect(wrapper.contains('svg')).toBe(true)
  expect(wrapper.vm.$props[prop]).toBe(svgUrl)
})
