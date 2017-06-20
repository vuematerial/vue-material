<template>
  <input
    class="md-input"
    :type="type"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :readonly="readonly"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<script>
  import common from './common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-input',
    props: {
      type: {
        type: String,
        default: 'text'
      }
    },
    mixins: [common],
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

        if (!this.parentContainer) {
          this.$destroy();

          throw new Error('You should wrap the md-input in a md-input-container');
        }

        this.parentContainer.inputInstance = this;
        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();
      });
    }
  };
</script>
