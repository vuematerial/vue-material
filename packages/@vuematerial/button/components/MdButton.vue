<template>
  <MdRipple md-tag="button" class="md-button">
    <slot />
  </MdRipple>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MdRipple from '@vuematerial/ripple/components/MdRipple.vue'

  @Component({
    components: {
      MdRipple
    }
  })
  class MdButton extends Vue {

  }

  export default MdButton
</script>
