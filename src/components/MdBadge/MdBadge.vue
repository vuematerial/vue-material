<template>
  <div class="md-badge-content" v-if="hasDefaultSlot">
    <slot />
    <div class="md-badge" :class="[$mdActiveTheme, badgeClasses]">
      <div>
        {{ mdContent }}
      </div>
    </div>
  </div>
  <div class="md-badge" :class="[$mdActiveTheme, badgeClasses]" v-else>
    <div>
      {{ mdContent }}
    </div>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdBadge',
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

  .md-badge {
    position: absolute;
    transition: .3s $md-transition-default-timing;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -4px;
    font-size: 10px;
    font-style: normal;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #fff;
    pointer-events: none;
    .md-list-item-content & {
      position: relative;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &.md-square {
      width: auto;
      border-radius: 3px;
      height: 18px;
      padding: 0 4px;
    }
  }
</style>
