import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import MdFieldModule from 'components/MdField'
import MdField from '../MdField.vue'

Vue.use(MdFieldModule)

test('should render the field', async () => {
  const template = '<md-field>Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.hasClass('md-field')).toBe(true)
  expect(wrapper.text().trim()).toBe('Lorem ipsum')
})
