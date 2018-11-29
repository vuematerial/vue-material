<template>
  <select class="md-select">
    <slot />
  </select>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator'

  @Component
  class MdSelect extends Vue {

    @Provide()
    mdSelectService: object = {
      test: 1
    }

  }

  export default MdSelect
</script>
