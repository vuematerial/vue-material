<template>
  <div class="md-badge-content" v-if="hasDefaultSlot">
    <slot />
    <md-badge-standalone :class="badgeClasses" :style="styles">
      <div>
        {{ mdContent }}
      </div>
    </md-badge-standalone>
  </div>
  <md-badge-standalone :class="badgeClasses" :style="styles" v-else>
    {{ mdContent }}
  </md-badge-standalone>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'

  import MdBadgeStandalone from './MdBadgeStandalone'

  export default new MdComponent({
    name: 'MdBadge',
    components: {
      MdBadgeStandalone
    },
    props: {
      mdContent: [String, Number],
      mdPosition: {
        type: String,
        default: 'top',
        ...MdPropValidator('md-position', [
          'top',
          'bottom'
        ])
      },
      mdDense: Boolean
    },
    computed: {
      hasDefaultSlot () {
        return !!this.$slots.default
      },
      badgeClasses () {
        const staticClass = this.getStaticClass()
        const dynamicClass = this.$vnode.data.class

        return {
          ['md-position-' + this.mdPosition]: true,
          'md-dense': this.mdDense,
          ...staticClass,
          ...dynamicClass
        }
      },
      styles () {
        const staticStyle = this.$vnode.data.staticStyle
        const style = this.$vnode.data.style
        return {
          ...staticStyle,
          ...style
        }
      }
    },
    methods: {
      getStaticClass () {
        const staticClass = this.$vnode.data.staticClass

        function filterClasses () {
          staticClass.split(' ').filter(val => val).reduce((result, key) => {
            result[key] = true
            return result
          }, {})
        }

        return staticClass ? filterClasses() : {}
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-badge-content {
    position: relative;
    display: inline-block;
    .md-position {
      &-top {
        top: -4px;
      }
      &-bottom {
        bottom: -4px;
      }
    }
  }
</style>
