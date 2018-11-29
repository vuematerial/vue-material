<template functional>
  <MdTagSwitcher
    v-on="listeners"
    :md-tag="props.mdTag"
    :class="[
      data.staticClass,
      data.class,
      'md-state',
      {
        'md-disabled': props.mdDisabled,
        'md-focused': props.mdFocused,
        'md-selected': props.mdSelected,
        'md-activated': props.mdActivated,
        'md-pressed': props.mdPressed,
        'md-dragged': props.mdDragged
      }
    ]"
    :style="[data.staticStyle, data.style]"
  >
    <slot />
  </MdTagSwitcher>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdTagSwitcher from '@vuematerial/tag-switcher'

  Vue.use(MdTagSwitcher)

  @Component
  class MdState extends Vue {

    @Prop({ type: String, default: 'div' })
    mdTag!: string

    @Prop({ type: Boolean, default: false })
    mdDisabled!: boolean

    @Prop({ type: Boolean, default: false })
    mdFocused!: boolean

    @Prop({ type: Boolean, default: false })
    mdSelected!: boolean

    @Prop({ type: Boolean, default: false })
    mdActivated!: boolean

    @Prop({ type: Boolean, default: false })
    mdPressed!: boolean

    @Prop({ type: Boolean, default: false })
    mdDragged!: boolean

  }

  export default MdState
</script>
