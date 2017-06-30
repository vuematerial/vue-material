<template>
  <input
    v-bind="{ type, id, disabled, required, placeholder, readonly, maxlength }"
    class="md-input"
    :class="[$mdActiveTheme]"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/MdUuid'

  export default new MdComponent({
    name: 'MdInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      id: {
        type: String,
        default: 'md-field-' + MdUuid()
      },
      placeholder: String,
      maxlength: [String, Number],
      readonly: Boolean,
      required: Boolean,
      disabled: Boolean
    },
    methods: {
      onFocus () {

      },
      onBlur () {

      },
      onInput () {

      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-input {
    transition: .3s $md-transition-default-timing;
  }
</style>
