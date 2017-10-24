<template>
  <div class="splash-container main-container" :class="{ centered }">
    <slot />
  </div>
</template>

<script>
  import * as types from 'store/mutation-types'
  import { mapActions, mapMutations, mapState } from 'vuex'

  export default {
    name: 'SplashContainer',
    props: {
      title: String,
      centered: Boolean
    },
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
    mounted () {
      this.$material.theming.theme = 'dark'
      this.setPageTitle(this.title)
      this.setSplashMode(true)
    },
    beforeDestroy () {
      this.setSplashMode(false)
    }
  }
</script>

<style lang="scss" scoped>
  .splash-container {
    margin: auto;
    padding: 16px;
  }

  .centered {
    max-width: 1312px;
  }
</style>
