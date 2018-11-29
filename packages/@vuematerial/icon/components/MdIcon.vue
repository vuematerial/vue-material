<template>
  <MdSvgLoader
    v-if="mdSrc"
    :md-src="mdSrc"
    class="md-icon md-icon-image"
    @md-loaded="$emit('md-loaded')"
  />

  <i v-else class="md-icon md-icon-font">
    <slot />
  </i>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdSvgLoader from '@vuematerial/svg-loader/components/MdSvgLoader'

  @Component({
    components: {
      MdSvgLoader
    }
  })
  class MdIcon extends Vue {

    @Prop({ type: String, default: '' })
    mdSrc!: string

  }

  export default MdIcon
</script>
