<template>
  <div class="md-badge-content" v-if="hasDefaultSlot">
    <slot />
    <md-badge-standalone :class="badgeClasses">
      <div>
        {{ mdContent }}
      </div>
    </md-badge-standalone>
  </div>
  <md-badge-standalone :class="badgeClasses" v-else>
    {{ mdContent }}
  </md-badge-standalone>
</template>

<script>
  import MdComponent from 'core/MdComponent'

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
        default: 'top'
      }
    },
    computed: {
      hasDefaultSlot () {
        return !!this.$slots.default
      },
      badgeClasses () {
        return {
          ['md-position-' + this.mdPosition]: true
        }
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
