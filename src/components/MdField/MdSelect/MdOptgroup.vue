<template>
  <div class="md-optgroup">
    <md-subheader>{{ label }}</md-subheader>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdOptgroup',
    props: {
      label: String,
      disabled: Boolean
    },
    provide () {
      return {
        MdOptgroup: {
          disabled: this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .md-optgroup {
    .md-subheader {
      text-transform: uppercase;
    }

    .md-ripple.md-list-item-content {
      padding-left: 24px;
    }
  }
</style>
