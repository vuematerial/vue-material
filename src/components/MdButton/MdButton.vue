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
      disabled: Boolean
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
        class: [
          this.$mdActiveTheme,
          {
            'md-ripple-off': !this.mdRipple
          }
        ],
        attrs: {
          href: this.href,
          disabled: this.disabled,
          type: !this.href && (this.type || 'button')
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
      } else if (this.$router && this.to) {
        buttonAttrs.props = this.$props
        tag = 'router-link'
      }

      return createElement(tag, buttonAttrs, [buttonContent])
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdElevation/variables";

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;
  $md-button-font-size: 14px;

  $md-button-dense-height: 32px;

  $md-button-icon-size: 40px;

  $md-button-fab-size: 56px;
  $md-button-fab-size-mini: $md-button-icon-size;

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
    transition: $md-transition-default;
    transition-property: box-shadow, color, background-color;
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

      &.md-ripple-off:active:before {
        opacity: .26;
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

      &.md-ripple-off:active:before {
        opacity: .2;
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

  .md-icon-button,
  .md-fab {
    border-radius: 50%;

    &:before {
      border-radius: 50%;
    }

    .md-ripple {
      border-radius: 50%;
    }
  }

  .md-icon-button,
  .md-fab.md-mini,
  .md-fab.md-dense {
    .md-ripple-wave {
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
    }
  }

  .md-icon-button {
    width: $md-button-icon-size;
    min-width: $md-button-icon-size;
    height: $md-button-icon-size;
    margin: 0 6px;

    &.md-dense {
      width: $md-button-dense-height;
      min-width: $md-button-dense-height;
      height: $md-button-dense-height;
    }

    .md-ripple-enter-active {
      transition-duration: 1.2s;
    }
  }

  .md-fab {
    @include md-elevation(6);

    width: $md-button-fab-size;
    height: $md-button-fab-size;
    padding: 0;
    min-width: 0;
    overflow: hidden;

    &:active {
      @include md-elevation(12);
    }

    &.md-plain.md-button:not([disabled]) {
      color: rgba(#000, .87);
      background-color: #fff;

      .md-icon-font {
        color: rgba(#000, .87);
      }

      .md-icon-image {
        fill: rgba(#000, .87);
      }
    }

    &.md-mini,
    &.md-dense {
      width: $md-button-fab-size-mini;
      height: $md-button-fab-size-mini;
    }
  }
</style>
