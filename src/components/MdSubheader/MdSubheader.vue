<template>
  <li class="md-subheader" :class="[$mdActiveTheme]" v-if="insideList">
    <slot />
  </li>

  <div class="md-subheader" :class="[$mdActiveTheme]" v-else>
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdSubheader',
    computed: {
      insideList () {
        return this.$parent.$options._componentTag === 'md-list'
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-subheader {
    min-height: 48px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    font-size: 14px;
    font-weight: 500;
  }
</style>
