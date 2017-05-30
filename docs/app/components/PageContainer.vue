<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script>
  import * as types from 'store/mutation-types'
  import { mapMutations } from 'vuex'

  export default {
    name: 'PageContainer',
    props: {
      title: String
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
