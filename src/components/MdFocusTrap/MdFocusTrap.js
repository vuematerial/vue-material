import Vue from 'vue'

export default {
  name: 'MdFocusTrap',
  abstract: true,
  async mounted () {
    await this.$nextTick()

    this.$el.setAttribute('tabindex', '-1')
    this.$el.focus()
  },
  render () {
    try {
      return this.$slots.default[0]
    } catch (e) {
      Vue.util.warn('MdFocusTrap can only render one, and exactly one child component.', this)
    }

    return null
  }
}
