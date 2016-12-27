<template>
  <div class="md-chip" :class="[themeClass, classes]" tabindex="0">
    <slot></slot>

    <md-button class="md-icon-button md-dense md-delete" v-if="mdDeletable" @click="$emit('delete')">
      <md-icon>cancel</md-icon>
    </md-button>
  </div>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      mdDeletable: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-deletable': this.mdDeletable
        };
      }
    }
  };
</script>
