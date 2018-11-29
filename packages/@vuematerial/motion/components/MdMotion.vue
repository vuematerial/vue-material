<template>
  <div class="md-motion">
    <slot />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  class MdMotion extends Vue {

  }

  export default MdMotion
</script>
