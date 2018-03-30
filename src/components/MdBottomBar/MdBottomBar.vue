<template>
  <div class="md-bottom-bar" :class="[$mdActiveTheme, barClasses]">
    <md-ripple :md-disabled="mdType === 'fixed'" :md-active="MdBottomBar.mouseEvent">
      <slot />
    </md-ripple>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdRipple from 'components/MdRipple/MdRipple'

  export default new MdComponent({
    name: 'MdBottomBar',
    components: {
      MdRipple
    },
    props: {
      mdSyncRoute: Boolean,
      mdActiveItem: [String, Number],
      mdType: {
        type: String,
        default: 'fixed',
        ...MdPropValidator('md-type', ['fixed', 'shift'])
      }
    },
    data () {
      return {
        MdBottomBar: {
          mouseEvent: null,
          activeItem: null,
          items: {},
          syncRoute: this.mdSyncRoute
        }
      }
    },
    provide () {
      return {
        MdBottomBar: this.MdBottomBar
      }
    },
    computed: {
      activeItem () {
        return this.MdBottomBar.activeItem
      },
      barClasses () {
        return {
          ['md-type-' + this.mdType]: true
        }
      }
    },
    watch: {
      activeItem () {
        this.$emit('md-changed', this.activeItem)
      },
      mdSyncRoute () {
        this.MdBottomBar.syncRoute = mdSyncRoute
      }
    },
    methods: {
      hasActiveItem () {
        return this.MdBottomBar.activeItem || this.mdActiveItem
      },
      getItemsAndKeys () {
        const items = this.MdBottomBar.items

        return {
          items,
          keys: Object.keys(items)
        }
      },
      setActiveItemByIndex (index) {
        const { keys } = this.getItemsAndKeys()

        if (!this.mdActiveItem) {
          this.MdBottomBar.activeItem = keys[index]
        } else {
          this.MdBottomBar.activeItem = this.mdActiveItem
        }
      }
    },
    created () {
      this.MdBottomBar.type = this.mdType
    },
    mounted () {
      this.$nextTick().then(() => {
        if (!this.mdSyncRoute) {
          this.setActiveItemByIndex(0)
        }
      })

    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  .md-bottom-bar {
    @include md-elevation(8);
    width: 100%;
    transition: background-color .5s $md-transition-default-timing;

    > .md-ripple {
      display: flex;
      flex-wrap: wrap;
    }

    &.md-type-fixed {
      justify-content: center;

      .md-bottom-bar-item {
        min-width: 80px;
        max-width: 168px;
        transition: $md-transition-default;
        transition-property: color;
        will-change: color;

        .md-bottom-bar-label {
          transform: scale(.8571) translate3D(0, 4px, 0);
        }

        &.md-active {
          .md-ripple {
            padding-top: 6px;
          }

          .md-bottom-bar-icon {
            transform: translate3d(0, -2px, 0);
          }

          .md-bottom-bar-label {
            transform: translate3D(0, 3px, 0);
          }
        }
      }
    }

    &.md-type-shift {
      justify-content: center;

      > .md-ripple {
        .md-ripple-enter-active {
          transition-duration: 1.1s !important;
        }

        .md-ripple-enter {
          opacity: 1;
        }
      }

      .md-bottom-bar-item {
        min-width: 56px;
        max-width: 96px;
        flex: 1 1 32px;
        transition: .3s $md-transition-default-timing;
        transition-property: padding, min-width, max-width, flex, color;
        will-change: padding, min-width, max-width, flex, color;

        .md-ripple {
          padding: 16px;
        }

        .md-bottom-bar-icon {
          transform: translate3d(0, 8px, 0);
        }

        .md-bottom-bar-label {
          opacity: 0;
          transform: scale(.7) translate3d(0, 6px, 0);
        }

        &.md-active {
          min-width: 96px;
          max-width: 168px;
          flex: 1 1 72px;

          .md-ripple {
            padding: 6px 0 10px;
          }

          .md-bottom-bar-icon {
            transform: translate3d(0, 0, 0);
          }

          .md-bottom-bar-label {
            opacity: 1;
            transform: translate3d(0, 3px, 0);
          }
        }
      }
    }

    .md-bottom-bar-item {
      height: 56px;
      margin: 0;
      flex: 1;
      cursor: pointer;
      border-radius: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1em;
      text-transform: none;

      .md-ripple {
        padding: 8px 12px 10px;
        transition: padding .3s $md-transition-stand-timing;
        will-change: padding;
      }

      .md-button-content {
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .md-bottom-bar-icon,
      .md-bottom-bar-label {
        transition: .3s $md-transition-default-timing;
        transition-property: transform, opacity;
        will-change: transform, opacity;
      }
    }
  }
</style>
