<template>
  <textarea
    class="md-textarea"
    :style="textareaStyles"
    v-bind="attributes"
    v-on="$listeners"
    v-model="content"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @change="onInput">
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
    computed: {
      textareaStyles () {
        return {
          height: this.textareaHeight
        }
      }
    },
    methods: {
      applyStyles () {
        if (this.mdAutogrow) {
          this.textareaHeight = '1px'
          this.textareaHeight = this.$el.scrollHeight + 'px'
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
