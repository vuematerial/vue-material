<template>
  <div class="md-app md-app-internal-drawer" :class="[appClasses, $mdActiveTheme]">
    <slot name="md-app-toolbar"></slot>

    <main class="md-app-container" :style="[containerStyles, contentStyles]" :class="[$mdActiveTheme, scrollerClasses]">
      <slot name="md-app-drawer"></slot>
      <div class="md-app-scroller" :class="[$mdActiveTheme, scrollerClasses]">
        <slot name="md-app-content"></slot>
      </div>
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
