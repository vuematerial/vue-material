import mountStringSlot from 'test/utils/mountStringSlot'
import mountTemplate from 'test/utils/mountTemplate'
import MdSwitch from './MdSwitch.vue'

test('should render the switch', async () => {
  const template = '<md-switch></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.classes('md-switch')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-switch md-theme="alt"></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.classes('md-theme-alt')).toBe(true)
})

test('should add id and for on input and label', async () => {
  const myId = 'my-id'
  const template = `<md-switch id="${myId}">Label</md-switch>`
  const wrapper = await mountTemplate(MdSwitch, template)
  const input = wrapper.find('input')
  const label = wrapper.find('label')

  expect(input.attributes().id).toBe(myId)

  expect(label.attributes().for).toBe(myId)
})

test('should create a fallback id if not given', async () => {
  const wrapper = await mountStringSlot(MdSwitch, 'Label')
  const createdId = wrapper.vm.$props.id
  const input = wrapper.find('input')
  const label = wrapper.find('label')

  expect(input.attributes().id).toBe(createdId)

  expect(label.attributes().for).toBe(createdId)
})

test('should create disabled and required classes', async () => {
  const wrapper = await mountStringSlot(MdSwitch, 'Label', {
    propsData: {
      disabled: true,
      required: true
    }
  })

  expect(wrapper.classes('md-disabled')).toBe(true)
  expect(wrapper.classes('md-required')).toBe(true)
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
  const input = wrapper.find('input')

  expect(input.attributes().id).toBe('test')

  expect(input.attributes().name).toBe('test')

  expect(input.attributes().disabled).toBe('disabled')

  expect(input.attributes().required).toBe('required')
})

test('should add and remove a value from model when model is an array by clicking on container', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="2"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: ['1']
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toEqual(['1'])

  container.trigger('click')
  await wrapper.vm.$nextTick() 
  expect(wrapper.vm.model).toEqual(['1', '2'])
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toEqual(['1', '2'])

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toEqual(['1'])
})

test('should add and remove a value from model when model is an array by clicking on label', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1">Label</md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: []
      }
    }
  })
  const container = wrapper.find('.md-switch-container')

  container.trigger('click')
  expect(wrapper.vm.model).toEqual(['1'])

  container.trigger('click')
  expect(wrapper.vm.model).toEqual([])
})

test('should toggle a checked class when checked', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1">Label</md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: ['1']
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  expect(toggle.classes('md-checked')).toBe(true)

  container.trigger('click')
  await toggle.vm.$nextTick()
  expect(toggle.classes('md-checked')).toBe(false)
})

test('should bind true / false when no value attribute is given', async () => {
  const template = `
    <div>
      <md-switch v-model="model"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: null
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toBe(true)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toBe(false)
})

test('true-value / false-value should works', async () => {
  const template = `
    <div>
      <md-switch v-model="model" true-value="true" false-value="false"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: null
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toBe('true')

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toBe('false')
})

test('should toggle string values on model', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="1"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: '1'
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  expect(toggle.vm.isSelected).toBe(true)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toBe(null)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toBe('1')
})

test('should toggle boolean model when switch do not have a value', async () => {
  const template = `
    <div>
      <md-switch v-model="model"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: false
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  await toggle.vm.$nextTick()

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toBe(true)

  container.trigger('click')
  await wrapper.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toBe(false)
})

test('should toggle null / value while checkbox has been set value', async () => {
  const template = `
    <div>
      <md-switch v-model="model" value="val"></md-switch>
    </div>
  `
  const wrapper = await mountTemplate(MdSwitch, template, {
    data() {
      return {
        model: false
      }
    }
  })
  const toggle = wrapper.find(MdSwitch)
  const container = wrapper.find('.md-switch-container')

  await toggle.vm.$nextTick()

  expect(toggle.vm.isSelected).toBe(false)

  container.trigger('click')
  await toggle.vm.$nextTick()
  expect(toggle.vm.isSelected).toBe(true)
  expect(wrapper.vm.model).toBe('val')

  await container.trigger('click')
  expect(toggle.vm.isSelected).toBe(false)
  expect(wrapper.vm.model).toBe(null)
})
