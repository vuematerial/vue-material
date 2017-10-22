<template>
  <ul class="md-list" :class="[$mdActiveTheme]" v-on="$listeners">
    <slot />
  </ul>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdList'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list {
    margin: 0;
    padding: 8px 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    list-style: none;
    transition: .3s $md-transition-default-timing;

    &.md-dense {
      padding: 4px 0;
    }

    .md-divider {
      margin-top: -1px;
    }

    .md-subheader {
      &.md-inset {
        padding-left: 72px;
      }
    }

    > .md-subheader:first-of-type {
      margin-top: -8px;
    }
  }
</style>
