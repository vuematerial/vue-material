<style lang="scss">
  @import '~components/MdAnimation/variables';
  @import '~components/MdElevation/mixins';
  @import '~components/MdElevation/variables';

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;
  $md-button-font-size: 14px;

  $md-button-dense-height: 32px;

  $md-button-icon-size: 40px;

  .md-button {
    min-width: $md-button-min-width;
    height: $md-button-height;
    margin: 6px 8px;
    padding: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    user-select: none;
    outline: none;
    background: transparent;
    border: 0;
    border-radius: $md-button-radius;
    transition-timing-function: $md-transition-stand-timing;
    transition-property: box-shadow, color, background-color;
    transition-duration: $md-elevation-transition-duration,
                         $md-transition-default-duration,
                         $md-transition-default-duration;
    will-change: box-shadow, color, background-color;
    font-family: inherit;
    font-size: $md-button-font-size;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;

    &:active {
      outline: none;
    }

    &[disabled] {
      pointer-events: none;
    }

    &:not([disabled]) {
      cursor: pointer;

      &:hover,
      &:active,
      &.md-focused {
        &:before {
          background-color: currentColor;
          opacity: .15;
        }
      }

      &.md-focused {
        &.md-primary,
        &.md-accent {
          &:before {
            opacity: .2;
          }
        }
      }

      &:active {
        &:before {
          opacity: .2;
        }
      }
    }

    &::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
      transition: $md-transition-default;
      will-change: background-color, opacity;
      content: " ";
    }

    &.md-dense {
      height: $md-button-dense-height;
      font-size: 13px;
    }

    &.md-raised:not([disabled]) {
      @include md-elevation(2);

      &:active {
        @include md-elevation(8);
      }
    }

    + .md-button {
      margin-left: 0;
    }

    .md-ripple {
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .md-button-spaced .md-ripple {
    padding: 0 16px;
  }

  .md-icon-button {
    width: $md-button-icon-size;
    min-width: $md-button-icon-size;
    height: $md-button-icon-size;
    margin: 0 6px;
    border-radius: 50%;

    &.md-dense {
      width: $md-button-dense-height;
      min-width: $md-button-dense-height;
      height: $md-button-dense-height;
    }

    .md-ripple {
      border-radius: 50%;
    }

    .md-ripple-wave {
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
    }

    .md-ripple-enter-active {
      transition-duration: 1.2s;
    }
  }

  .md-button-content {
    position: relative;
    z-index: 2;
  }
</style>

<script>
  import MdComponent from 'core/MdComponent'
  import ripple from 'core/mixins/ripple'
  import MdButtonContent from './MdButtonContent'

  export default new MdComponent({
    name: 'MdButton',
    components: {
      MdButtonContent
    },
    mixins: [ripple],
    props: {
      href: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      to: [String, Object]
    },
    render (createElement) {
      const buttonContent = createElement('md-button-content', {
        attrs: {
          mdRipple: this.mdRipple,
          disabled: this.disabled
        }
      }, this.$slots.default)
      let buttonAttrs = {
        staticClass: 'md-button',
        class: [this.$mdActiveTheme],
        attrs: {
          href: this.href,
          disabled: this.disabled,
          type: this.type || 'button'
        },
        on: {
          click: ($event) => {
            this.$emit('click', $event)
          }
        }
      }
      let tag = 'button'

      if (this.href) {
        tag = 'a'
      } else if (this.to) {
        tag = 'router-link'
        buttonAttrs.attrs = this.$options.propsData
      }

      return createElement(tag, buttonAttrs, [buttonContent])
    }
  })
</script>
