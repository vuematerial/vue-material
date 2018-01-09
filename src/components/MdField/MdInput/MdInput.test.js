import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import MdFieldModule from 'components/MdField'
import MdField from '../MdField.vue'

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
