import mockRequest from 'test/utils/mockRequest'
import mockConsole from 'test/utils/mockConsole'
import { mount } from 'avoriaz'
import MdSvgLoader from './MdSvgLoader.vue'

test('should gives an error when no mdSrc is present', async () => {
  const mock = mockConsole()

  mount(MdSvgLoader)

  expect(console.error).toBeCalled()

  mock()
})

test('should render a external svg', async () => {
  const svgUrl = 'external.svg'
  const svgContent = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'
  const prop = 'mdSrc'
  let wrapper = null

  const mock = mockRequest({
    url: svgUrl,
    content: svgContent,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper = mount(MdSvgLoader, {
    propsData: {
      [prop]: svgUrl
    }
  })

  await mock()

  expect(wrapper.contains('svg')).toBe(true)
  expect(wrapper.vm.$props[prop]).toBe(svgUrl)
})

test('should change the current SVG to another', async () => {
  const svgUrl1 = 'external1.svg'
  const svgUrl2 = 'external2.svg'
  const svgContent1 = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'
  const svgContent2 = '<svg width="24" xmlns="http://www.w3.org/2000/svg"></svg>'
  const prop = 'mdSrc'
  let wrapper = null

  const mock1 = mockRequest({
    url: svgUrl1,
    content: svgContent1,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper = mount(MdSvgLoader, {
    propsData: {
      [prop]: svgUrl1
    }
  })

  await mock1()

  expect(wrapper.contains('svg')).toBe(true)
  expect(wrapper.vm.$props[prop]).toBe(svgUrl1)
  expect(wrapper.vm.$el.innerHTML).toBe(svgContent1)

  const mock2 = mockRequest({
    url: svgUrl2,
    content: svgContent2,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper.setProps({
    mdSrc: svgUrl2
  })

  await mock2()

  expect(wrapper.contains('svg')).toBe(true)
  expect(wrapper.vm.$props[prop]).toBe(svgUrl2)
  expect(wrapper.vm.$el.innerHTML).toBe(svgContent2)
})

test('should create a cache blocking equal requests', async () => {
  const svgUrl = 'equals.svg'
  const svgContent = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'
  const propData = {
    propsData: {
      mdSrc: svgUrl
    }
  }

  const mock = mockRequest({
    url: svgUrl,
    content: svgContent,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  mount(MdSvgLoader, propData)
  mount(MdSvgLoader, propData)
  mount(MdSvgLoader, propData)

  const server = await mock()

  expect(server.requestCount).toBe(1)
})

test('should throws if the file do not exists', async () => {
  const svgUrl = '404.svg'
  let wrapper = null

  const mock = mockRequest({
    status: 404,
    url: svgUrl,
    content: '',
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper = mount(MdSvgLoader, {
    propsData: {
      mdSrc: svgUrl
    }
  })

  await mock()

  expect(wrapper.vm.error).toBe(`The file ${svgUrl} do not exists.`)
})

test('should throws if the file is not an svg', async () => {
  const svgUrl = 'external.txt'
  const svgContent = 'test'
  const prop = 'mdSrc'
  let wrapper = null

  const mock = mockRequest({
    url: svgUrl,
    content: svgContent,
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  wrapper = mount(MdSvgLoader, {
    propsData: {
      [prop]: svgUrl
    }
  })

  await mock()

  expect(wrapper.vm.error).toBe(`The file ${svgUrl} is not a valid SVG.`)
})

test('should throws if cors or an unknown error', async () => {
  const svgUrl = 'https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_3d_rotation_black_24px.svg'
  let wrapper = null

  const mock = mockRequest({
    status: 500,
    url: svgUrl,
    content: ''
  })

  wrapper = mount(MdSvgLoader, {
    propsData: {
      mdSrc: svgUrl
    }
  })

  await mock()

  expect(wrapper.vm.error).toBe(`Something bad happened trying to fetch ${svgUrl}.`)
})

test('should not break if the request never resolves', () => {
  const svgUrl = 'noop.svg'
  const wrapper = mount(MdSvgLoader, {
    propsData: {
      mdSrc: svgUrl
    }
  })

  expect(wrapper.vm.error).toBe(null)
})
