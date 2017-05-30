<template>
  <div class="splash-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .splash-container {
    max-width: 1280px;
    margin: auto;
    padding: 16px;
  }
</style>

<script>
  import * as types from 'store/mutation-types'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'SplashContainer',
    props: {
      title: String
    },
    computed: {
      ...mapState(['splashPage'])
    },
    methods: {
      ...mapMutations({
        setPageTitle: types.SET_PAGE_TITLE,
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
