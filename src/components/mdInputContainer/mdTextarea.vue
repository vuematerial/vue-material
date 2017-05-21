<template>
  <textarea
    class="md-input"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :readonly="readonly"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"></textarea>
</template>

<script>
  import autosize from 'autosize';
  import common from './common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-textarea',
    mixins: [common],
    watch: {
      value() {
        this.$nextTick(() => autosize.update(this.$el));
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

        if (!this.parentContainer) {
          this.$destroy();

          throw new Error('You should wrap the md-textarea in a md-input-container');
        }

        this.parentContainer.inputInstance = this;
        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();

        if (!this.$el.getAttribute('rows')) {
          this.$el.setAttribute('rows', '1');
        }

        autosize(this.$el);
        setTimeout(() => autosize.update(this.$el), 200);
      });
    },
    beforeDestroy() {
      autosize.destroy(this.$el);
    }
  };
</script>
