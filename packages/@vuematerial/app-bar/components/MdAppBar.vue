<template>
  <div class="md-app-bar">
    <slot />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  class MdAppBar extends Vue {

  }

  export default MdAppBar
</script>
