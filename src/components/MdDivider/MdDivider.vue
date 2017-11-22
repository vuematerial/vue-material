<template>
  <li class="md-divider" :class="[$mdActiveTheme]" v-if="insideList"></li>
  <hr class="md-divider" :class="[$mdActiveTheme]" v-else>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdDivider',
    computed: {
      insideList () {
        return this.$parent.$options._componentTag === 'md-list'
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-divider {
    height: 1px;
    margin: 0;
    padding: 0;
    display: block;
    border: 0;
    transition: margin-left .3s $md-transition-default-timing;
    will-change: margin-left;

    &.md-inset {
      margin-left: 72px;
    }
  }
</style>
