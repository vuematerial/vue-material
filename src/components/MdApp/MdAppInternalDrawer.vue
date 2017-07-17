<template>
  <div class="md-app md-app-side-drawer md-layout-column" :class="appClasses">
    <slot name="md-app-toolbar"></slot>

    <main class="md-app-container md-flex md-layout-row" :style="containerStyles">
      <slot name="md-app-drawer"></slot>
      <div class="md-app-scroller md-layout-column md-flex" @scroll.passive="handleScroll">
        <slot name="md-app-content"></slot>
      </div>
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
