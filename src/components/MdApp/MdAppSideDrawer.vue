<template>
  <div class="md-app md-app-side-drawer md-layout-row">
    <slot name="md-drawer"></slot>

    <main class="md-app-container md-flex md-layout-column" :style="containerStyles">
      <slot name="md-toolbar"></slot>
      <slot name="md-content" class="md-flex"></slot>
    </main>
  </div>
</template>

<script>
  import MdAppMixin from './MdAppMixin'

  export default {
    name: 'MdAppInternalSideDrawer',
    mixins: [MdAppMixin]
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-app-side-drawer {
    transition: .3s $md-transition-default-timing;
  }
</style>
