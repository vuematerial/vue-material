import mountStringSlot from 'test/utils/mountStringSlot'
import mountTemplate from 'test/utils/mountTemplate'
import MdSwitch from './MdSwitch.vue'

test('should render the switch', async () => {
  const template = '<md-switch></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.hasClass('md-switch')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-switch md-theme="alt"></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should add id and for on input and label', async () => {
  const myId = 'my-id'
  const template = `<md-switch id="${myId}">Label</md-switch>`
  const wrapper = await mountTemplate(MdSwitch, template)
  const input = wrapper.find('input')[0]
  const label = wrapper.find('label')[0]

  expect(input.hasAttribute('id')).toBe(true)
  expect(input.getAttribute('id')).toBe(myId)

  expect(label.hasAttribute('for')).toBe(true)
  expect(label.getAttribute('for')).toBe(myId)
})

test('should create a fallback id if not given', async () => {
  const wrapper = await mountStringSlot(MdSwitch, 'Label')
  const createdId = wrapper.vm.$props.id
  const input = wrapper.find('input')[0]
  const label = wrapper.find('label')[0]

  expect(input.hasAttribute('id')).toBe(true)
  expect(input.getAttribute('id')).toBe(createdId)

  expect(label.hasAttribute('for')).toBe(true)
  expect(label.getAttribute('for')).toBe(createdId)
})

test('should create disabled and required classes', async () => {
  const wrapper = await mountStringSlot(MdSwitch, 'Label', {
    propsData: {
      disabled: true,
      required: true
    }
  })

  expect(wrapper.hasClass('md-disabled')).toBe(true)
  expect(wrapper.hasClass('md-required')).toBe(true)
})

test('should bind id, name, disabled and required to the inner input', async () => {
  const wrapper = await mountStringSlot(MdSwitch, 'Label', {
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

test('should add and remove a value from model when model is an array by clicking on container', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="2"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: ['1']
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toEqual(['1', '2'])

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toEqual(['1'])
})

test('should add and remove a value from model when model is an array by clicking on label', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1">Label</md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: []
    }
  })
  const label = wrapper.find('label')[0]

  label.trigger('click')
  expect(wrapper.data().model).toEqual(['1'])

  label.trigger('click')
  expect(wrapper.data().model).toEqual([])
})

test('should toggle a checked class when checked', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1">Label</md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: ['1']
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const label = wrapper.find('label')[0]

  expect(toggle.hasClass('md-checked')).toBe(true)

  label.trigger('click')
  await toggle.vm.$nextTick()
  expect(toggle.hasClass('md-checked')).toBe(false)
})

test('should bind true / false when no value attribute is given', async () => {
  const template = `
    <div>
      <md-switch v-model="model"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: null
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(true)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(false)
})

test('true-value / false-value should works', async () => {
  const template = `
    <div>
      <md-switch v-model="model" true-value="true" false-value="false"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: null
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('true')

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe('false')
})

test('should toggle string values on model', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: '1'
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  expect(toggle.vm.isSelected).toBe(true)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(null)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('1')
})

test('should toggle boolean model when switch do not have a value', async () => {
  const template = `
    <div>
      <md-switch v-model="model"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: false
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  await toggle.vm.$nextTick()

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(true)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(false)
})

test('should toggle null / value while checkbox has been set value', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="val"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data: {
      model: false
    }
  })
  const toggle = wrapper.find(MdSwitch)[0]
  const container = wrapper.find('.md-switch-container')[0]

  await toggle.vm.$nextTick()

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('val')

  container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(null)
})
