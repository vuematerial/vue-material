import Vue from 'vue'
import { mount } from '@vue/test-utils'
import mountTemplate from 'test/utils/mountTemplate'
import MdField from './MdField.vue'
import MdInput from './MdInput/MdInput.vue'
import MdTextarea from './MdTextarea/MdTextarea.vue'

let MdLabel = null

beforeEach(() => {
  MdLabel = Vue.component('MdLabel', {
    template: '<label>Label</label>'
  })
})

test('should render the field', async () => {
  const template = '<md-field>Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.classes('md-field')).toBe(true)
  expect(wrapper.text().trim()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-field md-theme="alt">Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.classes('md-theme-alt')).toBe(true)
})

/* test('should create a fallback id if not given', async () => {
  const wrapperWithInput = mount(MdField, {
    slots: {
      default: [MdLabel, MdInput]
    }
  })
  const wrapperWithTextarea = mount(MdField, {
    slots: {
      default: [MdLabel, MdTextarea]
    }
  })
  const input = wrapperWithInput.find(MdInput)[0]
  const inputLabel = wrapperWithInput.find('label')[0]
  const textarea = wrapperWithTextarea.find(MdTextarea)[0]
  const textareaLabel = wrapperWithTextarea.find('label')[0]
  const inputId = input.vm.$props.id
  const textareaId = textarea.vm.$props.id

  expect(input.attributes()['id']).toBe(true)
  expect(input.attributes().id).toBe(inputId)

  expect(inputLabel.attributes()['for']).toBe(true)
  expect(inputLabel.attributes().for).toBe(inputId)

  expect(textarea.attributes()['id']).toBe(true)
  expect(textarea.attributes().id).toBe(textareaId)

  expect(textareaLabel.attributes()['for']).toBe(true)
  expect(textareaLabel.attributes().for).toBe(textareaId)
}) */

/* test('should bind id, name, disabled and required to the inner input', async () => {
  const wrapperWithInput = mount(MdField, {
    slots: {
      default: [MdLabel, MdInput]
    },
    propsData: {
      id: 'test',
      name: 'test',
      disabled: true,
      required: true
    }
  })
  const wrapper = await mountStringSlot(MdRadio, 'Label', {
  })
  const input = wrapper.find('input')

  expect(input.attributes()['id', 'test']).toBe(true)
  expect(input.attributes()['name', 'test']).toBe(true)
  expect(input.attributes()['disabled', 'disabled']).toBe(true)
  expect(input.attributes()['required', 'required']).toBe(true)
})
 */
