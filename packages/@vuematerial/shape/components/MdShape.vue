<template>
  <div class="md-shape">
    <div class="md-shape-notch">
      <div class="md-shape-notch-fill"></div>
      <div class="md-shape-notch-shadow-x"></div>
      <div class="md-shape-notch-shadow-y"></div>
    </div>

    <div class="md-shape-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  class MdShape extends Vue {

  }

  export default MdShape
</script>
