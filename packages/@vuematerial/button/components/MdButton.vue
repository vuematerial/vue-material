<template>
  <MdRipple
    md-tag="button"
    class="md-button"
    :class="buttonClasses"
  >
    <span class="md-button-content" v-if="$slots.default.length === 1">
      <slot />
    </span>
    <template v-else>
      <slot />
    </template>
  </MdRipple>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import raf from 'raf'
  import MdRipple from '@vuematerial/ripple/components/MdRipple.vue'

  @Component({
    components: {
      MdRipple
    }
  })
  class MdButton extends Vue {

    isFlat: boolean = false

    get buttonClasses () {
      return {
        'md-flat': this.isFlat
      }
    }

    setIsFlat () {
      raf(() => {
        const { classList } = this.$el

        this.isFlat = !classList.contains('md-contained') && !classList.contains('md-fab')
      })
    }

    updated () {
      this.setIsFlat()
    }

    mounted () {
      this.setIsFlat()
    }

  }

  export default MdButton
</script>
