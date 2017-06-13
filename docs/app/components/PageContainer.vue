<template>
  <transition name="page" appear>
    <div class="page-container main-container" :class="{ centered }">
      <slot />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  .page-container.centered {
    max-width: 1100px;
    margin: auto;
    padding: 16px;
  }

  .page-leave-active {
    display: none;
  }

  .page-enter-active {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
    transition: .4s $md-transition-default-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;
  }

  .page-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  >>> .page-container-section {
    letter-spacing: .01em;
    line-height: 1.6em;

    + .page-container-section {
      margin-top: 32px;
    }

    p > code {
      padding: 0 4px;
      display: inline-block;
      color: md-get-palette-color(red, A200);
      background: darken(md-get-palette-color(red, 50), 1%);
      border-radius: 2px;
    }
  }
</style>

<script>
  import * as types from 'store/mutation-types'
  import { mapActions } from 'vuex'

  export default {
    name: 'PageContainer',
    props: {
      title: String,
      centered: Boolean
    },
    methods: {
      ...mapActions({
        setPageTitle: types.SET_PAGE_TITLE
      })
    },
    created () {
      this.$material.theming.theme = 'default'
      this.setPageTitle(this.title)
    }
  }
</script>
