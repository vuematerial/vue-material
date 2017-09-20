<template>
  <textarea
    class="md-textarea"
    v-bind="attributes"
    v-on="$listeners"
    v-model="content"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
  </textarea>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/utils/MdUuid'
  import MdFieldMixin from '../MdFieldMixin'

  export default new MdComponent({
    name: 'MdTextarea',
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    props: {
      id: {
        type: String,
        default: () => 'md-textarea-' + MdUuid()
      },
      mdAutogrow: Boolean
    },
    methods: {
      applyStyles () {
        if (this.mdAutogrow) {
          const textarea = this.$refs.textarea

          textarea.style.height = '1px'
          textarea.style.height = textarea.scrollHeight + 'px'
        }
      },
      setTextarea () {
        this.MdField.textarea = true
      },
      setAutogrow () {
        this.MdField.autogrow = this.mdAutogrow
      },
      onInput () {
        this.setFieldValue()
        this.applyStyles()
      }
    },
    created () {
      this.setTextarea()
      this.setAutogrow()
    },
    async mounted () {
      await this.$nextTick()
      this.applyStyles()
    },
    beforeDestroy () {
      this.setTextarea(false)
    }
  })
</script>
