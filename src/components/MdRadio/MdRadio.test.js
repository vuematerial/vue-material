import mountStringSlot from 'test/utils/mountStringSlot'
import mountTemplate from 'test/utils/mountTemplate'
import MdRadio from './MdRadio.vue'

test('should render the radio', async () => {
  const template = '<md-radio></md-radio>'
  const wrapper = await mountTemplate(MdRadio, template)

  expect(wrapper.hasClass('md-radio')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-radio md-theme="alt"></md-radio>'
  const wrapper = await mountTemplate(MdRadio, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should create a fallback id if not given', async () => {
  const wrapper = await mountStringSlot(MdRadio, 'Label')
  const createdId = wrapper.vm.$props.id
  const input = wrapper.find('input')[0]
  const label = wrapper.find('label')[0]

  expect(input.hasAttribute('id')).toBe(true)
  expect(input.getAttribute('id')).toBe(createdId)

  expect(label.hasAttribute('for')).toBe(true)
  expect(label.getAttribute('for')).toBe(createdId)
})

test('should create a fallback value if not given', async () => {
  const wrapper = await mountStringSlot(MdRadio, 'Label')
  const createdValue = wrapper.vm.$props.value

  expect(createdValue).toBe('on')
})

test('should create disabled and required classes', async () => {
  const wrapper = await mountStringSlot(MdRadio, 'Label', {
    propsData: {
      disabled: true,
      required: true
    }
  })

  expect(wrapper.hasClass('md-disabled')).toBe(true)
  expect(wrapper.hasClass('md-required')).toBe(true)
})

test('should bind id, name, disabled and required to the inner input', async () => {
  const wrapper = await mountStringSlot(MdRadio, 'Label', {
    propsData: {
      id: 'test',
      name: 'test',
      disabled: true,
      required: true
    }
  })
  const input = wrapper.find('input')[0]

  expect(input.hasAttribute('id')).toBe(true)
  expect(input.getAttribute('id')).toBe('test')

  expect(input.hasAttribute('name')).toBe(true)
  expect(input.getAttribute('name')).toBe('test')

  expect(input.hasAttribute('disabled')).toBe(true)
  expect(input.getAttribute('disabled')).toBe('disabled')

  expect(input.hasAttribute('required')).toBe(true)
  expect(input.getAttribute('required')).toBe('required')
})

test('should toggle a checked class when checked', async () => {
  const template = `
    <div>
      <md-radio v-model="model" value="1">Label</md-radio>
      <md-radio v-model="model" value="2">Label</md-radio>
    </div>
  `
  const wrapper = await mountTemplate(MdRadio, template, {
    data: {
      model: '1'
    }
  })
  const radio1 = wrapper.find(MdRadio)[0]
  const radio2 = wrapper.find(MdRadio)[1]
  const label1 = wrapper.find('label')[0]
  const label2 = wrapper.find('label')[1]

  expect(radio1.hasClass('md-checked')).toBe(true)
  expect(radio2.hasClass('md-checked')).toBe(false)

  label2.trigger('click')
  await wrapper.vm.$nextTick()
  expect(radio1.hasClass('md-checked')).toBe(false)
  expect(radio2.hasClass('md-checked')).toBe(true)

  label1.trigger('click')
  await wrapper.vm.$nextTick()
  expect(radio1.hasClass('md-checked')).toBe(true)
  expect(radio2.hasClass('md-checked')).toBe(false)
})

test('should bind "on" value when no value attribute is given', async () => {
  const template = `
  <div>
    <md-radio v-model="model" value="1">Label</md-radio>
    <md-radio v-model="model">Label</md-radio>
  </div>
  `
  const wrapper = await mountTemplate(MdRadio, template, {
    data: {
      model: '1'
    }
  })
  const radio1 = wrapper.find(MdRadio)[0]
  const radio2 = wrapper.find(MdRadio)[1]
  const container1 = wrapper.find('.md-radio-container')[0]
  const container2 = wrapper.find('.md-radio-container')[1]

  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe('1')

  container2.trigger('click')
  expect(radio1.vm.isSelected).toBe(false)
  expect(radio2.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('on')

  container1.trigger('click')
  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe('1')
})

test('should toggle string values on model', async () => {
  const template = `
    <div>
      <md-radio v-model="model" value="1">Label</md-radio>
      <md-radio v-model="model" value="2">Label</md-radio>
    </div>
  `
  const wrapper = await mountTemplate(MdRadio, template, {
    data: {
      model: '1'
    }
  })
  const radio1 = wrapper.find(MdRadio)[0]
  const radio2 = wrapper.find(MdRadio)[1]
  const container1 = wrapper.find('.md-radio-container')[0]
  const container2 = wrapper.find('.md-radio-container')[1]

  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe('1')

  container2.trigger('click')
  expect(radio1.vm.isSelected).toBe(false)
  expect(radio2.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('2')

  container1.trigger('click')
  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe('1')
})

test('should toggle boolean values on model', async () => {
  const template = `
    <div>
      <md-radio v-model="model" :value="true">Label</md-radio>
      <md-radio v-model="model" :value="false">Label</md-radio>
    </div>
  `
  const wrapper = await mountTemplate(MdRadio, template, {
    data: {
      model: true
    }
  })
  const radio1 = wrapper.find(MdRadio)[0]
  const radio2 = wrapper.find(MdRadio)[1]
  const container1 = wrapper.find('.md-radio-container')[0]
  const container2 = wrapper.find('.md-radio-container')[1]

  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(true)

  container2.trigger('click')
  expect(radio1.vm.isSelected).toBe(false)
  expect(radio2.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(false)

  container1.trigger('click')
  expect(radio1.vm.isSelected).toBe(true)
  expect(radio2.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(true)
})
