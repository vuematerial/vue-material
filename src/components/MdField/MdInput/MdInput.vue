<template>
  <input
    v-bind="{ type, id, disabled, required, placeholder, readonly, maxlength }"
    v-model="content"
    class="md-input"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdFieldMixin from '../MdFieldMixin'

  export default new MdComponent({
    name: 'MdInput',
    mixins: [MdFieldMixin]
  })
</script>
