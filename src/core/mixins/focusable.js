export default {
  data: () => ({
    eventSource: null
  }),
  computed: {
    $mdFocusedClass () {
      return {
        'md-focused': this.eventSource === 'focus'
      }
    }
  },
  methods: {
    onClick ($event) {
      this.eventSource = $event.type
      this.$emit('click', $event)
    },
    onFocus ($event) {
      this.eventSource = $event.type
      this.$emit('focus', $event)
    },
    onBlur ($event) {
      this.eventSource = null
      this.$emit('blur', $event)
    }
  },
  mounted () {
    this.$el.addEventListener('click', this.onClick)
    this.$el.addEventListener('focus', this.onFocus)
    this.$el.addEventListener('blur', this.onBlur)
  },
  beforeDestroy () {
    this.$el.removeEventListener('click', this.onClick)
    this.$el.removeEventListener('focus', this.onFocus)
    this.$el.removeEventListener('blur', this.onBlur)
  }
}
