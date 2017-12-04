<template>
  <splash-container splash centered :title="$t('pages.components.title')">
    <grid-layout>
      <grid-layout-item
        v-for="{ key, name } in components"
        :key="key"
        :icon="`icon-${key}`"
        :title="$t(`pages.${name}.title`)"
        :href="`/components/${key}`">
        {{ $t(`pages.${name}.description`) }}
      </grid-layout-item>
    </grid-layout>

    <button @click="shouldRender = !shouldRender">
      <span>Button Target!</span>

      <md-popover-portal>
        <transition name="test">
          <div class="test" v-if="shouldRender">Test</div>
        </transition>
      </md-popover-portal>
    </button>
  </splash-container>
</template>

<script>
  import MdPopoverPortal from 'components/MdPopover/MdPopoverPortal'

  export default {
    name: 'Components',
    components: {
      MdPopoverPortal
    },
    data: () => ({
      shouldRender: false,
      components: [
        {
          name: 'button',
          key: 'button'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

  button {
    margin: 24px;
  }

  .test {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transform: scaleY(1);
    transform-origin: top center;
    transition: .4s $md-transition-default-timing;
    background: #fff;
    color: #000;
  }

  .test-enter,
  .test-leave-active {
    opacity: 0;
    transform: scaleY(.8);
  }
</style>
