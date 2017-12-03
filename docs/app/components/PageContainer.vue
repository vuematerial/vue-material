<template>
  <transition name="page-container" appear>
    <div class="page-container main-container" :class="{ centered }">
      <ad-manager />

      <slot />
    </div>
  </transition>
</template>

<script>
  import * as types from 'store/mutation-types'
  import { mapState, mapActions } from 'vuex'
  import AdManager from './AdManager'

  export default {
    name: 'PageContainer',
    components: {
      AdManager
    },
    props: {
      title: String,
      centered: Boolean
    },
    computed: {
      ...mapState({
        currentTheme: 'theme'
      })
    },
    methods: {
      ...mapActions({
        setPageTitle: types.SET_PAGE_TITLE
      })
    },
    created () {
      this.$material.theming.theme = this.currentTheme
      this.setPageTitle(this.title)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .page-container.centered {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px;
    transition: .4s $md-transition-default-timing;
  }

  .page-container-leave-active {
    display: none;
  }

  .page-container-enter-active {
    opacity: 0;
    transform: translate3d(0, 150px, 0);
    transition-property: opacity, transform;
    will-change: opacity, transform;
  }

  .page-container-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  >>> .page-container-section {
    letter-spacing: .01em;
    line-height: 1.6em;

    + .page-container-section {
      margin-top: 32px;
    }

    p >,
    li >,
    .note-block {
      code {
        padding: 0 4px;
        display: inline-block;
        color: md-get-palette-color(red, A200);
        background: rgba(#000, .07);
        border-radius: 2px;
        line-height: 1.45em;
      }
    }

    p,
    .md-layout-row {
      + .code-example {
        margin-top: 1em;
      }
    }
  }
</style>
