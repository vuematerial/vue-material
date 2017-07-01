<template>
  <textarea
    v-bind="{ id, disabled, required, placeholder, readonly, maxlength }"
    v-model="content"
    class="md-textarea"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput"
    ref="textarea"></textarea>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdFieldMixin from '../MdFieldMixin'

  export default new MdComponent({
    name: 'MdTextarea',
    mixins: [MdFieldMixin],
    props: {
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
        this.state.textarea = true
      },
      setAutogrow () {
        this.state.autogrow = this.mdAutogrow
      },
      onInput () {
        this.setStateValue()
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
    }
  })
</script>
