<template>
  <div class="md-app md-app-internal-drawer md-layout-column" :class="[appClasses, $mdActiveTheme]">
    <slot name="md-app-toolbar"></slot>

    <main class="md-app-container md-flex md-layout-row" :style="[containerStyles, contentStyles]" :class="[$mdActiveTheme, scrollerClasses]">
      <slot name="md-app-drawer-left"></slot>
      <slot name="md-app-drawer-right-previous"></slot>
      <div class="md-app-scroller md-layout-column md-flex" :class="[$mdActiveTheme, scrollerClasses]">
        <slot name="md-app-content"></slot>
      </div>
      <slot name="md-app-drawer-right"></slot>
    </main>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdAppMixin from './MdAppMixin'

  export default new MdComponent({
    name: 'MdAppInternalDrawer',
    mixins: [MdAppMixin]
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-app-internal-drawer {
    flex-direction: column;

    .md-app-scroller {
      overflow: auto;
    }
  }
</style>
