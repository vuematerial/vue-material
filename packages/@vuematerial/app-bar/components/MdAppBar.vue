<template>
  <MdShape
    class="md-app-bar"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ 'md-extended': mdExtended }"
    :md-elevation="mdElevation"
    :md-corner-type="mdCut ? 'notch' : ''"
    :md-notch-pos="mdCut"
    :md-corner-size="36"
    >
    <slot />
  </MdShape>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdShape from '@vuematerial/shape/components/MdShape.vue'

  @Component({
    components: {
      MdShape
    }
  })
  class MdAppBar extends Vue {

    @Prop({ type: String, default: '' })
    mdCut!: string

    @Prop({ type: Boolean, default: false })
    mdExtended!: boolean

    @Prop({ type: [String, Number], default: 4 })
    mdElevation!: string

  }

  export default MdAppBar
</script>
