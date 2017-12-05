<template>
  <div class="md-app md-app-side-drawer" :class="[appClasses, $mdActiveTheme]">
    <slot name="md-app-drawer"></slot>

    <main class="md-app-container" :class="[$mdActiveTheme, scrollerClasses]" :style="contentStyles" @scroll.passive="handleScroll">
      <slot name="md-app-toolbar"></slot>
      <div class="md-app-scroller" :class="[$mdActiveTheme, scrollerClasses]" :style="containerStyles" @scroll.passive="handleScroll">
        <slot name="md-app-content"></slot>
      </div>
    </main>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdAppMixin from './MdAppMixin'

  export default new MdComponent({
    name: 'MdAppInternalSideDrawer',
    mixins: [MdAppMixin]
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-app-side-drawer {
    .md-app-container {
      flex-direction: column;
    }
  }
</style>
