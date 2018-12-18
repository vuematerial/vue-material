<template>
  <MdRipple
    class="md-button"
    md-tag="button"
    v-on="$listeners"
    v-bind="buttonAttrs"
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
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import raf from 'raf'
  import MdRipple from '@vuematerial/ripple/components/MdRipple.vue'

  @Component({
    components: {
      MdRipple
    }
  })
  class MdButton extends Vue {

    @Prop({ type: Boolean, default: false })
    mdContained!: boolean

    @Prop({ type: Boolean, default: false })
    mdOutlined!: boolean

    get buttonAttrs () {
      let buttonAttrs = {
        ...this.$attrs
      }

      if (this.mdContained) {
        buttonAttrs['md-elevation'] = '2'
      }

      return buttonAttrs
    }

    get buttonClasses () {
      return {
        'md-contained': this.mdContained,
        'md-outlined': this.mdOutlined,
        'md-flat': !this.mdContained
      }
    }

  }

  export default MdButton
</script>
