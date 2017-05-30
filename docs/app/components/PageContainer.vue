<template>
  <div class="page-container" :class="{ centered }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .page-container.centered {
    max-width: 1280px;
    margin: auto;
    padding: 16px;
  }

  .page-container-section {
    font-size: 16px;
    letter-spacing: .01em;
    line-height: 1.6em;

    + .page-container-section {
      margin-top: 40px;
    }
  }
</style>

<script>
  import * as types from 'store/mutation-types'
  import { mapMutations } from 'vuex'

  export default {
    name: 'PageContainer',
    props: {
      title: String,
      centered: Boolean
    },
    methods: {
      ...mapMutations({
        setPageTitle: types.SET_PAGE_TITLE
      })
    },
    created () {
      this.$material.theming.theme = 'default'
      this.setPageTitle(this.title)
    }
  }
</script>
