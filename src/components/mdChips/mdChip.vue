<template>
  <div class="md-chip" :class="[themeClass, classes]" tabindex="0">
    <slot></slot>

    <md-button
      class="md-icon-button md-dense md-delete"
      v-if="mdDeletable"
      @click.native="!disabled && $emit('delete')"
      @keyup.native.delete="!disabled && $emit('delete')"
      tabindex="-1">
      <md-icon class="md-icon-delete">cancel</md-icon>
    </md-button>
  </div>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      disabled: Boolean,
      mdDeletable: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-deletable': this.mdDeletable,
          'md-disabled': this.disabled
        };
      }
    }
  };
</script>
