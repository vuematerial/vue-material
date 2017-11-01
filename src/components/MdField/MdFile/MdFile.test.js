import Vue from 'vue'
import { mount } from 'avoriaz'
import mountTemplate from 'test/utils/mountTemplate'
import MdFieldModule from 'components/MdField'
import MdField from '../MdField.vue'
import MdFile from './MdFile.vue'

Vue.use(MdFieldModule)

test('should render the field', async () => {
  const template = '<md-field>Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.hasClass('md-field')).toBe(true)
  expect(wrapper.text().trim()).toBe('Lorem ipsum')
})
