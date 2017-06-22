<template>
  <div class="md-chip" :class="[themeClass, classes]" tabindex="0">
    <div class="md-chip-container" @click="!disabled && mdEditable && $emit('edit')">
      <slot></slot>
    </div>

    <md-button
      class="md-icon-button md-dense md-delete"
      v-if="mdDeletable"
      @click="!disabled && $emit('delete')"
      @keyup.native.delete="!disabled && $emit('delete')"
      tabindex="-1">
      <md-icon class="md-icon-delete">cancel</md-icon>
    </md-button>
  </div>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-chip',
    props: {
      disabled: Boolean,
      mdDeletable: Boolean,
      mdEditable: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-deletable': this.mdDeletable,
          'md-disabled': this.disabled,
          'md-editable': this.mdEditable
        };
      }
    }
  };
</script>
