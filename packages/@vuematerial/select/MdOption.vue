<template>
  <option class="md-option">
    <slot />
  </option>
</template>

<script lang="ts">
  import { Component, Vue, Inject } from 'vue-property-decorator'

  @Component
  class MdOption extends Vue {

    @Inject()
    mdSelectService!: string

    mounted () {
      console.log(this.mdSelectService)
    }

  }

  export default MdOption
</script>
