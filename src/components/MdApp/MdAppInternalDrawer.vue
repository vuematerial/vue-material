<template>
  <div class="md-app md-app-side-drawer md-layout-column">
    <slot name="md-toolbar"></slot>

    <main class="md-app-container md-flex md-layout-row" :style="containerStyles">
      <slot name="md-drawer"></slot>

      <slot name="md-content" class="md-flex"></slot>
    </main>
  </div>
</template>

<script>
  import MdAppMixin from './MdAppMixin'

  export default {
    name: 'MdAppInternalDrawer',
    mixins: [MdAppMixin]
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-app-internal-drawer {
    transition: .3s $md-transition-default-timing;
  }
</style>
