import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import { mount } from 'avoriaz'
import MdFieldModule from 'components/MdField'
import MdField from '../MdField.vue'
import inputSpeed from '../fixtures/inputSpeed.vue'
import noBind from '../fixtures/noBind.vue'
import upstreamChange from '../fixtures/upstreamChange.vue'

Vue.use(MdFieldModule)

test('should render the input', async () => {
  const template = `
    <md-field>
      <md-input></md-input>
    </md-field>
  `
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.contains('.md-input')).toBe(true)
})

test('should preserve a value of the "name" attribute on change', async () => {
  const template = `
    <md-field>
      <md-input name="details"></md-input>
    </md-field>
  `
  const wrapper = await mountTemplate(MdField, template)
  const input = wrapper.find('.md-input')[0]

  input.trigger('change')

  await wrapper.vm.$nextTick()

  expect(input.getAttribute('name')).toBe('details')
})

// https://github.com/vuematerial/vue-material/pull/1839
test('should support with phone autocorrect', async () => {
  const wrapper = await mount(inputSpeed, {})
  const vm = wrapper.vm

  await wrapper.vm.$nextTick()

  // should work with android autocorrect without waiting
  expect(vm.form.server).toBe('autocorrect')
  expect(vm.form.todo).toBe('') // setting to empty should work
})

test('should take input without binding', async () => {
  const wrapper = await mount(noBind, {})
  const vm = wrapper.vm

  await wrapper.vm.$nextTick()

  expect(vm.noBind).toBe('Not data binded')  // Should work without data binding
})

test('should handle simultaneous v-model and input event calls', async () => {
  const wrapper = await mount(upstreamChange, {})
  const vm = wrapper.vm

  await wrapper.vm.$nextTick()

  expect(vm.inputValue).toBe('upstream')  // Should work without data binding
  expect(vm.executions).toBe(3)
})
