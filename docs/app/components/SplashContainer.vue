<template>
  <transition name="splash-container">
    <div class="splash-container main-container" :class="{ centered }" v-if="isRendered">
      <slot />

      <ad-manager />
    </div>
  </transition>
</template>

<script>
  import * as types from 'store/mutation-types'
  import { mapActions, mapMutations, mapState } from 'vuex'
  import AdManager from './AdManager'

  export default {
    name: 'SplashContainer',
    components: {
      AdManager
    },
    props: {
      title: String,
      centered: Boolean
    },
    data: () => ({
      isRendered: false
    }),
    computed: {
      ...mapState(['splashPage'])
    },
    methods: {
      ...mapActions({
        setPageTitle: types.SET_PAGE_TITLE
      }),
      ...mapMutations({
        setSplashMode: types.SET_SPLASH_MODE
      })
    },
    async mounted () {
      this.$material.theming.theme = 'dark'
      this.setPageTitle(this.title)
      this.setSplashMode(true)

      await this.$nextTick()
      this.isRendered = true
    },
    beforeDestroy () {
      this.setSplashMode(false)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

  .splash-container {
    margin: auto;
    padding: 16px;
    transition: .3s $md-transition-default-timing;
    transition-property: transform;
    will-change: transform;
  }

  .splash-container-leave-active {
    display: none;
  }

  .splash-container-enter {
    transform: translate3D(0, 50px, 0);
  }

  .centered {
    max-width: 1312px;
  }
</style>
